import React from 'react';
import { FeaturedProject } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { Github, ArrowUpRight, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: FeaturedProject;
  isWide?: boolean;
  onSelectProject: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isWide = false,
  onSelectProject,
}) => {
  return (
    <article
      className={`group rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-200 hover:shadow-lg flex flex-col justify-between overflow-hidden relative ${
        isWide ? 'lg:col-span-2' : 'col-span-1'
      }`}
    >
      <div className="p-6 sm:p-7 flex flex-col h-full justify-between">
        
        {/* Header Metadata */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-slate-900">{project.number}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono uppercase tracking-wider text-[11px] text-slate-600 font-medium">
                {project.category}
              </span>
            </div>
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-400 hover:text-slate-900 transition-colors p-1"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectProject(project.id)}
            className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight cursor-pointer hover:text-[#5B8DEF] transition-colors"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Interactive Visual Container */}
        <div className="my-5 w-full">
          <ProjectVisual type={project.visualType} accentColor={project.accentColor} />
        </div>

        {/* Footer: Technology tags and Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          
          {/* Unboxed Tech List with separators */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
            {project.technologies.map((tech, i) => (
              <React.Fragment key={tech}>
                <span className="font-medium text-slate-700">{tech}</span>
                {i < project.technologies.length - 1 && (
                  <span className="text-slate-300" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Links */}
          <div className="flex items-center gap-3">
            {project.github !== '#' ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors py-1"
              >
                <span>Code</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ) : (
              <span className="text-[11px] font-mono text-slate-400">Internal Lab</span>
            )}

            <button
              type="button"
              onClick={() => onSelectProject(project.id)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3B6FD8] hover:bg-[#305EC0] active:scale-[0.98] transition-all rounded-lg shadow-xs shadow-blue-500/10"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};
