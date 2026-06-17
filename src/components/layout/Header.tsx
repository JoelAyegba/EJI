import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, FileText, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../seoConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-nav w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 cursor-pointer group" aria-label="Equal Justice Initiative — home">
          <img
            src="/logo.jpeg"
            alt="Equal Justice Initiative logo"
            className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 font-sans tracking-wide cursor-pointer ${
                  isActive
                    ? 'text-advocacy-gold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeHeaderNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-advocacy-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavLink
            to="/pro-bono"
            className={({ isActive }) =>
              `flex items-center space-x-1.5 px-4 py-2 border rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-action-red border-action-red text-white shadow-lg shadow-action-red/20'
                  : 'border-slate-350 text-slate-700 hover:border-action-red hover:text-action-red hover:bg-action-red/5'
              }`
            }
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Report Abuse</span>
          </NavLink>

          <Link
            to="/contact"
            className="flex items-center space-x-1.5 px-4 py-2 bg-advocacy-gold text-slate-900 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-950 hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-advocacy-gold/10"
          >
            <Heart className="h-3.5 w-3.5 fill-current" />
            <span>Volunteer</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center space-x-2">
          <Link
            to="/pro-bono"
            onClick={closeMenu}
            className="sm:flex hidden items-center space-x-1 px-3 py-1.5 border border-slate-300 hover:border-action-red hover:text-action-red text-slate-700 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
          >
            <span>Report</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-50 text-advocacy-gold border-l-2 border-advocacy-gold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4 flex flex-col space-y-3 px-4">
                <Link
                  to="/pro-bono"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-action-red text-white rounded-lg text-sm font-semibold uppercase tracking-wider"
                >
                  <FileText className="h-4 w-4" />
                  <span>Report Abuse / Legal Aid</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-advocacy-gold text-neutral-dark rounded-lg text-sm font-bold uppercase tracking-wider"
                >
                  <Heart className="h-4 w-4 fill-current" />
                  <span>Become a Volunteer</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
