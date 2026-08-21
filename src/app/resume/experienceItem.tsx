'use client';

import React, { useState } from 'react';
import { 
  FiLayers, 
  FiUsers, 
  FiShield, 
  FiActivity, 
  FiMapPin, 
  FiCalendar, 
  FiChevronDown, 
  FiChevronUp,
  FiZap,
  FiFilter,
  FiCpu
} from 'react-icons/fi';

export type TrackType = 'all' | 'ai' | 'systems' | 'leadership' | 'security' | 'research';

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface Achievement {
  title?: string;
  detail: string;
}

export interface ExperienceItem {
  id: string;
  companyName: string;
  jobTitle: string;
  dateFrom: string;
  dateTo?: string;
  tenure: string;
  location: string;
  roleType: string;
  tracks: TrackType[];
  metrics?: ImpactMetric[];
  tldr: string;
  achievements: Achievement[];
  technologies?: string[];
  featured?: boolean;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const [selectedTrack, setSelectedTrack] = useState<TrackType>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'colorado-spirit': true,
    'nexus-lead': true,
  });

  const filterTabs: { id: TrackType; label: string; icon: React.ReactNode; count: number }[] = [
    { 
      id: 'all', 
      label: 'All History', 
      icon: <FiLayers className="text-xs" />,
      count: experiences.length 
    },
    { 
      id: 'ai', 
      label: 'AI & LLM Workflows', 
      icon: <FiCpu className="text-xs text-orange-500" />,
      count: experiences.filter(e => e.tracks.includes('ai')).length 
    },
    { 
      id: 'systems', 
      label: 'Distributed & Systems', 
      icon: <FiZap className="text-xs text-orange-500" />,
      count: experiences.filter(e => e.tracks.includes('systems')).length 
    },
    { 
      id: 'leadership', 
      label: 'Leadership & Mentorship', 
      icon: <FiUsers className="text-xs text-orange-500" />,
      count: experiences.filter(e => e.tracks.includes('leadership')).length 
    },
    { 
      id: 'security', 
      label: 'Security & Infra', 
      icon: <FiShield className="text-xs text-orange-500" />,
      count: experiences.filter(e => e.tracks.includes('security')).length 
    },
    { 
      id: 'research', 
      label: 'BioTech & Research', 
      icon: <FiActivity className="text-xs text-orange-500" />,
      count: experiences.filter(e => e.tracks.includes('research')).length 
    }
  ];

  const filteredExperiences = experiences.filter(item => {
    if (selectedTrack === 'all') return true;
    return item.tracks.includes(selectedTrack);
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAll = (expand: boolean) => {
    const nextState: Record<string, boolean> = {};
    experiences.forEach(e => {
      nextState[e.id] = expand;
    });
    setExpandedIds(nextState);
  };

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-2">
              Career Trajectory & Track Record
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-gray-900">
              WORK EXPERIENCE
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <div className="w-16 h-0.5 bg-orange-500" />
              <span className="text-gray-500 text-sm">◼</span>
              <span className="text-xs font-mono text-gray-600">
                Nearly 2 decades of scalable distributed systems, AI workflows, and technical leadership
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              onClick={() => toggleAll(true)}
              className="text-xs font-bold px-3 py-1.5 bg-neutral-300 hover:bg-neutral-400 text-neutral-800 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={() => toggleAll(false)}
              className="text-xs font-bold px-3 py-1.5 bg-neutral-300 hover:bg-neutral-400 text-neutral-800 transition-colors"
            >
              Compact View
            </button>
          </div>
        </div>

        {/* Filter Bar for Recruiters / Hiring Managers */}
        <div className="mt-6 pt-4 border-t border-neutral-300 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 flex items-center gap-1 mr-1">
            <FiFilter className="text-orange-500" /> Filter Lens:
          </span>
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTrack(tab.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-150 ${
                selectedTrack === tab.id
                  ? 'bg-neutral-900 text-orange-400 shadow-sm border-b-2 border-orange-500'
                  : 'bg-neutral-200/90 text-neutral-700 hover:bg-neutral-300 border border-neutral-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-sm ${
                selectedTrack === tab.id ? 'bg-neutral-800 text-orange-400' : 'bg-neutral-300 text-neutral-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-neutral-400 before:to-neutral-300">
        {filteredExperiences.map((item) => {
          const isExpanded = expandedIds[item.id] !== false;

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-6 sm:-left-10 top-6 -translate-x-1/2 flex items-center justify-center">
                <div className={`w-3.5 h-3.5 rotate-45 transition-transform duration-200 border-2 ${
                  item.featured 
                    ? 'bg-orange-500 border-neutral-900 scale-125' 
                    : 'bg-neutral-900 border-orange-500 group-hover:scale-110'
                }`} />
              </div>

              {/* Experience Card */}
              <div className={`bg-neutral-200/95 shadow-md border-t-4 transition-all duration-200 ${
                item.featured 
                  ? 'border-orange-500 ring-1 ring-orange-500/30' 
                  : 'border-neutral-700 hover:border-orange-500'
              }`}>
                {/* Card Header Bar */}
                <div className="p-5 sm:p-6 pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-bold tracking-widest uppercase text-orange-600 font-mono">
                          {item.companyName}
                        </span>
                        <span className="text-xs text-neutral-400">•</span>
                        <span className="text-xs px-2 py-0.5 bg-neutral-300 text-neutral-800 font-semibold font-mono">
                          {item.roleType}
                        </span>
                        {item.featured && (
                          <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-600 font-bold border border-orange-500/40">
                            ★ Key Role
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                        {item.jobTitle}
                      </h3>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-neutral-600 mt-1.5 font-mono">
                        <span className="flex items-center gap-1.5">
                          <FiMapPin className="text-orange-500" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiCalendar className="text-orange-500" />
                          {item.dateFrom} — {item.dateTo || 'Present'}
                        </span>
                        <span className="text-orange-600 font-bold bg-neutral-300/80 px-2 py-0.5">
                          {item.tenure}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="self-start lg:self-center inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-300 hover:bg-neutral-400 text-xs font-bold text-neutral-800 transition-colors"
                      aria-label="Toggle details"
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  </div>

                  {/* Impact Metric Pills */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-neutral-300">
                      {item.metrics.map((metric, mIdx) => (
                        <div 
                          key={mIdx}
                          className="bg-neutral-100/90 border-l-2 border-orange-500 p-2.5 shadow-2xs"
                        >
                          <div className="text-base sm:text-lg font-black text-neutral-900 leading-none">
                            {metric.value}
                          </div>
                          <div className="text-[11px] font-semibold text-neutral-600 mt-1 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TL;DR Summary */}
                  <div className="mt-4 p-3 bg-neutral-300/70 border-l-3 border-neutral-900 text-neutral-900 text-xs sm:text-sm leading-relaxed font-medium">
                    <span className="font-bold text-orange-600 mr-1.5">✦ Impact TL;DR:</span>
                    {item.tldr}
                  </div>
                </div>

                {/* Expandable Technical Achievements */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-neutral-300/70">
                    <div className="text-xs font-bold tracking-wider uppercase text-neutral-700 mb-2.5">
                      Key Technical Deliverables & Outcomes:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-800 leading-relaxed mb-4">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="text-orange-500 text-sm mt-0.5 shrink-0">◼</span>
                          <div>
                            {ach.title && (
                              <strong className="text-neutral-950 font-bold mr-1">
                                {ach.title}:
                              </strong>
                            )}
                            <span>{ach.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-3 border-t border-neutral-300">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Technologies & Core Tools:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="bg-neutral-900 hover:bg-neutral-800 text-neutral-200 px-2.5 py-1 text-xs font-mono font-medium tracking-wide shadow-2xs transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
