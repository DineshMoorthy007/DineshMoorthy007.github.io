import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-slate-900 tracking-tight">
              {profileData.name}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Designed & built with React.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-500 hover:text-slate-900"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center sm:text-left text-xs text-slate-400 font-mono flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Dinesh Moorthy. All rights reserved.</span>
          <span>Computer Science Engineering · Minor in Quantum Computing</span>
        </div>
      </div>
    </footer>
  );
};
