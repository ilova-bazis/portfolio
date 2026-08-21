import React from 'react';

export interface EducationItem {
  degreeLevel: string;
  degreeName: string;
  institution: string;
  location: string;
  date: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-2">
            Academic Background
          </p>
          <h2 className="text-5xl font-extrabold tracking-tight leading-none text-gray-900">
            EDUCATION
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-0.5 bg-orange-500" />
            <span className="text-gray-500 text-sm">◼</span>
          </div>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-neutral-200 shadow-md p-6 border-t-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.degreeLevel} {item.degreeName}
                  </h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mt-0.5">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.location}</p>
                </div>
                <div className="text-gray-500 text-sm whitespace-nowrap">{item.date}</div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
