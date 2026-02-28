const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="text-center space-y-8 px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent animate-fade-in">
            Welcome to ClassXNeedle
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up max-w-2xl mx-auto">
            Discover premium clothing crafted with precision and passion. Where timeless elegance meets modern sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-slide-up">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-elevation-2">
              Shop Now
            </button>
            <button className="px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-stone-900 font-semibold rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-stone-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-slate-900 dark:text-white">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Premium Quality', description: 'Crafted with the finest materials and attention to detail.' },
              { title: 'Sustainable', description: 'Eco-friendly practices in every step of production.' },
              { title: 'Fast Shipping', description: 'Quick delivery to get your style on time.' },
              { title: 'Easy Returns', description: '30-day hassle-free return policy.' },
              { title: 'Customer Support', description: '24/7 dedicated support for all your needs.' },
              { title: 'Exclusive Deals', description: 'Members-only offers and early access to new collections.' },
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover your next favorite piece.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-elevation-2">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;