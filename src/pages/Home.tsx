import React from 'react';
import { Hero } from '../components/Hero';
import { CredibilityStrip } from '../components/CredibilityStrip';
import { SelectedWork } from '../components/SelectedWork';
import { WhatIBuild } from '../components/WhatIBuild';
import { Achievements } from '../components/Achievements';
import { MoreProjects } from '../components/MoreProjects';
import { Toolkit } from '../components/Toolkit';
import { Research } from '../components/Research';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

interface HomeProps {
  onSelectProject: (projectId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectProject }) => {
  return (
    <main>
      {/* 01. HERO with Isometric Developer Workspace */}
      <Hero onSelectProject={onSelectProject} />

      {/* 02. CREDIBILITY STRIP */}
      <CredibilityStrip />

      {/* 03. SELECTED WORK */}
      <SelectedWork onSelectProject={onSelectProject} />

      {/* 04. WHAT I BUILD */}
      <WhatIBuild />

      {/* 05. ACHIEVEMENTS & LEADERSHIP */}
      <Achievements />

      {/* 06. ADDITIONAL EXPERIMENTS */}
      <MoreProjects />

      {/* 07. TECHNICAL TOOLKIT */}
      <Toolkit />

      {/* 08. RESEARCH & EXPLORATION */}
      <Research />

      {/* 09. ABOUT */}
      <About />

      {/* 10. CONNECT */}
      <Contact />
    </main>
  );
};
