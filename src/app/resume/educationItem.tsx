import React from 'react';
import { FiAward, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';

export interface EducationItem {
  degreeLevel: string;
  degreeName: string;
  institution: string;
  location: string;
  date: string;
  honors?: string;
  thesisTitle?: string;
  thesisSummary: string;
  keyHighlights?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="pb-16">
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-2">
          Academic Foundations
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-gray-900">
          EDUCATION
        </h2>
        <div className="flex items-center gap-4 mt-3">
          <div className="w-16 h-0.5 bg-orange-500" />
          <span className="text-gray-500 text-sm">◼</span>
          <span className="text-xs font-mono text-gray-600">
            Computational systems biology, algorithms & information systems
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <div 
            key={index} 
            className="bg-neutral-200/95 shadow-md p-6 border-t-4 border-neutral-700 hover:border-orange-500 transition-colors duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 bg-neutral-300/80 px-2 py-0.5">
                  {item.degreeLevel} Degree
                </span>
                {item.honors && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 border border-amber-300">
                    <FiAward className="text-xs text-amber-700" />
                    {item.honors}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                {item.degreeLevel} {item.degreeName}
              </h3>

              <p className="text-xs font-bold uppercase tracking-wide text-neutral-800 font-mono mb-2">
                {item.institution}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 mb-4 font-mono">
                <span className="flex items-center gap-1">
                  <FiMapPin className="text-orange-500" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-orange-500" />
                  {item.date}
                </span>
              </div>

              {item.thesisTitle && (
                <div className="p-3 bg-neutral-300/70 border-l-2 border-orange-500 mb-3 text-xs leading-relaxed">
                  <div className="font-bold text-neutral-900 flex items-center gap-1.5 mb-1">
                    <FiBookOpen className="text-orange-600" />
                    <span>Thesis: {item.thesisTitle}</span>
                  </div>
                  <p className="text-neutral-800">{item.thesisSummary}</p>
                </div>
              )}

              {!item.thesisTitle && (
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {item.thesisSummary}
                </p>
              )}
            </div>

            {item.keyHighlights && item.keyHighlights.length > 0 && (
              <div className="mt-4 pt-3 border-t border-neutral-300 flex flex-wrap gap-1.5">
                {item.keyHighlights.map((hl, hIdx) => (
                  <span 
                    key={hIdx} 
                    className="text-[11px] font-mono font-medium px-2 py-0.5 bg-neutral-900 text-neutral-200"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
