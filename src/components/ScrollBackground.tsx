import React, { useEffect } from 'react';

const stops = [
  { id: 'hero', color: '#FAFCFF' },
  { id: 'work', color: '#D8E8FC' },
  { id: 'achievements', color: '#BED3EA' },
  { id: 'experiments', color: '#FFEFBF' },
  { id: 'toolkit', color: '#C9DDF5' },
  { id: 'research', color: '#DDD5FA' },
  { id: 'about', color: '#FFFFFF' },
  { id: 'contact', color: '#C5E1FA' },
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const parseColor = (color: string) => {
  const hex = color.slice(1);
  return [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
};

const interpolate = (from: string, to: string, progress: number) => {
  const start = parseColor(from);
  const end = parseColor(to);
  return `rgb(${start.map((channel, index) => Math.round(channel + (end[index] - channel) * progress)).join(', ')})`;
};

export const ScrollBackground: React.FC = () => {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      const elements = stops.map((stop) => document.getElementById(stop.id));
      const firstTop = elements[0]?.offsetTop ?? 0;
      const lastTop = elements[elements.length - 1]?.offsetTop ?? document.body.scrollHeight;
      const viewportPoint = window.scrollY + window.innerHeight * 0.45;
      const pageProgress = clamp((viewportPoint - firstTop) / Math.max(1, lastTop - firstTop));
      const scaledProgress = pageProgress * (stops.length - 1);
      const lowerIndex = Math.min(stops.length - 2, Math.floor(scaledProgress));
      const progress = scaledProgress - lowerIndex;
      const color = interpolate(stops[lowerIndex].color, stops[lowerIndex + 1].color, progress);

      document.documentElement.style.setProperty('--scroll-bg', color);
      document.documentElement.style.setProperty('--scroll-glow-x', `${20 + pageProgress * 60}%`);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-background" aria-hidden="true" />;
};
