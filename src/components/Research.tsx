import React from 'react';
import { Atom, Compass, ArrowRight } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-16 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white via-white to-purple-50/30 border border-slate-200/90 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8B7CF6] tracking-wider uppercase mb-2">
                <Compass className="w-4 h-4 text-[#8B7CF6]" />
                <span>ACTIVE ACADEMIC INVESTIGATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                RESEARCH & EXPLORATION
              </h2>

              <p className="text-slate-600 mt-3 text-base leading-relaxed max-w-2xl">
                Exploring quantum machine learning, quantum computing and the intersection of emerging technologies with practical software systems.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8B7CF6] animate-pulse" />
                  <span className="text-slate-500">Active topics:</span>
                </div>
                {['Quantum Machine Learning', 'Quantum Computing', 'AI + Cybersecurity', 'Emerging Systems'].map((topic, i) => (
                  <span key={topic} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-purple-100 text-slate-800 shadow-2xs">
                    <span className="text-[#8B7CF6]">#</span>
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-5 rounded-xl bg-white border border-purple-100 shadow-sm text-left max-w-xs w-full">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <Atom className="w-4 h-4 text-[#8B7CF6]" />
                  <span>Quantum Computing Minor</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Rigorous theoretical foundations in linear algebra, Hilbert space operations, and quantum algorithm synthesis using Qiskit.
                </p>
                <div className="mt-3 text-[11px] font-mono text-purple-700 font-medium">
                  Expected 2028 · Academic Work
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
