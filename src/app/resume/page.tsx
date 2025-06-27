import Education, { EducationItem } from './educationItem';
import Experience, { ExperienceItem } from './experienceItem'; // Path to your component

const experienceData: ExperienceItem[] = [
  {
    "companyName": "NEXUS TECHNOLOGIES, LLC",
    "jobTitle": "Team Lead - Sr. Software Engineer",
    "dateFrom": "2018-09",
    "dateTo": "2023-12",
    "location": "Khujand, Tajikistan",
    "description": [
      "Redesigned and rearchitected the entire product infrastructure using Distributed Actors to support growth of the company to scale from B2C to B2B business model.",
      "Implemented an optimized algorithm for data synchronization, significantly improving runtime performance by 500%.",
      "Designed snowflake-like user IDs for sharding accounts to improve performance and distribute workload across servers.",
      "Implemented document recognition service to read machine-readable zones of passports and Identity Documents, improving customer experience and simplifying the application process.",
      "Developed a file server using NodeJS, S3 buckets, and minIO to store users’ files across the platform.",
      "Successfully led a team of 10 backend and frontend developers."
    ],
    "technologies": [
      "Swift", "TypeScript", "NodeJS", "Python", "NATS", "PostgreSQL", "InfluxDB", "Neo4J", 
      "ScyllaDB", "MongoDB", "Vapor", "React", "Angular", "Machine Learning", "OpenCV", 
      "Tesseract", "S3", "minIO"
    ]
  },
  {
    "companyName": "JUNIOR CODE",
    "jobTitle": "Bootcamp Lead",
    "dateFrom": "2023-02",
    "dateTo": "2023-12",
    "location": "Khujand, Tajikistan",
    "description": [
      "Taught Python programming language, Algorithms, and Data Structures from beginner to advanced levels.",
      "+40% of students received internships and job offers from well-known IT companies."
    ],
    "technologies": ["Python", "TypeScript", "Java", "Algorithms", "Data Structures"]
  },
  {
    "companyName": "NEXUS TECHNOLOGIES",
    "jobTitle": "Software Developer (Consultant)",
    "dateFrom": "2017-10",
    "dateTo": "2018-09",
    "location": "Khujand, Tajikistan",
    "description": [
      "Designed and implemented the backend architecture of a CRM solution for small and medium businesses.",
      "Developed a comprehensive backend system for a leading Cardio Clinic in Khujand, improving patient management and healthcare delivery.",
      "Designed UI/UX of mobile banking for Bank 'Arvand', creating 122 user-friendly and functional screens.",
      "Developed and designed websites for Bank IMON International and OSIMI Cultural Center.",
      "Assisted Nexus Technologies with source code documentation, leading to a full-time employment offer."
    ],
    "technologies": [
      "Java", "PHP", "MySQL", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", 
      "Markdown", "WordPress"
    ]
  },
  {
    "companyName": "BANK IMON INTERNATIONAL",
    "jobTitle": "Cybersecurity Analyst and Ethical Hacker",
    "dateFrom": "2014-08",
    "dateTo": "2017-10",
    "location": "Khujand, Tajikistan",
    "description": [
      "Designed, installed, and configured a corporate VPN network (IPSec, IKEV2, OpenVPN), connecting about 180 branches nationwide.",
      "Installed and configured a corporate email server using Postfix, Dovecot, MySQL, and backup server.",
      "Performed forensics of a hacking incident involving theft of $20K, providing evidence to assist law enforcement in apprehending the hackers."
    ],
    "technologies": ["Kali Linux", "OpenVPN", "Cisco", "IPSec", "MikroTik", "Vega", "Bash"]
  },
  {
    "companyName": "SENSOTRONICA Ltd.",
    "jobTitle": "Program Manager and Tester",
    "dateFrom": "2013-11",
    "dateTo": "2014-05",
    "location": "Minsk, Belarus",
    "description": [
      "Planned and managed multiple projects using agile methodology.",
      "Facilitated communication with German partners, strengthening relationships and expanding market share.",
      "Conducted lab tests for in-house developed sensor devices and Raspberry Pi + GPIO devices.",
      "Created documentation for sensors and user manuals for application software."
    ],
    "technologies": ["Raspberry Pi", "GPIO", "NodeJS"]
  },
  {
    "companyName": "SCILIFELAB AND KTH",
    "jobTitle": "Research Assistant",
    "dateFrom": "2012-12",
    "dateTo": "2013-02",
    "location": "Stockholm, Sweden",
    "description": [
      "Conducted performance evaluation and testing on five software tools: BWA, Bowtie, Agile, Stampy, and Mosaik.",
      "Applied split-reads as a sequence-based method to identify structural variants in genome data.",
      "Improved the speed of test data generation tool by rewriting software from Java to C++."
    ],
    "technologies": ["Java", "C++", "BWA", "Bowtie", "Agile", "Stampy", "Mosaik", "FASTA"]
  },
  {
    "companyName": "KAROLINSKA INSTITUTET",
    "jobTitle": "Research Assistant",
    "dateFrom": "2012-12",
    "dateTo": "2013-02",
    "location": "Stockholm, Sweden",
    "description": [
      "Analyzed gene expressions from DNA Microarray and identified associated signaling pathways in an Epstein-Barr virus project.",
      "Predicted transcription factors and signaling pathways for further research."
    ],
    "technologies": ["DNA Microarray", "Java", "BioJava", "Mosaik", "FASTA", "FunCoup"]
  },
  {
    "companyName": "IT-CENTER OF KBTUT",
    "jobTitle": "Software Developer",
    "dateFrom": "2007-11",
    "dateTo": "2008-05",
    "location": "Khujand, Tajikistan",
    "description": [
      "Developed and designed software and database for automating elective courses at KBTUT."
    ],
    "technologies": ["PHP", "JavaScript", "MySQL", "HTML", "CSS"]
  }
]


const educationData: EducationItem[] = [
  {
    degreeLevel: 'Master',
    degreeName: 'Of Science',
    institution: 'KUNGLIGA TEKNISKA HÖGSKOLAN / KTH',
    location: 'Stockholm, Sweden',
    date: 'FEB 2013',
    description:
      'MS in Computational and Systems Biology. Master Thesis: The master thesis investigated the signaling pathways for gene regulation in EBV (Epstein-Barr Virus) infection and OCT-2, a transcription factor. Two types of cell-lines involved in EBV infection were studied, and the TFs that regulate OCT-2 expression were predicted, checked, and analyzed. Other proteins and genes that may affect the two cell-lines were also explored and annotated, highlighting the TF candidates for further research.',
  },
  {
    degreeLevel: 'Bachelor',
    degreeName: 'of Science, with Honors',
    institution: 'TECHNOLOGICAL UNIVERSITY OF TAJIKISTAN, KHUJAND BRANCH',
    location: 'Khujand, Tajikistan',
    date: 'JULY 2009',
    description:
      'BS in Information systems in economy. Diploma Thesis: I created a software for Statistical Analysis of the Quality of examination questions and tested it with over 50,000 real data samples. The software is now used by teachers and employees, and it improved examination quality.',
  },
];


export default function Resume() {
  return (
    <div>
      <Experience experiences={experienceData} />
      <Education education={educationData} />
    </div>
  );
}