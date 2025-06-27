import React from 'react';

export interface EducationItem {
  degreeLevel: string; // "Master", "Bachelor", etc.
  degreeName: string; // "Of Science", "in Information Systems", etc.
  institution: string;
  location: string; // City, Country
  date: string; // "FEB 2013", "JULY 2009", etc.
  description: string; // Description of the degree, thesis, etc.
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="bg-neutral-200 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-2"> {/* Added flex for title and date */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.degreeLevel} {item.degreeName}
                  </h3>
                  <p className="text-orange-800 font-semibold">{item.institution}</p>
                  <p className="text-gray-600">{item.location}</p>
                </div>
                <div className="text-gray-500 text-sm whitespace-nowrap">
                  {item.date}
                </div>
              </div>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;