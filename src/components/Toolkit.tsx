import React, { useState } from 'react';
import { technicalToolkit } from '../data/skills';
import { Terminal, Search } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Object.entries(technicalToolkit);

  const filteredCategories = categories.map(([key, category]) => {
    if (!searchQuery.trim()) return { key, ...category };
    const filteredItems = category.items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      key,
      ...category,
      items: filteredItems,
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <section id="toolkit" className="py-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-semibold text-[#5B8DEF] tracking-wider uppercase mb-2">
              TECHNICAL PROFICIENCY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              TECHNICAL TOOLKIT
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Languages, libraries, frameworks, and infrastructure tools applied in actual software implementations.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools (e.g. Qiskit, Go)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B8DEF] transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.key}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                  {cat.title}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {cat.items.length} tools
                </span>
              </div>

              {cat.description && (
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {cat.description}
                </p>
              )}

              {/* Clean unboxed item cluster with bullet separators */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs">
                {cat.items.map((item, idx) => (
                  <span
                    key={item}
                    className="inline-flex items-center font-medium text-slate-800 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60 hover:border-[#5B8DEF]/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-sm text-slate-500">
            No tools matched "{searchQuery}".
          </div>
        )}

        <div className="mt-8 pt-4 flex items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-100">
          <span>* Accurately curated based on practical project usage and coursework.</span>
          <span>Zero arbitrary percentage bars.</span>
        </div>

      </div>
    </section>
  );
};
