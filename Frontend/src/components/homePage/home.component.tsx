const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-stone-900 dark:via-stone-950 dark:to-blue-950">
        <div className="text-center space-y-8 px-4 sm:px-6 max-w-5xl mx-auto">
          <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Business Incorporation Made Simple</span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Incorporate Your Business in Minutes
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up max-w-3xl mx-auto">
            Streamline your company incorporation process with Incorporatex. Manage shareholders, collect investor information, and generate compliance documents all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-slide-up">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-elevation-2">
              Start Company Registration
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200 dark:border-stone-700">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">1000+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Companies</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">5000+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Shareholders</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">99.9%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-slate-900 dark:text-white">
            Simple 2-Step Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[{
              number: '1',
              title: 'Company Information',
              description: 'Enter your company details, shareholder count, and capital information.',
              features: ['Company Name', 'Shareholder Count', 'Capital Details']
            }, {
              number: '2',
              title: 'Shareholder Details',
              description: 'Add shareholder information including names, nationality, and investment details.',
              features: ['Personal Information', 'Nationality', 'Investment Amount']
            }].map((step, index) => (
              <div
                key={index}
                className="p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-stone-800 dark:to-stone-700 rounded-xl shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-stone-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-slate-900 dark:text-white">
            Why Choose Incorporatex?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Secure & Compliant',
                description: 'All data is encrypted and compliant with international standards.'
              }, {
                title: 'Fast Processing',
                description: 'Complete your incorporation in minutes, not days.'
              }, {
                title: 'Expert Support',
                description: 'Get assistance from our team of incorporation specialists.'
              }, {
                title: 'Legal Documents',
                description: 'Automatic generation of all required legal documents.'
              }, {
                title: 'Data Persistence',
                description: 'Your data is saved automatically at each step.'
              }, {
                title: 'Multi-Currency Support',
                description: 'Accept investments in multiple currencies worldwide.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white dark:bg-stone-800 rounded-xl shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;