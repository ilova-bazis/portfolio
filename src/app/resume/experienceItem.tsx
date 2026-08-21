import React from 'react';
import { FaDownload } from "react-icons/fa6";

export interface ExperienceItem {
  companyName: string;
  jobTitle: string;
  dateFrom: string;
  dateTo?: string;
  location: string;
  description: string[];
  technologies?: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.dateTo || 'Present');
    const dateB = new Date(b.dateTo || 'Present');
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className="py-16">
      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-14" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-row justify-between items-start">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-2">
              Work History
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight leading-none text-gray-900">
              EXPERIENCE
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-16 h-0.5 bg-orange-500" />
              <span className="text-gray-500 text-sm">◼</span>
            </div>
          </div>
          <a
            href="/farzon_nosiri_resume_v6.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black font-bold text-sm hover:bg-black hover:text-white transition-colors duration-200 mt-1"
          >
            <FaDownload />
            <span className="hidden sm:inline">Download Resume</span>
          </a>
        </div>

        <div className="space-y-6">
          {sortedExperiences.map((experience, index) => (
            <div key={index} className="bg-neutral-200 shadow-md p-6 border-t-4 border-orange-500">
              <div className="md:flex md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                    {experience.jobTitle}
                  </h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-orange-500">
                    {experience.companyName}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">{experience.location}</p>
                </div>
                <div className="text-gray-500 text-sm whitespace-nowrap md:text-right mt-1">
                  {experience.dateFrom} — {experience.dateTo || 'Present'}
                </div>
              </div>
              <ul className="list-disc list-outside text-gray-700 mb-4 ml-4 space-y-1 text-sm leading-relaxed">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-300">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-900 text-gray-200 px-2 py-1 text-xs font-bold tracking-wide">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
