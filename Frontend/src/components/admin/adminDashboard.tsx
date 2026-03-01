import { useCompanies } from '../../hooks/useCompanyApi';

const AdminDashboard = () => {
  const { data: companies, isLoading, isError } = useCompanies();

  if (isLoading) {
    return <div className="py-12 text-center text-gray-500">Loading companies...</div>;
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
        Failed to load companies. Please try again.
      </div>
    );
  }

  if (!companies || companies.length === 0) {
    return <div className="py-12 text-center text-gray-500">No companies registered yet.</div>;
  }

  return (
    <div className="space-y-6">
      {companies.map((company) => (
        <div
          key={company.id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-800"
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-stone-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Capital: ${Number(company.totalCapitalInvested).toLocaleString()} &middot;
                Shareholders: {company.numberOfShareholders}
              </p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                company.status === 'SUBMITTED'
                  ? 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300'
              }`}
            >
              {company.status}
            </span>
          </div>

          {company.shareholders.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-stone-900">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                      #
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                      First Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                      Last Name
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                      Nationality
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-stone-700">
                  {company.shareholders.map((sh, idx) => (
                    <tr key={sh.id}>
                      <td className="px-6 py-3 text-gray-700 dark:text-gray-300">{idx + 1}</td>
                      <td className="px-6 py-3 text-gray-900 dark:text-white">{sh.firstName}</td>
                      <td className="px-6 py-3 text-gray-900 dark:text-white">{sh.lastName}</td>
                      <td className="px-6 py-3 text-gray-700 dark:text-gray-300">
                        {sh.nationality}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {company.shareholders.length === 0 && (
            <div className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              No shareholders registered yet.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
