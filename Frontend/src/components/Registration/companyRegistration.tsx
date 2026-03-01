const CompanyRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-stone-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Register Your Company
        </h1>
        <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6 sm:p-8">
          {/* Registration form would go here */}
          <p className="text-gray-700 dark:text-gray-300">
            Please fill out the form below to register your company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;