import React from 'react';
import { MapPin, BookOpen, Atom, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full">
          <div className="text-xs font-semibold text-[#5B8DEF] tracking-wider uppercase mb-2">
            BACKGROUND & FOCUS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ABOUT
          </h2>
          
          <p className="mt-6 max-w-none text-lg sm:text-xl text-slate-700 font-normal leading-relaxed text-pretty">
            {profileData.aboutBio}
          </p>

          {/* Clean 3-column metadata card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            
            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-[#3B6FD8]" />
                <span className="font-bold text-slate-700">CSE</span>
              </div>
              <div className="text-sm font-bold text-slate-900">
                {profileData.academicFocus}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Foundations in algorithms, OS, networks & distributed systems.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <Atom className="w-3.5 h-3.5 text-[#8B7CF6]" />
                <span className="font-bold text-slate-700">MINOR</span>
              </div>
              <div className="text-sm font-bold text-slate-900">
                {profileData.minor}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Quantum circuits, state vector manipulation, and quantum key distribution.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#38CFA3]" />
                <span className="font-bold text-slate-700">LOCATION</span>
              </div>
              <div className="text-sm font-bold text-slate-900">
                {profileData.location}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Available on-site in Chennai, nearby regions, and remote.
              </p>
            </div>

          </div>

          {/* Subtle Engineering Ethos */}
          <div className="mt-8 pt-6 border-t border-slate-200/70">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Iterative Approach
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white border border-slate-200/70">
                <span className="font-bold text-[#3B6FD8]">BUILD</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Turn concepts into working prototypes.</p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200/70">
                <span className="font-bold text-[#FF9F43]">BREAK</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Stress test limits to isolate failure points.</p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200/70">
                <span className="font-bold text-[#38CFA3]">LEARN</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Extract core lessons by building hands-on.</p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200/70">
                <span className="font-bold text-[#8B7CF6]">REFINE</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Tighten architecture once ideas validate.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
