import Layout from "../components/layout/layout.tsx";
import ShareholderRegistrationForm from "../components/Registration/shareholderRegistration.tsx";

const ShareholderRegistrationPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Step 2 of 2
            </span>
            <span className="text-gray-500 dark:text-gray-400">Shareholder Registration</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Register Shareholders</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Add shareholder details for the company completed in step 1.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6 sm:p-8">
          <ShareholderRegistrationForm />
        </div>
      </div>
    </Layout>
  );
};

export default ShareholderRegistrationPage;
