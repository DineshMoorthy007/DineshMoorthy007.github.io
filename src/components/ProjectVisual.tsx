import React, { useState } from 'react';
import { VisualType } from '../data/projects';
import { Layers, Database, Cpu, Globe, ArrowRight, ShieldCheck, Key, RefreshCw, BarChart2, PieChart } from 'lucide-react';

interface ProjectVisualProps {
  type: VisualType;
  accentColor?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, accentColor = '#5B8DEF' }) => {
  // Interactive state for Polyglot architecture
  const [activeBackend, setActiveBackend] = useState<'go' | 'node' | 'python'>('go');
  
  // Interactive state for AI Vidya
  const [activeLang, setActiveLang] = useState<string>('தமிழ்');

  // Interactive state for Expense Dashboard
  const [selectedMonth, setSelectedMonth] = useState<'March' | 'April'>('April');

  // Interactive state for BB84 Quantum
  const [qkdStep, setQkdStep] = useState<number>(0);

  // 1. Architecture Visual: Quick-Note Polyglot
  if (type === 'architecture') {
    return (
      <div className="w-full h-full min-h-[280px] p-5 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/60 rounded-xl border border-slate-200/80 font-mono text-xs select-none">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <Layers className="w-4 h-4 text-[#5B8DEF]" />
            <span>UNIFIED SYSTEM ARCHITECTURE</span>
          </div>
          <span className="text-[10px] text-slate-400">REST Contract v1.2</span>
        </div>

        {/* Client Layer */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/60 border border-blue-200/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5B8DEF] animate-pulse" />
            <span className="font-semibold text-slate-800">React Client (SPA)</span>
          </div>
          <span className="text-[11px] text-blue-700 bg-white px-2 py-0.5 rounded shadow-2xs">Optimistic Cache</span>
        </div>

        {/* Dispatch Arrow */}
        <div className="flex items-center justify-center text-slate-400 my-0.5">
          <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full">HTTP/REST Dynamic Routing</span>
        </div>

        {/* Multi-stack Backend Layer Switcher */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setActiveBackend('go')}
            className={`p-1.5 sm:p-2 rounded-lg border text-center transition-all ${
              activeBackend === 'go'
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-900 font-bold shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="text-[10px] sm:text-[11px] font-semibold">Go Service</div>
            <div className="text-[8px] sm:text-[9px] text-slate-400 mt-0.5">Goroutines (1.2ms)</div>
          </button>

          <button
            type="button"
            onClick={() => setActiveBackend('node')}
            className={`p-1.5 sm:p-2 rounded-lg border text-center transition-all ${
              activeBackend === 'node'
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-900 font-bold shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="text-[10px] sm:text-[11px] font-semibold">Node.js Express</div>
            <div className="text-[8px] sm:text-[9px] text-slate-400 mt-0.5">Events (4.8ms)</div>
          </button>

          <button
            type="button"
            onClick={() => setActiveBackend('python')}
            className={`p-1.5 sm:p-2 rounded-lg border text-center transition-all ${
              activeBackend === 'python'
                ? 'bg-amber-500/10 border-amber-500 text-amber-900 font-bold shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="text-[10px] sm:text-[11px] font-semibold">Python FastAPI</div>
            <div className="text-[8px] sm:text-[9px] text-slate-400 mt-0.5">NLP Parser (8.1ms)</div>
          </button>
        </div>

        {/* Sink Arrow */}
        <div className="flex items-center justify-center text-slate-400 my-0.5">
          <ArrowRight className="w-3.5 h-3.5 rotate-90" />
        </div>

        {/* Persistence Layer */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-slate-800">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#FF9F43]" />
            <span className="font-semibold text-xs text-slate-900">Persistence & Cloud Firestore</span>
          </div>
          <span className="text-[10px] text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200/60 font-mono font-medium shadow-2xs">ACID Compliant</span>
        </div>
      </div>
    );
  }

  // 2. AI Network Visual: AI Vidya for Bharat
  if (type === 'ai-network') {
    const languages = [
      { name: 'தமிழ்', label: 'Tamil', translit: 'Tamil Script' },
      { name: 'हिन्दी', label: 'Hindi', translit: 'Devanagari' },
      { name: 'English', label: 'English', translit: 'Latin Base' },
      { name: 'తెలుగు', label: 'Telugu', translit: 'Telugu Script' },
      { name: 'বাংলা', label: 'Bengali', translit: 'Bengali Script' },
    ];

    return (
      <div className="w-full h-full min-h-[280px] p-5 flex flex-col justify-between bg-gradient-to-b from-white to-emerald-50/30 rounded-xl border border-slate-200/80 select-none">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs">
            <Globe className="w-4 h-4 text-[#38CFA3]" />
            <span>MULTILINGUAL NLP PIPELINE</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Audio & Text Synthesis</span>
        </div>

        {/* Interactive Language Stream Selector */}
        <div className="flex items-center justify-between gap-1 pt-1">
          {languages.map((lang) => (
            <button
              key={lang.name}
              type="button"
              onClick={() => setActiveLang(lang.name)}
              className={`flex-1 py-1.5 px-1 rounded-lg border text-center transition-all ${
                activeLang === lang.name
                  ? 'border-[#38CFA3] bg-[#38CFA3]/15 text-slate-900 font-bold scale-[1.03] shadow-2xs'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="text-xs sm:text-sm font-medium">{lang.name}</div>
              <div className="text-[8px] sm:text-[9px] text-slate-400 font-mono truncate">{lang.label}</div>
            </button>
          ))}
        </div>

        {/* Converging Stream Rays */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="w-full max-w-[240px] h-6 flex items-center justify-center">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#38CFA3] to-transparent animate-pulse" />
          </div>
          <span className="absolute text-[10px] font-mono text-[#059669] bg-white px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
            {activeLang} context stream → tokenizer
          </span>
        </div>

        {/* Central Core & Voice Synthesizer Output */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-emerald-50/80 border border-emerald-200/90 text-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#38CFA3]/25 text-[#059669] flex items-center justify-center shadow-2xs">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Vidya Bharat Neural Core</div>
              <div className="text-[10px] text-slate-500 font-mono">Phonetic speech audio + contextual translation</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-emerald-200 text-emerald-700 text-[10px] font-mono font-medium shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38CFA3] animate-ping" />
            <span>Streaming</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Mini Dashboard: Expense Tracker Dashboard
  if (type === 'dashboard') {
    const isApril = selectedMonth === 'April';
    const totalSpent = isApril ? '$1,420.50' : '$1,190.20';
    const savings = isApril ? '$580.00' : '$620.00';

    return (
      <div className="w-full h-full min-h-[280px] p-5 flex flex-col justify-between bg-gradient-to-b from-white to-amber-50/30 rounded-xl border border-slate-200/80 select-none">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs">
            <BarChart2 className="w-4 h-4 text-[#FF9F43]" />
            <span>SPRING BOOT FINANCIAL LEDGER</span>
          </div>
          <div className="flex gap-1 text-[10px] font-mono">
            <button
              onClick={() => setSelectedMonth('March')}
              className={`px-2 py-0.5 rounded transition-colors ${!isApril ? 'bg-amber-100 text-amber-900 font-bold' : 'text-slate-400 hover:text-slate-700'}`}
            >
              March
            </button>
            <button
              onClick={() => setSelectedMonth('April')}
              className={`px-2 py-0.5 rounded transition-colors ${isApril ? 'bg-amber-100 text-amber-900 font-bold' : 'text-slate-400 hover:text-slate-700'}`}
            >
              April
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60">
            <div className="text-[10px] text-slate-500 font-mono">Total Expenses</div>
            <div className="text-base font-bold text-slate-900 font-mono tabular-nums">{totalSpent}</div>
            <div className="text-[9px] text-emerald-600 mt-0.5">↓ 6.4% under ceiling</div>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200/60">
            <div className="text-[10px] text-slate-500 font-mono">Net Monthly Savings</div>
            <div className="text-base font-bold text-slate-900 font-mono tabular-nums">{savings}</div>
            <div className="text-[9px] text-slate-400 mt-0.5">Automated vault rule</div>
          </div>
        </div>

        {/* Dynamic Category Bars */}
        <div className="space-y-1.5 py-1 text-[11px] font-mono">
          <div>
            <div className="flex justify-between text-slate-600 mb-0.5 text-[10px]">
              <span>Infrastructure / Cloud</span>
              <span>42%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#FF9F43] rounded-full transition-all duration-500" style={{ width: isApril ? '42%' : '35%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-600 mb-0.5 text-[10px]">
              <span>Hardware & Labs</span>
              <span>31%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#5B8DEF] rounded-full transition-all duration-500" style={{ width: isApril ? '31%' : '38%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-600 mb-0.5 text-[10px]">
              <span>Services & Tools</span>
              <span>27%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#38CFA3] rounded-full transition-all duration-500" style={{ width: isApril ? '27%' : '27%' }} />
            </div>
          </div>
        </div>

        {/* Footer Ledger status */}
        <div className="p-2 rounded bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            JWT Session Verified
          </span>
          <span>MySQL InnoDB · 0.4ms</span>
        </div>
      </div>
    );
  }

  // 4. Quantum Visual: BB84 Quantum Key Distribution
  if (type === 'quantum') {
    const states = [
      { aliceBit: '1', aliceBase: 'Rectilinear (+)', state: '|1⟩', bobBase: 'Rectilinear (+)', bobResult: '1', match: true },
      { aliceBit: '0', aliceBase: 'Diagonal (×)', state: '|−⟩', bobBase: 'Rectilinear (+)', bobResult: '?', match: false },
      { aliceBit: '1', aliceBase: 'Diagonal (×)', state: '|+⟩', bobBase: 'Diagonal (×)', bobResult: '1', match: true },
      { aliceBit: '0', aliceBase: 'Rectilinear (+)', state: '|0⟩', bobBase: 'Diagonal (×)', bobResult: '?', match: false },
    ];

    return (
      <div className="w-full h-full min-h-[280px] p-5 flex flex-col justify-between bg-gradient-to-b from-white to-purple-50/40 rounded-xl border border-slate-200/80 font-mono text-xs select-none">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <Key className="w-4 h-4 text-[#8B7CF6]" />
            <span>BB84 QUANTUM KEY DISTRIBUTION</span>
          </div>
          <button
            onClick={() => setQkdStep((s) => (s + 1) % 4)}
            className="flex items-center gap-1 text-[10px] text-[#8B7CF6] hover:underline"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Cycle Step</span>
          </button>
        </div>

        {/* Quantum Channel: Alice -> Photons -> Bob */}
        <div className="grid grid-cols-3 gap-2 items-center text-center py-2">
          <div className="p-2 rounded-lg bg-purple-100/60 border border-purple-200">
            <div className="font-bold text-slate-800 text-xs">ALICE</div>
            <div className="text-[10px] text-purple-700 mt-0.5">Photon Emitter</div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-[10px] text-purple-600 font-semibold mb-1">Quantum Channel</div>
            <div className="flex items-center gap-1.5 animate-pulse">
              <span className="text-xs font-bold text-purple-700">|ψ⟩</span>
              <span className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500" />
              <span className="text-xs">→</span>
            </div>
            <div className="text-[9px] text-slate-400 mt-1">No-Cloning Protected</div>
          </div>

          <div className="p-2 rounded-lg bg-indigo-100/60 border border-indigo-200">
            <div className="font-bold text-slate-800 text-xs">BOB</div>
            <div className="text-[10px] text-indigo-700 mt-0.5">Polarization Detector</div>
          </div>
        </div>

        {/* Step-by-Step Sifting Matrix */}
        <div className="bg-purple-50/70 border border-purple-200/80 rounded-lg p-2.5 text-[11px] text-slate-700 space-y-1">
          <div className="grid grid-cols-4 text-[9px] text-purple-700 font-semibold border-b border-purple-200/70 pb-1">
            <span>BIT</span>
            <span>ALICE BASIS</span>
            <span>BOB BASIS</span>
            <span>SIFTED KEY</span>
          </div>
          {states.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-4 items-center text-[10px] py-0.5 rounded px-1.5 transition-colors ${
                idx === qkdStep
                  ? 'bg-purple-200/80 text-purple-950 font-bold border border-purple-300/60 shadow-2xs'
                  : 'text-slate-600'
              }`}
            >
              <span>{item.aliceBit} ({item.state})</span>
              <span className="truncate">{item.aliceBase}</span>
              <span className="truncate">{item.bobBase}</span>
              <span className={item.match ? 'text-emerald-700 font-bold' : 'text-slate-400 line-through'}>
                {item.match ? item.bobResult : 'discard'}
              </span>
            </div>
          ))}
        </div>

        {/* Classical Channel Reconciliation */}
        <div className="flex items-center justify-between p-2 rounded bg-purple-50 border border-purple-200/80 text-[10px] text-slate-600">
          <span className="text-purple-800 font-semibold">Classical Discussion Channel:</span>
          <span className="text-emerald-700 font-bold">QBER: 0.0% · Key Validated</span>
        </div>
      </div>
    );
  }

  return null;
};
