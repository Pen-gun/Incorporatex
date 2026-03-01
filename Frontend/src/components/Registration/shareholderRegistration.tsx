import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCompany, useReplaceShareholders, useSubmitCompany } from '../../hooks/useCompanyApi';
import type { ShareholderInput } from '../../types/api';

const ShareholderRegistration = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem('incorporatex.companyId');

  const { data: company, isLoading } = useCompany(companyId);
  const replaceShareholders = useReplaceShareholders();
  const submitCompanyMutation = useSubmitCompany();

  const [shareholders, setShareholders] = useState<ShareholderInput[]>([]);

  useEffect(() => {
    if (company && company.numberOfShareholders > 0) {
      setShareholders(
        Array.from({ length: company.numberOfShareholders }, () => ({
          firstName: '',
          lastName: '',
          nationality: '',
        })),
      );
    }
  }, [company]);

  const updateShareholder = (index: number, field: keyof ShareholderInput, value: string) => {
    setShareholders((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!companyId) return;

    await replaceShareholders.mutateAsync({ companyId, shareholders });
    await submitCompanyMutation.mutateAsync(companyId);

    localStorage.removeItem('incorporatex.companyId');
    navigate('/admin');
  };

  if (!companyId) {
    return (
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-100">
        <p className="font-medium">Step 1 required</p>
        <p className="mt-1 text-sm">
          Complete company registration first, then continue with shareholder registration.
        </p>
        <Link
          to="/company"
          className="mt-3 inline-block rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
        >
          Go to Step 1
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return <div className="py-8 text-center text-gray-500">Loading company data...</div>;
  }

  const isPending = replaceShareholders.isPending || submitCompanyMutation.isPending;
  const isError = replaceShareholders.isError || submitCompanyMutation.isError;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100">
        Registering {company?.numberOfShareholders} shareholder(s) for{' '}
        <span className="font-semibold">{company?.name}</span>
      </div>

      {shareholders.map((sh, index) => (
        <div
          key={index}
          className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-stone-700"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Shareholder {index + 1}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                First Name
              </span>
              <input
                required
                type="text"
                value={sh.firstName}
                onChange={(e) => updateShareholder(index, 'firstName', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-stone-700 dark:bg-stone-900 dark:text-white"
                placeholder="John"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Last Name
              </span>
              <input
                required
                type="text"
                value={sh.lastName}
                onChange={(e) => updateShareholder(index, 'lastName', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-stone-700 dark:bg-stone-900 dark:text-white"
                placeholder="Doe"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Nationality
              </span>
              <input
                required
                type="text"
                value={sh.nationality}
                onChange={(e) => updateShareholder(index, 'nationality', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 dark:border-stone-700 dark:bg-stone-900 dark:text-white"
                placeholder="Nepali"
              />
            </label>
          </div>
        </div>
      ))}

      {isError && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="flex justify-between">
        <Link
          to="/company"
          className="rounded-lg border border-gray-300 px-6 py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-stone-700 dark:text-gray-200 dark:hover:bg-stone-800"
        >
          Back to Step 1
        </Link>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50"
        >
          {isPending ? 'Submitting...' : 'Complete Registration'}
        </button>
      </div>
    </form>
  );
};

export default ShareholderRegistration;
