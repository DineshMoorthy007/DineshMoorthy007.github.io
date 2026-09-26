import React, { useState, useMemo } from 'react';
import { secondaryProjects, SecondaryProject } from '../data/projects';
import { Search } from 'lucide-react';

const CATEGORIES = ['ALL', 'SOFTWARE', 'AI / ML', 'QUANTUM', 'SYSTEMS'] as const;

export const MoreProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return secondaryProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'ALL' || project.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="experiments" className="py-16 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#5B8DEF] tracking-wider uppercase mb-2">
              ADDITIONAL EXPERIMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              MORE THINGS I'VE BUILT
            </h2>
            <p className="text-slate-600 mt-1 text-sm">
              Algorithmic simulators, embedded systems, and machine learning models.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search experiments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B8DEF] transition-colors"
            />
          </div>
        </div>

        {/* Category Filters (Interactive functional buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 border-b border-slate-100 text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[#3B6FD8] text-white font-semibold shadow-xs shadow-blue-500/15'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project: SecondaryProject) => (
            <div
              key={project.id}
              className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                    {project.category}
                  </span>
                  {project.statusBadge && (
                    <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60 font-sans font-medium">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies unboxed list */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 font-mono">
                {project.technologies.map((t, idx) => (
                  <span key={t} className="text-slate-600">
                    {t}
                    {idx < project.technologies.length - 1 && (
                      <span className="ml-1.5 text-slate-300 font-sans" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-sm text-slate-500">
            No projects found matching the criteria.
          </div>
        )}

      </div>
    </section>
  );
};
