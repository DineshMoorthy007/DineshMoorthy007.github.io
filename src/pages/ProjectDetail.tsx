import React, { useEffect } from 'react';
import { featuredProjects, FeaturedProject } from '../data/projects';
import { ProjectVisual } from '../components/ProjectVisual';
import { ArrowLeft, Github, ArrowUpRight, CheckCircle2, Layers, Lightbulb, Compass } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  onNavigateProject: (id: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectId,
  onBack,
  onNavigateProject,
}) => {
  // Normalize projectId for both '/projects/expense-tracker' and 'expense-tracker-dashboard'
  const project = featuredProjects.find(
    (p) => p.id === projectId || (projectId === 'expense-tracker' && p.id === 'expense-tracker-dashboard')
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Project Not Found</h2>
          <p className="text-slate-500 mt-2 text-sm">The requested engineering case study does not exist.</p>
          <button
            onClick={onBack}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-[#3B6FD8] hover:bg-[#305EC0] text-white rounded-lg transition-colors shadow-xs"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // Previous and next project navigation
  const currentIndex = featuredProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-[#FAFCFF] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5 px-3 rounded-lg border border-slate-200/80 bg-white hover:bg-slate-50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="mb-10 pb-8 border-b border-slate-200/80">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-3">
            <span className="font-bold text-slate-900">{project.number}</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-wider text-[11px] text-slate-600 font-medium">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
            {project.overview}
          </p>

          {/* Metadata bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-600">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-1">Stack:</span>
              {project.technologies.map((t, idx) => (
                <React.Fragment key={t}>
                  <span className="font-semibold text-slate-800">{t}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Links */}
            {project.github !== '#' ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>View Source on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-400 bg-slate-100 px-3 py-1 rounded">
                Repository Private / Academic Code
              </span>
            )}
          </div>
        </header>

        {/* Interactive Architecture / Visual Exhibit */}
        <section className="my-10">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#5B8DEF]" />
            <span>Interactive Visual Model</span>
          </div>
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs p-2 sm:p-4">
            <ProjectVisual type={project.visualType} accentColor={project.accentColor} />
          </div>
        </section>

        {/* Problem and Approach Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
              <Compass className="w-4 h-4 text-[#FF9F43]" />
              <span>THE PROBLEM & PURPOSE</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
              <Lightbulb className="w-4 h-4 text-[#38CFA3]" />
              <span>ENGINEERING APPROACH</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.approach}
            </p>
          </div>

        </div>

        {/* Key Features */}
        <section className="my-10 p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
            Key Architectural Features
          </h2>
          <ul className="space-y-3">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38CFA3] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture Details */}
        <section className="my-10 p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
            Layer Breakdown & Pipeline
          </h2>
          <div className="space-y-3 font-mono text-xs text-slate-700">
            {project.architectureDetails.map((layer, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                {layer}
              </div>
            ))}
          </div>
        </section>

        {/* What Was Learned */}
        <section className="my-10 p-7 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
            Technical Insights & Learnings
          </h2>
          <ul className="space-y-2.5">
            {project.learnings.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B8DEF] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer Navigation to Next/Prev Projects */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex items-center justify-between">
          {prevProject ? (
            <button
              onClick={() => onNavigateProject(prevProject.id)}
              className="text-left group"
            >
              <div className="text-[10px] font-mono text-slate-400">← PREVIOUS</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-[#5B8DEF] transition-colors">
                {prevProject.title}
              </div>
            </button>
          ) : <div />}

          {nextProject ? (
            <button
              onClick={() => onNavigateProject(nextProject.id)}
              className="text-right group"
            >
              <div className="text-[10px] font-mono text-slate-400">NEXT →</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-[#5B8DEF] transition-colors">
                {nextProject.title}
              </div>
            </button>
          ) : <div />}
        </div>

      </div>
    </article>
  );
};
