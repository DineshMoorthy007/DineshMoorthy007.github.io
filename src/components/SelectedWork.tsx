import React from 'react';
import { featuredProjects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface SelectedWorkProps {
  onSelectProject: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-20 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#5B8DEF] tracking-wider uppercase mb-2">
            FEATURED ENGINEERING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            SELECTED WORK
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            A few projects that represent what I like to build across full-stack architectures, multilingual AI, and quantum simulation.
          </p>
        </div>

        {/* 2x2 Grid of Featured Projects: Projects 1 & 2 side-by-side, Projects 3 & 4 side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1: Quick-Note Polyglot (Side-by-side) */}
          <ProjectCard
            project={featuredProjects[0]}
            isWide={false}
            onSelectProject={onSelectProject}
          />

          {/* Project 2: AI Vidya for Bharat (Side-by-side) */}
          <ProjectCard
            project={featuredProjects[1]}
            isWide={false}
            onSelectProject={onSelectProject}
          />

          {/* Project 3: Expense Tracker Dashboard (Side-by-side) */}
          <ProjectCard
            project={featuredProjects[2]}
            isWide={false}
            onSelectProject={onSelectProject}
          />

          {/* Project 4: BB84 Quantum Key Distribution (Side-by-side) */}
          <ProjectCard
            project={featuredProjects[3]}
            isWide={false}
            onSelectProject={onSelectProject}
          />
        </div>

      </div>
    </section>
  );
};
