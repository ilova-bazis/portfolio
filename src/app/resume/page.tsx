import React from 'react';
import ExecutiveSummary from './executiveSummary';
import Experience, { ExperienceItem } from './experienceItem';
import Education, { EducationItem } from './educationItem';
import AwardsAndPublications from './awardsAndPublications';

const experienceData: ExperienceItem[] = [
  {
    id: "colorado-spirit",
    companyName: "COLORADO SPIRIT HOME CARE, INC.",
    jobTitle: "Software Engineer",
    dateFrom: "2026-01",
    dateTo: "Present",
    tenure: "Current Role",
    location: "Denver, Colorado",
    roleType: "Full-Time • AI & Digital Platforms",
    featured: true,
    tracks: ['ai', 'systems'],
    metrics: [
      { value: "Agentic AI", label: "Semantic Search & RAG" },
      { value: "Go • Bun", label: "Digital Archive Core" },
      { value: "Multimodal", label: "Whisper • XTTS • OCR" },
      { value: "Large Scale", label: "Ingestion & Indexing" }
    ],
    tldr: "Designing and developing a digital archive platform using Go, Bun, and Svelte, featuring an agentic AI assistant for semantic search, metadata enrichment, and high-throughput document ingestion.",
    achievements: [
      {
        title: "Digital Archive Core",
        detail: "Design and develop a digital archive platform using Go, Bun, and Svelte, supporting scalable ingestion, indexing, and retrieval of large document and media collections."
      },
      {
        title: "Agentic Assistant & RAG",
        detail: "Build an AI-powered retrieval system with an agentic assistant for semantic search, metadata enrichment, and intelligent document navigation."
      },
      {
        title: "Cross-Stack Diagnostics",
        detail: "Diagnose and resolve issues across backend APIs, databases, AI services, and frontend interfaces."
      }
    ],
    technologies: [
      "Go", "Python", "TypeScript", "Bun", "React", "Svelte", "Ollama", "Whisper", 
      "XTTS-v2", "Tesseract", "RAG", "AI/LLM Workflows", "Vector Databases"
    ]
  },
  {
    id: "independent-researcher",
    companyName: "INDEPENDENT RESEARCHER",
    jobTitle: "Independent Researcher (Systems & BioTech)",
    dateFrom: "2024-01",
    dateTo: "2025-12",
    tenure: "2 yrs",
    location: "Denver, Colorado",
    roleType: "Published Research",
    tracks: ['research', 'systems'],
    metrics: [
      { value: "3 Papers", label: "Published & Peer-Reviewed" },
      { value: "Microservices", label: "High-Load Optimization" },
      { value: "Genomics", label: "Next-Gen Sequencing" }
    ],
    tldr: "Authored and published three research papers spanning high-load microservice optimization techniques, computational biology, and next-generation sequencing software evaluation.",
    achievements: [
      {
        title: "Microservice Performance",
        detail: "Authored and published 'Performance Optimization Techniques for Microservice Architectures in High-Load Scenarios'."
      },
      {
        title: "Computational Biology",
        detail: "Published 'Regulation of OCT-2', modeling transcription factor signaling cascades."
      },
      {
        title: "Genomic Sequencing Evaluation",
        detail: "Published 'Evaluation of Software for Next-Generation Sequencing in Mapping' comparing algorithmic efficiency and mapping precision."
      }
    ],
    technologies: [
      "Distributed Systems", "Microservices", "Performance Optimization", 
      "Computational Biology", "Bioinformatics", "Python", "C++"
    ]
  },
  {
    id: "nexus-lead",
    companyName: "NEXUS TECHNOLOGIES, LLC",
    jobTitle: "Team Lead / Senior Software Engineer",
    dateFrom: "2018-09",
    dateTo: "2023-12",
    tenure: "5 yrs 4 mos",
    location: "Khujand, Tajikistan",
    roleType: "Full-Time • Engineering Lead",
    featured: true,
    tracks: ['systems', 'leadership', 'ai'],
    metrics: [
      { value: "+500%", label: "Data Sync Speedup" },
      { value: "10 Devs", label: "Cross-Functional Team Led" },
      { value: "B2C → B2B", label: "Distributed Actor Scaling" },
      { value: "OCR Engine", label: "Passport MRZ Service" }
    ],
    tldr: "Rearchitected core platform using Distributed Actor models to scale from B2C to multi-tenant B2B, boosted sync speed by 500%, and led a 10-person cross-functional team across BE, FE, and QA.",
    achievements: [
      {
        title: "Distributed Actor Core",
        detail: "Rearchitected the company's core platform using the Distributed Actor model, enabling its transition from a B2C product to a scalable multi-tenant B2B platform."
      },
      {
        title: "Data Synchronization Optimization",
        detail: "Designed an optimized data-synchronization algorithm that increased performance by approximately 500%."
      },
      {
        title: "Identity Document MRZ Recognition",
        detail: "Developed an MRZ recognition service for passports and identity documents, streamlining customer application workflows."
      },
      {
        title: "Centralized File Service",
        detail: "Built a centralized file service using Node.js, S3-compatible storage, and MinIO to manage user files across the platform."
      },
      {
        title: "Cross-Functional Team Leadership",
        detail: "Led and mentored a cross-functional engineering team of approximately 10 developers across backend, frontend, and QA."
      }
    ],
    technologies: [
      "Swift/Vapor", "TypeScript", "Node.js", "Python", "NATS", "PostgreSQL", 
      "InfluxDB", "Neo4j", "ScyllaDB", "MongoDB", "React", "Angular", "OpenCV", 
      "Tesseract", "S3/MinIO", "LLM", "TTS/STT"
    ]
  },
  {
    id: "junior-code",
    companyName: "JUNIOR CODE",
    jobTitle: "Bootcamp Lead",
    dateFrom: "2023-02",
    dateTo: "2023-12",
    tenure: "11 mos",
    location: "Remote",
    roleType: "Technical Education & Mentoring",
    tracks: ['leadership'],
    metrics: [
      { value: "+40%", label: "IT Placement Rate" },
      { value: "6-Month", label: "Intensive Program" }
    ],
    tldr: "Taught Python, algorithms, and data structures in a 6-month software engineering program; more than 40% of students secured internships or job offers with recognized technology companies.",
    achievements: [
      {
        title: "CS Curriculum & Instruction",
        detail: "Taught Python, algorithms, and data structures from beginner through advanced levels in a six-month software engineering program."
      },
      {
        title: "Technical Interview Coaching",
        detail: "Helped prepare students for technical interviews; more than 40% secured internships or job offers with recognized technology companies."
      }
    ],
    technologies: ["Python", "TypeScript", "Java", "Algorithms", "Data Structures"]
  },
  {
    id: "nexus-consultant",
    companyName: "INDEPENDENT / NEXUS TECHNOLOGIES",
    jobTitle: "Software Development Consultant",
    dateFrom: "2017-10",
    dateTo: "2018-09",
    tenure: "1 yr",
    location: "Khujand, Tajikistan",
    roleType: "Consulting → Full-Time Offer",
    tracks: ['systems'],
    metrics: [
      { value: "120+ Screens", label: "Bank Arvand Mobile UI/UX" },
      { value: "DURUD CRM", label: "SMB Architecture" },
      { value: "Cardiology Clinic", label: "Healthcare Backend" }
    ],
    tldr: "Designed DURUD CRM architecture, built cardiology clinic backend, and designed over 120 production mobile-banking screens for Bank Arvand.",
    achievements: [
      {
        title: "DURUD CRM Platform",
        detail: "Designed backend architecture for DURUD, a scalable CRM platform serving small and midsize businesses."
      },
      {
        title: "Cardiology Healthcare Backend",
        detail: "Built a healthcare backend that improved management of appointments, prescriptions, and diagnostic data for a leading cardiology clinic."
      },
      {
        title: "Mobile Banking UI/UX",
        detail: "Designed mobile-banking UI/UX and delivered more than 120 production screens using Bank Arvand's existing APIs."
      },
      {
        title: "Web Portals & Documentation",
        detail: "Developed and launched public websites for IMON International and the Osimi Cultural Center; produced technical documentation that contributed to a full-time offer."
      }
    ],
    technologies: [
      "Java", "PHP", "MySQL", "REST APIs", "WordPress", "HTML", "CSS", 
      "JavaScript", "Adobe XD", "Photoshop", "Illustrator"
    ]
  },
  {
    id: "bank-imon",
    companyName: "BANK IMON INTERNATIONAL",
    jobTitle: "Cybersecurity Analyst & Ethical Hacker",
    dateFrom: "2014-08",
    dateTo: "2017-10",
    tenure: "3 yrs 3 mos",
    location: "Khujand, Tajikistan",
    roleType: "Full-Time • Security & Infra",
    tracks: ['security'],
    metrics: [
      { value: "180+ Branches", label: "Nationwide Corporate VPN" },
      { value: "$20K Solved", label: "Digital Forensics" },
      { value: "Email Cluster", label: "Postfix / Dovecot / MySQL" }
    ],
    tldr: "Designed and deployed a nationwide corporate VPN securely connecting 180+ branches, maintained redundant corporate email systems, and resolved a $20k cyber theft incident.",
    achievements: [
      {
        title: "Nationwide Enterprise VPN",
        detail: "Designed and deployed a nationwide corporate VPN securely connecting more than 180 branches."
      },
      {
        title: "Secure Email Platform",
        detail: "Implemented and maintained a secure corporate email platform with backup and redundancy."
      },
      {
        title: "Digital Forensics",
        detail: "Conducted digital forensics following a $20K security incident and supported law enforcement in identifying the perpetrators."
      }
    ],
    technologies: [
      "Linux", "Kali Linux", "OpenVPN", "IPsec", "IKEv2", "Cisco", "MikroTik", 
      "Postfix", "Dovecot", "MySQL", "Bash", "Digital Forensics", "Network Security"
    ]
  },
  {
    id: "sensotronica",
    companyName: "SENSOTRONICA LTD.",
    jobTitle: "Program Manager & Tester",
    dateFrom: "2013-11",
    dateTo: "2014-05",
    tenure: "7 mos",
    location: "Minsk, Belarus",
    roleType: "Full-Time • IoT & Hardware",
    tracks: ['systems', 'leadership'],
    metrics: [
      { value: "Solar Solutions", label: "Raspberry Pi & Sensors" },
      { value: "German Partners", label: "Cross-Border Delivery" }
    ],
    tldr: "Managed Agile projects, coordinated with German partners, and tested sensor and Raspberry Pi/GPIO devices used in solar-panel solutions.",
    achievements: [
      {
        title: "Agile Project Coordination",
        detail: "Managed multiple Agile projects and coordinated technical integration with German partners."
      },
      {
        title: "Sensor & GPIO Testing",
        detail: "Tested sensor and Raspberry Pi/GPIO devices used in solar-panel solutions."
      }
    ],
    technologies: ["Raspberry Pi", "GPIO", "Node.js", "Linux", "Hardware Testing", "Software Testing", "Sensor Systems"]
  },
  {
    id: "scilifelab",
    companyName: "SCILIFELAB & KTH",
    jobTitle: "Research Assistant",
    dateFrom: "2012-12",
    dateTo: "2013-02",
    tenure: "3 mos",
    location: "Stockholm, Sweden",
    roleType: "Research • NGS & Bioinformatics",
    tracks: ['research', 'systems'],
    metrics: [
      { value: "20 GB Data", label: "Genome Alignment" },
      { value: "5 NGS Tools", label: "Evaluated BWA, Bowtie, etc." }
    ],
    tldr: "Evaluated BWA, Bowtie, Agile, Stampy, and Mosaik using 20 GB of genome data, including split-read mapping against a reference genome.",
    achievements: [
      {
        title: "Genomic Tool Evaluation",
        detail: "Evaluated BWA, Bowtie, Agile, Stampy, and Mosaik using 20 GB of genome data, including split-read mapping against a reference genome."
      }
    ],
    technologies: ["Java", "C++", "NGS Tools", "FASTA", "BWA", "Bowtie", "Agile", "Stampy", "Mosaik"]
  },
  {
    id: "karolinska",
    companyName: "KAROLINSKA INSTITUTET",
    jobTitle: "Research Assistant",
    dateFrom: "2012-12",
    dateTo: "2013-02",
    tenure: "3 mos",
    location: "Stockholm, Sweden",
    roleType: "Research • Computational Biology",
    tracks: ['research'],
    metrics: [
      { value: "EBV Virus", label: "Signaling Pathways" },
      { value: "DNA Microarray", label: "Gene-Expression Data" }
    ],
    tldr: "Analyzed DNA microarray gene-expression data for an Epstein-Barr virus research project and identified associated signaling pathways.",
    achievements: [
      {
        title: "Gene-Expression Analysis",
        detail: "Analyzed DNA microarray gene-expression data for an Epstein-Barr virus research project and identified associated signaling pathways."
      }
    ],
    technologies: ["Java", "BioJava", "Python", "Mosaik", "UniProt", "FASTA", "FunCoup"]
  },
  {
    id: "kbtut-center",
    companyName: "IT CENTER OF KBTUT",
    jobTitle: "Software Developer",
    dateFrom: "2007-11",
    dateTo: "2008-05",
    tenure: "7 mos",
    location: "Khujand, Tajikistan",
    roleType: "Full-Stack Development",
    tracks: ['systems'],
    metrics: [
      { value: "Automation", label: "Elective-Course Admin" }
    ],
    tldr: "Developed a database-backed application that automated elective-course administration across university faculties.",
    achievements: [
      {
        title: "Course Administration System",
        detail: "Developed a database-backed application that automated elective-course administration."
      }
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"]
  }
];

const educationData: EducationItem[] = [
  {
    degreeLevel: "Master of Science",
    degreeName: "Computational & Systems Biology",
    institution: "KTH ROYAL INSTITUTE OF TECHNOLOGY",
    location: "Stockholm, Sweden",
    date: "FEB 2013",
    thesisTitle: "Regulation of OCT-2 & EBV Infection",
    thesisSummary: "Investigated the signaling pathways for gene regulation in EBV (Epstein-Barr Virus) infection and OCT-2 transcription factor, modeling gene networks and predicting TF candidates.",
    keyHighlights: ["Computational & Systems Biology", "Gene Networks", "BioJava & Python", "High-Performance Computing"]
  },
  {
    degreeLevel: "Bachelor of Science with Honors",
    degreeName: "Information Systems in Economics",
    institution: "TECHNOLOGICAL UNIVERSITY OF TAJIKISTAN - KHUJAND BRANCH",
    location: "Khujand, Tajikistan",
    date: "JUL 2009",
    honors: "Graduated with Honors",
    thesisTitle: "Statistical Quality Analysis of Examination Systems",
    thesisSummary: "Created software for Statistical Analysis of the Quality of examination questions, tested with over 50,000 real data samples, adopted university-wide to improve examination quality.",
    keyHighlights: ["Information Systems", "Statistical Analysis", "50,000+ Samples", "Database Architecture"]
  }
];

export default function Resume() {
  return (
    <div className="py-8 md:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-10" />

      {/* Recruiter & Hiring Manager Executive Snapshot */}
      <ExecutiveSummary />

      {/* Interactive Experience Timeline */}
      <Experience experiences={experienceData} />

      {/* Honors, Memberships & Selected Publications */}
      <AwardsAndPublications />

      {/* Structured Education Section */}
      <Education education={educationData} />
    </div>
  );
}