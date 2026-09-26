import React from 'react';
import { coreAreas } from '../data/skills';
import { Code2, Sparkles, Atom, Cpu, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  '01': <Code2 className="w-5 h-5 text-[#5B8DEF]" />,
  '02': <Sparkles className="w-5 h-5 text-[#38CFA3]" />,
  '03': <Atom className="w-5 h-5 text-[#8B7CF6]" />,
  '04': <Cpu className="w-5 h-5 text-[#FF9F43]" />,
};

interface WhatIBuildProps {
  onSelectCategory?: (category: string) => void;
}

export const WhatIBuild: React.FC<WhatIBuildProps> = ({ onSelectCategory }) => {
  const handleClick = (title: string) => {
    if (onSelectCategory) {
      onSelectCategory(title);
    }
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-i-build" className="py-16 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#5B8DEF] tracking-wider uppercase mb-2">
            CORE DOMAINS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHAT I BUILD
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Four areas that shape the way I explore technology.
          </p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreAreas.map((area) => (
            <div
              key={area.number}
              onClick={() => handleClick(area.title)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md relative overflow-hidden"
              style={{
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Subtle top color accent border */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-200 group-hover:h-1.5"
                style={{ backgroundColor: area.color }}
              />

              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {area.number}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-colors">
                    {ICON_MAP[area.number]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-slate-800 transition-colors">
                  {area.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {area.tagline}
                </p>
              </div>

              {/* Technologies on hover/preview */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Representative Focus
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                  {area.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center text-[11px] text-slate-700">
                      {tech}
                      {idx < 2 && <span className="mx-1 text-slate-300">·</span>}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:translate-x-0.5 transition-transform" style={{ color: area.color }}>
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
