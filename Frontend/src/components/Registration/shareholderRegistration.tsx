import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type CompanyRegistrationData = {
  companyName: string;
  registrationNumber: string;
  shareholderCount: number;
  capital: number;
};

type ShareholderData = {
  fullName: string;
  email: string;
  nationality: string;
  investmentAmount: number;
};

const ShareholderRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ShareholderData>({
    fullName: '',
    email: '',
    nationality: '',
    investmentAmount: 0,
  });

  const companyData = useMemo<CompanyRegistrationData | null>(() => {
    try {
      const raw = sessionStorage.getItem('incorporatex.companyRegistration');
      if (!raw) return null;
      return JSON.parse(raw) as CompanyRegistrationData;
    } catch {
      return null;
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sessionStorage.setItem('incorporatex.shareholderRegistration', JSON.stringify(formData));
    navigate('/');
  };

  if (!companyData) {
    return (
      <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-100">
        <p className="font-medium">Step 1 required</p>
        <p className="mt-1 text-sm">Complete company registration first, then continue with shareholder registration.</p>
        <Link
          to="/company"
          className="mt-3 inline-block rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
        >
          Go to Step 1
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100">
        Registering shareholder for <span className="font-semibold">{companyData.companyName}</span> ({companyData.registrationNumber})
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</span>
          <input
            required
            type="text"
            value={formData.fullName}
            onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</span>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Nationality</span>
          <input
            required
            type="text"
            value={formData.nationality}
            onChange={(event) => setFormData((prev) => ({ ...prev, nationality: event.target.value }))}
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nepali"
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Investment Amount (USD)</span>
          <input
            required
            min={0}
            type="number"
            value={formData.investmentAmount}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, investmentAmount: Number(event.target.value) }))
            }
            className="w-full rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-3 py-2 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="10000"
          />
        </label>
      </div>

      <div className="flex justify-between">
        <Link
          to="/company"
          className="rounded-lg border border-gray-300 dark:border-stone-700 px-6 py-2.5 font-semibold text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-100 dark:hover:bg-stone-800"
        >
          Back to Step 1
        </Link>
        <button
          type="submit"
          className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
        >
          Complete Registration
        </button>
      </div>
    </form>
  );
};

export default ShareholderRegistration;
