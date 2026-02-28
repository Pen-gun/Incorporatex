import { Link } from 'react-router-dom';
import { Instagram, PinIcon, Twitter } from 'lucide-react';
import { footerSections, footerSocials } from '../lib/navigations.ts';
import { useState } from 'react';

const FooterBar = () => {
  const [event, setEvent] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${event}`);
    setEvent('');
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-stone-950 dark:to-black text-white mt-auto">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-widest">Stay Connected</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Join the ClassXNeedle World</h3>
            <p className="text-stone-400 text-base sm:text-lg leading-relaxed">
              Subscribe for exclusive access to new collections, style guides, and member-only offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
              <input
                onChange={(e) => setEvent(e.target.value)}
                value={event}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-5 py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder:text-stone-500 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Class<span className="text-blue-400">X</span>Needle
              </h2>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Premium clothing crafted with precision and passion. Where timeless elegance meets modern sophistication.
            </p>
            <div className="flex items-center gap-4">
              {footerSocials.map((social) => {
                const icon = social.label === 'Instagram' ? Instagram : social.label === 'Twitter' ? Twitter : PinIcon;
                const Icon = icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-stone-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('#') ? (
                      <a
                        href={link.to}
                        className="text-stone-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-stone-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-500">
            <p>© {new Date().getFullYear()} ClassXNeedle. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;