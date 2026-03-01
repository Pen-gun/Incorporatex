import Layout from "../components/layout/layout.tsx";
import ShareholderRegistrationForm from "../components/Registration/shareholderRegistration.tsx";

const ShareholderRegistrationPage = () => {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-teal-50 p-5 shadow-sm sm:p-6 dark:border-emerald-900/40 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white">
              Step 2 of 2
            </span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              Shareholder Details
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-stone-800">
              <div className="h-2 w-full rounded-full bg-linear-to-r from-emerald-500 to-teal-600" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-stone-300">100%</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">Register Shareholders</h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-stone-300">
            Add shareholder details for the company completed in step 1.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8 dark:border-stone-700 dark:bg-stone-800 dark:shadow-black/20">
          <ShareholderRegistrationForm />
        </div>
      </div>
    </Layout>
  );
};

export default ShareholderRegistrationPage;
