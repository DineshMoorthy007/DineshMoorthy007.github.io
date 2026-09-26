import React from 'react';
import { Calendar, GraduationCap, Atom, Briefcase, Sparkles, Layers, Database, Code, Cpu, Network } from 'lucide-react';
import { profileData } from '../data/profile';

export const CredibilityStrip: React.FC = () => {
  const tickerItems = [
    { label: 'AI Engineering & Multilingual NLP', color: 'text-emerald-800 bg-emerald-50/80 border-emerald-200/80', icon: Sparkles },
    { label: 'Quantum Machine Learning', color: 'text-purple-800 bg-purple-50/80 border-purple-200/80', icon: Atom },
    { label: 'Systems & Microservice Architecture', color: 'text-blue-800 bg-blue-50/80 border-blue-200/80', icon: Layers },
    { label: 'Full-Stack Polyglot Backends', color: 'text-amber-800 bg-amber-50/80 border-amber-200/80', icon: Database },
    { label: 'BB84 Quantum Key Distribution', color: 'text-violet-800 bg-violet-50/80 border-violet-200/80', icon: Network },
    { label: 'Algorithmic Problem Solving', color: 'text-indigo-800 bg-indigo-50/80 border-indigo-200/80', icon: Code },
    { label: 'Linux & Distributed Systems', color: 'text-cyan-800 bg-cyan-50/80 border-cyan-200/80', icon: Cpu },
  ];

  const loopItems = [...tickerItems, ...tickerItems];

  return (
    <section className="border-y border-slate-200/80 bg-white/30 backdrop-blur-xs select-none">
      {/* 1. Compact Credibility Metrics Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          {/* Metric 1: Expected Graduation */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0">
            <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-100 text-[#3B6FD8] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums leading-none">
                {profileData.expectedGraduation}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
                Expected Graduation
              </div>
            </div>
          </div>

          {/* Metric 2: Cumulative CGPA */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-6">
            <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-100 text-[#059669] shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums leading-none">
                {profileData.cgpa}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
                Cumulative CGPA
              </div>
            </div>
          </div>

          {/* Metric 3: Academic Minor */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-6">
            <div className="p-2 rounded-xl bg-purple-50/80 border border-purple-100 text-[#8B7CF6] shrink-0">
              <Atom className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                QUANTUM COMPUTING
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                Academic Minor
              </div>
            </div>
          </div>

          {/* Metric 4: Open to Internships */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-6">
            <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-100 text-[#059669] shrink-0 relative">
              <Briefcase className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38CFA3] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38CFA3]" />
              </span>
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                OPEN TO INTERNSHIPS
              </div>
              <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">
                Chennai & Nearby
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Micro Running Ticker with Adaptive Domain Colors */}
      <div className="border-t border-slate-100 bg-slate-50/50 py-2.5 overflow-hidden flex items-center">
        <div className="px-4 sm:px-6 shrink-0 flex items-center gap-2 border-r border-slate-200/80 z-10 bg-slate-50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38CFA3] animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-wider text-slate-600 uppercase">
            EXPLORING
          </span>
        </div>

        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center gap-3 text-[11px] font-medium pl-3">
            {loopItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border shadow-2xs ${item.color}`}>
                    <Icon className="w-3 h-3 opacity-80" />
                    <span>{item.label}</span>
                  </span>
                  <span className="text-slate-300 font-light select-none">·</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
