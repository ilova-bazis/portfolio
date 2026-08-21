import React from 'react';
import { FiAward, FiBook, FiUsers, FiCheckCircle } from 'react-icons/fi';

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
}

export interface PublicationItem {
  title: string;
  domain: string;
}

export interface MembershipItem {
  title: string;
  description?: string;
}

export default function AwardsAndPublications() {
  const awards: AwardItem[] = [
    {
      title: "Platform of the Year",
      organization: "Innovation Time 2024 (\"Время инноваций 2024\")",
      year: "2024"
    },
    {
      title: "Software Engineer of the Year",
      organization: "Techno 2023 — National Business Association \"Technologies and Innovation\"",
      year: "2023"
    }
  ];

  const memberships: MembershipItem[] = [
    {
      title: "Senior Member, IEEE",
      description: "Recognized senior standing in the Institute of Electrical and Electronics Engineers."
    },
    {
      title: "Fellow, Hackathon Raptors",
      description: "Mentoring and supporting high-velocity hackathon teams in software architecture and innovation."
    }
  ];

  const publications: PublicationItem[] = [
    {
      title: "Performance Optimization Techniques for Microservice Architectures in High-Load Scenarios",
      domain: "Distributed Systems & Scalability"
    },
    {
      title: "Regulation of OCT-2",
      domain: "Computational Biology & Gene Regulation"
    },
    {
      title: "Evaluation of Software for Next-Generation Sequencing in Mapping",
      domain: "Bioinformatics & Sequence Alignment"
    }
  ];

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Awards & Honors */}
        <div className="bg-neutral-200/95 shadow-md p-6 border-t-4 border-orange-500 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiAward className="text-orange-500 text-lg" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 font-mono">
                Honors & Awards
              </h3>
            </div>

            <div className="space-y-4">
              {awards.map((award, idx) => (
                <div key={idx} className="p-3 bg-neutral-100/90 border-l-2 border-orange-500">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm font-bold text-gray-900">
                      {award.title}
                    </h4>
                    <span className="text-[11px] font-mono font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1 leading-snug">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Memberships */}
        <div className="bg-neutral-200/95 shadow-md p-6 border-t-4 border-neutral-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiUsers className="text-orange-500 text-lg" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 font-mono">
                Memberships & Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {memberships.map((item, idx) => (
                <div key={idx} className="p-3 bg-neutral-100/90 border-l-2 border-neutral-800">
                  <h4 className="text-sm font-bold text-gray-900">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-neutral-600 mt-1 leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Publications */}
        <div className="bg-neutral-200/95 shadow-md p-6 border-t-4 border-neutral-700 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiBook className="text-orange-500 text-lg" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 font-mono">
                Selected Publications
              </h3>
            </div>

            <div className="space-y-3">
              {publications.map((pub, idx) => (
                <div key={idx} className="p-2.5 bg-neutral-100/90 border-l-2 border-orange-500">
                  <div className="text-xs font-bold text-gray-900 leading-snug">
                    “{pub.title}”
                  </div>
                  <div className="text-[11px] font-mono text-orange-600 font-semibold mt-1">
                    {pub.domain}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
