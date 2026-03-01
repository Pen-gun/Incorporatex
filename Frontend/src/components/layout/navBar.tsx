import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { mainNav } from '../lib/navigations.ts';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-stone-950/90">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center" onClick={closeMobileMenu}>
          <span className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 dark:text-stone-100 dark:group-hover:text-blue-300">
            Incorporatex
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-blue-600 after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive
                    ? 'text-slate-900 after:scale-x-100 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-stone-300 dark:hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-100 sm:hidden dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg sm:hidden dark:border-stone-800 dark:bg-stone-950">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
