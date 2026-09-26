import React from 'react';
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react';
import { profileData } from '../data/profile';
import { IsometricWorkspace } from './IsometricWorkspace';

interface HeroProps {
  onSelectProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full pt-8 pb-12 md:pt-14 md:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text & Calls to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            {/* Internship status indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38CFA3] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38CFA3]" />
              </span>
              <span className="font-semibold text-slate-800">OPEN TO INTERNSHIPS</span>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <span className="text-slate-500">CHENNAI & NEARBY</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance">
                I BUILD THINGS<br />
                THAT MAKE<br />
                <span className="bg-gradient-to-r from-slate-900 via-[#3B6FD8] to-[#059669] bg-clip-text text-transparent">
                  SENSE.
                </span>
              </h1>
            </div>

            {/* Concise Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed text-pretty">
              {profileData.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#3B6FD8] hover:bg-[#305EC0] active:scale-[0.98] transition-all rounded-lg shadow-sm shadow-blue-500/15"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 text-white/80" />
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Quick Proof Points */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-6 text-xs text-slate-500 font-mono">
              <div>
                <span className="text-slate-900 font-bold">2028</span> Grad
              </div>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <div>
                <span className="text-slate-900 font-bold">{profileData.cgpa}</span> CGPA
              </div>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <div>
                <span className="text-slate-900 font-bold">Quantum</span> Minor
              </div>
            </div>

          </div>

          {/* Right Column: Isometric Developer Workspace */}
          <div className="lg:col-span-6 w-full relative">
            <IsometricWorkspace onSelectProject={onSelectProject} />
          </div>

        </div>
      </div>
    </section>
  );
};

