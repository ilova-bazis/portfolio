'use client';

import React, { useState } from 'react';
import PortfolioHero from "./hero";
import PortfolioCard, { ProjectItem, ProjectCategory } from "./portfolioItem";
import { FiLayers, FiCpu, FiTerminal, FiCloud, FiSmartphone, FiFilter } from 'react-icons/fi';

const projects: ProjectItem[] = [
  {
    id: "umati",
    title: "Umati — AI Task Coordination CLI",
    category: "ai-tools",
    categoryLabel: "AI & Agentic CLI",
    subtitle: "Workspace-Local Task Engine for Humans & AI Coding Agents",
    description:
      "A CLI-first, workspace-local task management system designed specifically for coordinating work between humans and autonomous AI coding agents without requiring external databases or servers.",
    terminalCommand: "umati claim --task #104 --agent coder-1",
    terminalOutput: "✓ Claimed Task #104 [Exclusive Lock]\n↳ Workspace: .umati/state.json\n↳ Status: In-Progress • Subtasks: 3/4 Complete",
    metrics: [
      { value: "Zero Server", label: "Workspace Local (.umati/)" },
      { value: "Exclusive Locks", label: "Prevents Duplicate Agent Work" }
    ],
    highlights: [
      "Exclusive task claiming preventing race conditions across concurrent AI coding subagents",
      "Hierarchical parent-child task breakdowns with stateful event logs",
      "AI-agent friendly JSON data formats and documented agentic workflows"
    ],
    technologies: ["Go", "CLI", "AI Coding Agents", "Autonomous Systems", "JSON"],
    githubUrl: "https://github.com/ilova-bazis/umati",
    featured: true,
  },
  {
    id: "focus-timer",
    title: "Focus Timer",
    category: "cli-systems",
    categoryLabel: "CLI & Desktop",
    subtitle: "Keyboard-First Productivity Engine with Waybar & D-Bus",
    description:
      "A keyboard-first productivity timer with configurable focus/break intervals and guided stretch reminders. Features a TUI interface, Waybar integration, AI-assisted task management, and desktop notifications via D-Bus.",
    image: "/portfolio/focus-timer.png",
    metrics: [
      { value: "Waybar Native", label: "Linux Status Bar Integration" },
      { value: "D-Bus IPC", label: "Desktop Notifications" }
    ],
    highlights: [
      "Custom Terminal User Interface (TUI) with zero mouse dependency",
      "Waybar module integration for real-time status bar synchronization",
      "Desktop notification daemon integration via Linux D-Bus IPC"
    ],
    technologies: ["Go", "Linux", "TUI", "Waybar", "D-Bus", "IPC"],
    githubUrl: "https://github.com/ilova-bazis/focus-timer",
    featured: true,
  },
  {
    id: "passport-id-reader",
    title: "Passport & ID Document Reader",
    category: "ai-tools",
    categoryLabel: "Computer Vision & OCR",
    subtitle: "ICAO 9303 MRZ Optical Recognition & Validation Engine",
    description:
      "A specialized computer vision and OCR pipeline engineered to detect, extract, and validate Machine-Readable Zones (MRZ) on passports, visas, and national identity cards with automated checksum validation.",
    terminalCommand: "mrz-reader --image passport.jpg --validate-checksums",
    terminalOutput: "✓ MRZ Zone Detected (Type 3 / ICAO 9303)\n↳ Document: P<USA<<NOSIRI<<FARZON<<<<<<<<<<<<<<<\n↳ Checksums: Valid (Doc #, DOB, Expiry, Composite)",
    metrics: [
      { value: "ICAO 9303", label: "Global Standard MRZ" },
      { value: "Automated", label: "Checksum & Binarization" }
    ],
    highlights: [
      "OpenCV preprocessing pipeline featuring adaptive thresholding, deskewing, and morphological filtering",
      "Tesseract OCR extraction tuned for OCR-B typeface recognition",
      "Automated verification of ICAO 9303 Modulo 7/3/1 check digits to prevent fraudulent inputs"
    ],
    technologies: ["Python", "OpenCV", "Tesseract", "Computer Vision", "Machine Learning", "FastAPI"],
    featured: false,
  },
  {
    id: "focus-n-break",
    title: "Focus & Break for macOS",
    category: "mobile-desktop",
    categoryLabel: "macOS Desktop",
    subtitle: "Native Menu Bar Time Management & Health Tracker",
    description:
      "A lightweight, native macOS desktop application engineered in Swift and AppKit/SwiftUI to track deep work blocks, scheduled breaks, and physical stretch reminders directly from the macOS menu bar.",
    terminalCommand: "swift run focus-n-break",
    terminalOutput: "✓ Initialized Focus & Break Menu Bar Daemon\n↳ Active Session: 45m Deep Work\n↳ Next Stretch Reminder in: 12m 40s",
    metrics: [
      { value: "Native Swift", label: "Zero Electron Overhead" },
      { value: "Menu Bar", label: "Unobtrusive Status & Alerts" }
    ],
    highlights: [
      "Built natively in Swift with minimal memory footprint and fast startup time",
      "Menu bar presence with real-time countdown and interactive controls",
      "Configurable work/rest cycles and gentle notification triggers"
    ],
    technologies: ["Swift", "macOS", "SwiftUI", "AppKit", "Desktop App"],
    githubUrl: "https://github.com/ilova-bazis/focus-n-break",
    featured: false,
  },
  {
    id: "transcribe-go",
    title: "Transcribe Go",
    category: "ai-tools",
    categoryLabel: "Audio AI & DSP",
    subtitle: "High-Performance CLI Wrapper for whisper.cpp",
    description:
      "A specialized CLI tool for fast audio-to-text transcription, built as a Go wrapper around whisper.cpp. Leverages OpenAI's Whisper model for speech recognition with zero cloud dependencies.",
    terminalCommand: "transcribe-go meeting.wav --model medium.en --threads 8",
    terminalOutput: "✓ Loaded whisper.cpp model (medium.en, 1.5GB)\n[00:00:00.000 --> 00:00:05.200] Architecting scalable distributed systems.\n[00:00:05.200 --> 00:00:10.800] Sub-millisecond latency across all nodes.",
    metrics: [
      { value: "Zero Cloud", label: "100% On-Device Inference" },
      { value: "C++ Speed", label: "Cgo whisper.cpp Bindings" }
    ],
    highlights: [
      "Cgo bridge connecting Go runtime with whisper.cpp optimized matrix math routines",
      "Support for multi-threaded inference across multi-core CPU architectures",
      "Flexible output formatting supporting plain text, SRT, and JSON transcripts"
    ],
    technologies: ["Go", "C++", "whisper.cpp", "Audio DSP", "Speech-to-Text", "CLI"],
    githubUrl: "https://github.com/ilova-bazis/transcribe-go",
    featured: false,
  },
  {
    id: "geoip-lookup",
    title: "GeoIP Lookup REST API",
    category: "backend-cloud",
    categoryLabel: "API & Microservice",
    subtitle: "Sub-Millisecond Geolocation & IP Address Lookup Engine",
    description:
      "A high-throughput RESTful microservice for querying geoname data and resolving geolocation from IP addresses. Features optimized database queries, Prisma ORM, and full Docker containerization.",
    image: "/portfolio/geoip-lookup.png",
    metrics: [
      { value: "< 2ms Latency", label: "Fast Spatial Lookups" },
      { value: "Dockerized", label: "Production-Ready Container" }
    ],
    highlights: [
      "High-concurrency RESTful API endpoints for IP range search and coordinate resolution",
      "Type-safe schema and database queries powered by TypeScript and Prisma ORM",
      "Lightweight multi-stage Docker build for rapid deployment in cloud clusters"
    ],
    technologies: ["TypeScript", "Node.js", "Prisma", "Docker", "REST API", "PostgreSQL"],
    githubUrl: "https://github.com/ilova-bazis/geoip-lookup",
    featured: false,
  },
  {
    id: "tamos",
    title: "Tamos Global VoIP Messenger",
    category: "mobile-desktop",
    categoryLabel: "Mobile & Real-Time",
    subtitle: "Telecommunications Platform with NGN Calling & Messaging",
    description:
      "A telecommunications mobile application enabling users worldwide to make high-quality calls to landline and cellular phones at favorable rates with NGN virtual number registration and instant messaging.",
    image: "/portfolio/tamos.png",
    metrics: [
      { value: "NGN Virtual", label: "Global Landline & Cell Calling" },
      { value: "Real-Time", label: "Encrypted Audio & Messaging" }
    ],
    highlights: [
      "Engineered mobile client in Swift with high-reliability VoIP session management",
      "Integrated SIP/WebRTC codecs for low-latency audio transmission over cellular networks",
      "Built-in instant messaging and user contact synchronization"
    ],
    technologies: ["Swift", "iOS", "NGN VoIP", "WebRTC", "SIP", "Vapor"],
    featured: false,
  },
  {
    id: "digital-archive-ai",
    title: "Digital Archive & Agentic Retrieval",
    category: "ai-tools",
    categoryLabel: "AI & RAG Platform",
    subtitle: "High-Throughput Document Ingestion & Semantic Assistant",
    description:
      "Enterprise digital archive platform supporting scalable ingestion, indexing, and retrieval of large document collections with an agentic AI assistant for semantic search, metadata enrichment, and document navigation.",
    terminalCommand: "archive-agent query 'Extract executive summaries from 2024 audits'",
    terminalOutput: "✓ Vector Retrieval [Top-K: 5 chunks, Cosine Sim: 0.94]\n↳ Agent Tool Execution: Metadata Enrichment + Summarization\n↳ Result: Generated structured multi-document synthesis in 420ms",
    metrics: [
      { value: "Agentic RAG", label: "Vector Search & Tool Use" },
      { value: "Multimodal AI", label: "Whisper + XTTS + OCR" }
    ],
    highlights: [
      "Built on Go, Bun, and Svelte for fast ingestion pipelines and responsive UI navigation",
      "Vector database embeddings paired with local LLM orchestration (Ollama, Whisper, XTTS-v2)",
      "Automated OCR and metadata enrichment for unstructured document archives"
    ],
    technologies: ["Go", "Bun", "Svelte", "RAG", "Vector DBs", "Ollama", "Whisper", "XTTS-v2"],
    featured: false,
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string; icon: React.ReactNode; count: number }[] = [
    { 
      id: 'all', 
      label: 'All Projects', 
      icon: <FiLayers className="text-xs" />,
      count: projects.length 
    },
    { 
      id: 'ai-tools', 
      label: 'AI & Agentic Systems', 
      icon: <FiCpu className="text-xs text-orange-500" />,
      count: projects.filter(p => p.category === 'ai-tools').length 
    },
    { 
      id: 'cli-systems', 
      label: 'CLI & Systems Tools', 
      icon: <FiTerminal className="text-xs text-orange-500" />,
      count: projects.filter(p => p.category === 'cli-systems').length 
    },
    { 
      id: 'backend-cloud', 
      label: 'Backend & Cloud APIs', 
      icon: <FiCloud className="text-xs text-orange-500" />,
      count: projects.filter(p => p.category === 'backend-cloud').length 
    },
    { 
      id: 'mobile-desktop', 
      label: 'Desktop & Mobile Apps', 
      icon: <FiSmartphone className="text-xs text-orange-500" />,
      count: projects.filter(p => p.category === 'mobile-desktop').length 
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="pb-20">
      <PortfolioHero />

      <section className="max-w-screen-xl mx-auto px-4">
        {/* Category Filter Bar */}
        <div className="mb-10 pb-4 border-b border-neutral-300 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 flex items-center gap-1 mr-2 font-mono">
            <FiFilter className="text-orange-500" /> Filter:
          </span>
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all duration-150 ${
                selectedCategory === tab.id
                  ? 'bg-neutral-900 text-orange-400 shadow-sm border-b-2 border-orange-500'
                  : 'bg-neutral-200/90 text-neutral-700 hover:bg-neutral-300 border border-neutral-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-sm ${
                selectedCategory === tab.id ? 'bg-neutral-800 text-orange-400' : 'bg-neutral-300 text-neutral-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
