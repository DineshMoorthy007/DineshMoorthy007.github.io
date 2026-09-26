import React, { useState, useEffect } from 'react';
import { Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute = '/', onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentRoute !== '/') {
      if (onNavigate) {
        onNavigate('/');
        // After navigating back to home, scroll to the hash
        setTimeout(() => {
          const id = href.replace('#', '');
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#FAFCFF]/90 backdrop-blur-md border-slate-200/80 py-3 shadow-xs'
          : 'bg-[#FAFCFF] border-slate-200/40 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={handleBrandClick}
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-[#5B8DEF] transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#5B8DEF]" />
          <span>DINESH MOORTHY</span>
        </a>

        {/* Zone 2: Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#work"
            onClick={(e) => handleLinkClick(e, '#work')}
            className="hover:text-slate-900 transition-colors focus-visible:ring-1 focus-visible:ring-[#3B6FD8] rounded"
          >
            Work
          </a>
          <a
            href="#achievements"
            onClick={(e) => handleLinkClick(e, '#achievements')}
            className="hover:text-slate-900 transition-colors focus-visible:ring-1 focus-visible:ring-[#3B6FD8] rounded"
          >
            Credentials
          </a>
          <a
            href="#toolkit"
            onClick={(e) => handleLinkClick(e, '#toolkit')}
            className="hover:text-slate-900 transition-colors focus-visible:ring-1 focus-visible:ring-[#3B6FD8] rounded"
          >
            Toolkit
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="hover:text-slate-900 transition-colors focus-visible:ring-1 focus-visible:ring-[#3B6FD8] rounded"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hover:text-slate-900 transition-colors focus-visible:ring-1 focus-visible:ring-[#3B6FD8] rounded"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs whitespace-nowrap"
          >
            <Github className="w-3.5 h-3.5 text-slate-700" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3B6FD8] hover:bg-[#305EC0] active:scale-[0.98] rounded-lg transition-all whitespace-nowrap shadow-xs"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 bg-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-md px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            <a
              href="#work"
              onClick={(e) => handleLinkClick(e, '#work')}
              className="py-2 border-b border-slate-100 hover:text-[#3B6FD8]"
            >
              Work
            </a>
            <a
              href="#achievements"
              onClick={(e) => handleLinkClick(e, '#achievements')}
              className="py-2 border-b border-slate-100 hover:text-[#3B6FD8]"
            >
              Credentials
            </a>
            <a
              href="#toolkit"
              onClick={(e) => handleLinkClick(e, '#toolkit')}
              className="py-2 border-b border-slate-100 hover:text-[#3B6FD8]"
            >
              Toolkit
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="py-2 border-b border-slate-100 hover:text-[#3B6FD8]"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="py-2 border-b border-slate-100 hover:text-[#3B6FD8]"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-800 border border-slate-200 rounded-lg"
              >
                <Github className="w-4 h-4" />
                <span>GitHub ↗</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center py-2 text-xs font-semibold text-white bg-[#3B6FD8] hover:bg-[#305EC0] rounded-lg shadow-xs"
              >
                Open to Internships
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
