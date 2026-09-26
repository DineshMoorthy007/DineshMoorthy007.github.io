import React from 'react';
import { certificationsData, leadershipData, academicProgramData } from '../data/achievements';
import { Award, ArrowUpRight, CheckCircle2, ShieldCheck, Users, BookOpen, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#3B6FD8] tracking-wider uppercase mb-2">
            CREDIBILITY & INVOLVEMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ACHIEVEMENTS & LEADERSHIP
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Verified technical credentials, symposium coordination, and structured industry-aligned learning.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Core Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-[#3B6FD8]" />
              <span>VERIFIED CREDENTIALS</span>
            </div>

            <div className="space-y-3.5">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                        {cert.issuer}
                      </span>
                      <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#3B6FD8] transition-colors">
                      {cert.name}
                    </h3>
                  </div>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#3B6FD8] bg-blue-50/70 border border-blue-200/60 hover:bg-blue-100/70 transition-colors whitespace-nowrap self-start sm:self-center shadow-2xs"
                    >
                      <span>Verify</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 self-start sm:self-center">
                      <CheckCircle2 className="w-3 h-3 text-[#059669]" />
                      <span>Certified</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Leadership & Continuous Learning (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Leadership Card */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
                <Users className="w-4 h-4 text-[#FF9F43]" />
                <span>SYMPOSIUM LEADERSHIP</span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#FF9F43] tracking-wide uppercase">
                      {leadershipData.title}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">
                      {leadershipData.event}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {leadershipData.organization}
                    </p>
                  </div>

                  {leadershipData.recognition && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 shadow-2xs shrink-0">
                      <Star className="w-3 h-3 text-[#FF9F43] fill-[#FF9F43]" />
                      <span>{leadershipData.recognition}</span>
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  "{leadershipData.description}"
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span>Department of Computer Science and Engineering</span>
                </div>
              </div>
            </div>

            {/* Learnathon 2025 Summary Card */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-3">
                <BookOpen className="w-4 h-4 text-[#38CFA3]" />
                <span>CONTINUOUS LEARNING INITIATIVE</span>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50/25 border border-slate-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {academicProgramData.title}
                  </h3>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    2025
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {academicProgramData.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {academicProgramData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
