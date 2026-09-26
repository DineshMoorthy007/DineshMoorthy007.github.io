import React from 'react';
import { Mail, Github, Linkedin, Code, ArrowUpRight, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-slate-200/90 shadow-md">
          <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.75fr)] gap-10 items-center">
            <div className="max-w-2xl">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 tracking-wide mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38CFA3] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38CFA3]" />
              </span>
              <span>{profileData.availability}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              LET'S BUILD SOMETHING.
            </h2>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
              Open to internship opportunities, software engineering roles, and technical collaborations. Whether you have an open role, an interesting system architecture problem, or want to discuss emerging quantum algorithms, let's connect.
            </p>

            {/* Contact Actions Grid */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              
              {/* Primary Email CTA */}
              <a
                href={`mailto:${profileData.socials.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#3B6FD8] hover:bg-[#305EC0] transition-all rounded-xl shadow-sm shadow-blue-500/15 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-white/80" />
                <span>EMAIL ME</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-sans font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profileData.socials.email}</span>
                  </>
                )}
              </button>

              {/* GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs"
              >
                <Linkedin className="w-4 h-4 text-[#5B8DEF]" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* LeetCode */}
              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs"
              >
                <Code className="w-4 h-4 text-[#FF9F43]" />
                <span>LEETCODE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>

            {/* Response turnaround notice */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38CFA3]" />
                Typically responds within 24 hours
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>IST Timezone (UTC +5:30)</span>
            </div>

            </div>

            <div className="contact-illustration mx-auto w-full max-w-[300px]" aria-hidden="true">
              <div className="relative rounded-2xl border-2 border-[#172554] bg-white p-3 shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2">
                  <span className="h-2 w-2 rounded-full bg-[#F4C95D]" />
                  <span className="h-2 w-2 rounded-full bg-[#35C9A5]" />
                  <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                  <span className="ml-auto h-1.5 w-12 rounded-full bg-slate-200" />
                </div>

                <div className="space-y-3 px-2 py-4">
                  <div className="w-fit rounded-xl rounded-bl-sm border border-blue-200 bg-blue-50 px-3 py-2 text-[11px] font-medium text-[#172554]">
                    Hi! Let's build.
                  </div>
                  <div className="ml-auto w-fit rounded-xl rounded-br-sm border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                    Sounds good.
                  </div>
                  <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
                    <div className="h-2 flex-1 rounded-full bg-slate-100" />
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3B82F6] text-white">
                      <Send className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>

                <CheckCircle2 className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-white text-[#35C9A5]" strokeWidth={1.8} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
