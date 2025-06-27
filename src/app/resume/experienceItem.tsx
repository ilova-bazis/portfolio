import React from 'react';
import { FaDownload } from "react-icons/fa6";

export interface ExperienceItem {
  companyName: string;
  jobTitle: string;
  dateFrom: string;
  dateTo?: string; // Optional because of "Present"
  location: string;
  description: string[];
  technologies?: string[]; // Optional if no technologies used
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
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-row justify-between">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
          <a
              href={"/farzon_nosiri_resume_v6.pdf"}
              download
              className="inline-flex items-center bottom-0 gap-2 font-bold"
              // className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" 
             
            >
              <FaDownload /><span className="leading-none hidden sm:block"> Download Resume</span> 
            </a>
        </div>
        <div className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <div key={index} className="bg-neutral-200 rounded-lg shadow-md p-6">
              <div className="md:flex md:justify-between md:items-start mb-4"> 
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 md:mb-0"> 
                    {experience.jobTitle}
                  </h3>
                  <p className="text-orange-800 font-semibold">{experience.companyName}</p>  
                  <p className="text-gray-600">{experience.location}</p> 
                </div>
                <div className="text-gray-500 text-sm whitespace-nowrap md:text-right"> 
                  {experience.dateFrom} - {experience.dateTo || 'Present'}
                </div>
              </div>
              <div className="text-gray-700 mb-4">
              <ul className="list-none text-gray-700 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="flex items-start mb-2">
           - {item}
          </li>
        ))}
      </ul>
              </div>
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-200 px-2 py-1 rounded-md text-sm"
                    >
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