import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { ScrollBackground } from './components/ScrollBackground';

export default function App() {
  // Parse route from hash or pathname
  const getInitialRoute = (): { page: 'home' | 'project'; projectId?: string } => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const path = window.location.pathname.replace(/^\//, '');

    // Check hash first: e.g. "projects/quick-note-polyglot"
    const targetString = hash || path;

    if (targetString.startsWith('projects/')) {
      const parts = targetString.split('/');
      const id = parts[1];
      if (id) {
        return { page: 'project', projectId: id };
      }
    }

    return { page: 'home' };
  };

  const [routeState, setRouteState] = useState<{
    page: 'home' | 'project';
    projectId?: string;
  }>(getInitialRoute);

  useEffect(() => {
    const handleUrlChange = () => {
      setRouteState(getInitialRoute());
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const navigateToProject = (id: string) => {
    window.location.hash = `/projects/${id}`;
    setRouteState({ page: 'project', projectId: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    // If browser supports clean history replacement
    if (window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname);
    }
    setRouteState({ page: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col text-[#111827] relative">
      <ScrollBackground />
      <Navbar
        currentRoute={routeState.page === 'home' ? '/' : `/projects/${routeState.projectId}`}
        onNavigate={(route) => {
          if (route === '/') {
            navigateToHome();
          }
        }}
      />

      <div className="flex-1 relative z-10">
        {routeState.page === 'project' && routeState.projectId ? (
          <ProjectDetail
            projectId={routeState.projectId}
            onBack={navigateToHome}
            onNavigateProject={navigateToProject}
          />
        ) : (
          <Home onSelectProject={navigateToProject} />
        )}
      </div>

      <Footer />
    </div>
  );
}
