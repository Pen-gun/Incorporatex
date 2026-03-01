import { Link } from 'react-router-dom';
import { Instagram, PinIcon, Twitter } from 'lucide-react';
import { footerSections, footerSocials } from '../lib/navigations.ts';

const FooterBar = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black dark:from-stone-950 dark:to-black text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1 space-y-6">
            <div>
              <Link to="/" className="text-2xl sm:text-3xl font-bold hover:text-blue-400 transition-colors duration-300">
                Incorporatex
              </Link>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Simplifying business incorporation for entrepreneurs worldwide. Fast, secure, and compliant solutions for company registration.
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
            <p>&copy; {new Date().getFullYear()} Incorporatex. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">&bull;</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <span className="hidden sm:inline">&bull;</span>
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
