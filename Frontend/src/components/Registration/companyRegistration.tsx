import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompany, useCreateCompany, useUpdateCompany } from '../../hooks/useCompanyApi';

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem('incorporatex.companyId');
  const companyQuery = useCompany(companyId);
  const createCompany = useCreateCompany();
  const updateCompany = useUpdateCompany();

  const [name, setName] = useState('');
  const [numberOfShareholders, setNumberOfShareholders] = useState(1);
  const [totalCapitalInvested, setTotalCapitalInvested] = useState('');

  useEffect(() => {
    if (!companyQuery.data) return;
    setName(companyQuery.data.name);
    setNumberOfShareholders(companyQuery.data.numberOfShareholders);
    setTotalCapitalInvested(companyQuery.data.totalCapitalInvested);
  }, [companyQuery.data]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = { name, numberOfShareholders, totalCapitalInvested };
    const company =
      companyId && companyQuery.data
        ? await updateCompany.mutateAsync({ id: companyId, input: payload })
        : await createCompany.mutateAsync(payload);

    localStorage.setItem('incorporatex.companyId', company.id);
    navigate('/shareholder');
  };

  const isSaving = createCompany.isPending || updateCompany.isPending;
  const isError = createCompany.isError || updateCompany.isError;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {companyQuery.data && (
        <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200">
          Editing saved company draft: <span className="font-semibold">{companyQuery.data.name}</span>
        </div>
      )}

      {companyId && companyQuery.isError && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          Saved draft could not be loaded. A new company will be created when you continue.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Company Name</span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Incorporatex Pvt Ltd"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Number of Shareholders</span>
          <input
            required
            min={1}
            type="number"
            value={numberOfShareholders}
            onChange={(e) => setNumberOfShareholders(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Total Capital Invested (USD)</span>
          <input
            required
            min={0}
            step="0.01"
            type="number"
            value={totalCapitalInvested}
            onChange={(e) => setTotalCapitalInvested(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="50000"
          />
        </label>
      </div>

      {isError && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
          Failed to save company. Please try again.
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSaving || companyQuery.isLoading}
          className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50"
        >
          {isSaving || companyQuery.isLoading ? 'Saving...' : 'Continue to Step 2'}
        </button>
      </div>
    </form>
  );
};

export default CompanyRegistration;
