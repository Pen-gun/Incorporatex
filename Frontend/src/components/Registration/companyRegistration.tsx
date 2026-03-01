import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type CompanyRegistrationData = {
  companyName: string;
  registrationNumber: string;
  shareholderCount: number;
  capital: number;
};

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CompanyRegistrationData>({
    companyName: '',
    registrationNumber: '',
    shareholderCount: 1,
    capital: 0,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sessionStorage.setItem('incorporatex.companyRegistration', JSON.stringify(formData));
    navigate('/shareholder');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Company Name</span>
          <input
            required
            type="text"
            value={formData.companyName}
            onChange={(event) => setFormData((prev) => ({ ...prev, companyName: event.target.value }))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Incorporatex Pvt Ltd"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Registration Number</span>
          <input
            required
            type="text"
            value={formData.registrationNumber}
            onChange={(event) => setFormData((prev) => ({ ...prev, registrationNumber: event.target.value }))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="REG-2026-001"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Number of Shareholders</span>
          <input
            required
            min={1}
            type="number"
            value={formData.shareholderCount}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, shareholderCount: Number(event.target.value) }))
            }
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Authorized Capital (USD)</span>
          <input
            required
            min={0}
            type="number"
            value={formData.capital}
            onChange={(event) => setFormData((prev) => ({ ...prev, capital: Number(event.target.value) }))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="50000"
          />
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
        >
          Continue to Step 2
        </button>
      </div>
    </form>
  );
};

export default CompanyRegistration;
