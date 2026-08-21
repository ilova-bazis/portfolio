'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiGithub, 
  FiExternalLink, 
  FiTerminal, 
  FiBookOpen, 
  FiCheck,
  FiZap,
  FiStar
} from 'react-icons/fi';
import { FaApple, FaLinux } from 'react-icons/fa6';

export type ProjectCategory = 'all' | 'ai-tools' | 'cli-systems' | 'backend-cloud' | 'mobile-desktop';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  subtitle: string;
  description: string;
  image?: string;
  terminalCommand?: string;
  terminalOutput?: string;
  highlights: string[];
  metrics?: ProjectMetric[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  blogUrl?: string;
  featured?: boolean;
}

export default function PortfolioCard({ project }: { project: ProjectItem }) {
  return (
    <div 
      className={`bg-neutral-200/95 shadow-md flex flex-col justify-between border-t-4 transition-all duration-300 group hover:shadow-xl ${
        project.featured 
          ? 'border-orange-500 ring-1 ring-orange-500/30' 
          : 'border-neutral-700 hover:border-orange-500'
      }`}
    >
      <div>
        {/* Top Media: Image Screenshot or Styled Terminal Window */}
        {project.image ? (
          <div className="relative h-48 sm:h-52 bg-neutral-800 overflow-hidden border-b border-neutral-300">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 bg-neutral-900/90 text-orange-400 backdrop-blur-sm border border-neutral-700">
                {project.categoryLabel}
              </span>
            </div>
            {project.featured && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-orange-500 text-neutral-950 shadow-sm">
                  <FiStar className="text-xs" /> Featured
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-neutral-900 text-neutral-100 p-4 border-b border-neutral-300 font-mono text-xs select-none">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] text-neutral-400 ml-2">
                  {project.id} — cli
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                {project.categoryLabel}
              </span>
            </div>

            {/* Terminal Command & Output Mockup */}
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 text-neutral-200">
                <span className="text-orange-500 font-bold">$</span>
                <span className="text-neutral-100 font-bold">
                  {project.terminalCommand || `${project.id} --help`}
                </span>
              </div>
              {project.terminalOutput && (
                <div className="text-neutral-400 text-[11px] leading-relaxed pt-1 whitespace-pre-line font-mono">
                  {project.terminalOutput}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Card Content Area */}
        <div className="p-5 sm:p-6 pb-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-xs font-bold font-mono text-orange-600 uppercase tracking-wide mb-3">
            {project.subtitle}
          </p>

          <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Metric Chips */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-2 bg-neutral-100/90 border-l-2 border-orange-500">
                  <div className="text-xs font-black text-gray-900 leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-neutral-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Architectural / Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4 text-xs text-neutral-800">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FiCheck className="text-orange-500 text-sm mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-300">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-900 text-neutral-200 px-2 py-0.5 text-xs font-mono font-medium tracking-wide shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 mt-2">
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-neutral-300">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-colors"
            >
              <FiGithub className="text-xs" />
              <span>GitHub Repo</span>
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs font-bold transition-colors"
            >
              <FiExternalLink className="text-xs text-orange-500" />
              <span>Live Project</span>
            </Link>
          )}

          {project.blogUrl && (
            <Link
              href={project.blogUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-300 hover:bg-neutral-400 text-neutral-900 text-xs font-bold transition-colors"
            >
              <FiBookOpen className="text-xs text-orange-600" />
              <span>Read Tutorial</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
