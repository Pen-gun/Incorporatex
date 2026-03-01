import Layout from "../components/layout/layout.tsx";
import CompanyRegistrationForm from "../components/Registration/companyRegistration.tsx";

const CompanyRegistrationPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-600 px-3 py-1 font-semibold text-white">Step 1 of 2</span>
            <span className="text-gray-500 dark:text-gray-400">Company Registration</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Register Your Company</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Complete company details first. You will continue to shareholder registration in the next step.
          </p>
        </div>

        <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6 sm:p-8">
          <CompanyRegistrationForm />
        </div>
      </div>
    </Layout>
  );
};

export default CompanyRegistrationPage;
