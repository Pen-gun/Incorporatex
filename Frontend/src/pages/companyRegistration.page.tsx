import Layout from "../components/layout/layout.tsx";
import CompanyRegistrationForm from "../components/Registration/companyRegistration.tsx";

const CompanyRegistrationPage = () => {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        <div className="mb-6 rounded-2xl border border-slate-200 bg-linear-to-br from-sky-50 via-white to-indigo-50 p-5 shadow-sm sm:p-6 dark:border-stone-700 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-600 px-3 py-1 font-semibold text-white">Step 1 of 2</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
              Company Details
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-stone-800">
              <div className="h-2 w-1/2 rounded-full bg-linear-to-r from-sky-500 to-blue-600" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-stone-300">50%</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Register Your Company</h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-stone-300">
            Complete company details first. You will continue to shareholder registration in the next step.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8 dark:border-stone-700 dark:bg-stone-800 dark:shadow-black/20">
          <CompanyRegistrationForm />
        </div>
      </div>
    </Layout>
  );
};

export default CompanyRegistrationPage;
