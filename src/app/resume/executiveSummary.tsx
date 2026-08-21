import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FiCpu, FiUsers, FiShield, FiTrendingUp, FiCheckCircle, FiAward, FiZap } from "react-icons/fi";

export default function ExecutiveSummary() {
  const quickStats = [
    {
      value: "18+ Years",
      label: "Engineering Experience",
      subtext: "Distributed Systems & AI",
      icon: <FiTrendingUp className="text-orange-500 text-xl" />
    },
    {
      value: "10 Engineers",
      label: "Cross-Functional Team Led",
      subtext: "Backend, Frontend & QA",
      icon: <FiUsers className="text-orange-500 text-xl" />
    },
    {
      value: "+500%",
      label: "Sync Runtime Boost",
      subtext: "Algorithmic Optimization",
      icon: <FiCpu className="text-orange-500 text-xl" />
    },
    {
      value: "Award Winning",
      label: "Engineer of the Year 2023",
      subtext: "Platform of the Year 2024",
      icon: <FiAward className="text-orange-500 text-xl" />
    }
  ];

  const superpowers = [
    {
      title: "Distributed Systems & Architecture",
      subtitle: "High-Scale Concurrency & Microservices",
      points: [
        "Distributed Actor models (Swift/Vapor, NATS)",
        "Go, Bun, Node.js & snowflake ID account sharding",
        "High-performance databases (PostgreSQL, ScyllaDB, MongoDB, Neo4j)"
      ],
      tag: "Core Focus"
    },
    {
      title: "AI, LLM & Agentic Workflows",
      subtitle: "RAG, Semantic Search & Multimodal AI",
      points: [
        "Agentic retrieval systems, RAG pipelines & vector databases",
        "Local inference orchestration (Ollama, Whisper, XTTS-v2, Tesseract)",
        "Semantic search, metadata enrichment & prompt orchestration"
      ],
      tag: "AI & LLM"
    },
    {
      title: "Engineering Leadership & Community",
      subtitle: "Team Direction & Mentorship",
      points: [
        "Led cross-functional team of 10 engineers across BE, FE & QA",
        "Senior Member, IEEE & Fellow, Hackathon Raptors",
        "Bootcamp instructor with 40%+ graduate IT placement rate"
      ],
      tag: "Leadership"
    },
    {
      title: "Security, Systems & Reliability",
      subtitle: "Cloud-Native & Forensics",
      points: [
        "Nationwide enterprise VPN (180 branches) & digital forensics",
        "Docker, CI/CD, Infrastructure as Code, Linux observability",
        "Published author of 3 papers on microservice optimization & genomics"
      ],
      tag: "Deep Systems"
    }
  ];

  return (
    <section className="mb-14">
      {/* Top Banner with Quick Pitch & Action */}
      <div className="bg-neutral-900 text-neutral-100 p-6 sm:p-8 border-l-4 border-orange-500 shadow-xl mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30 font-mono">
                <span>●</span> Executive Recruiter Brief
              </div>
              <span className="text-xs text-neutral-400 font-mono">Denver, CO • Senior Member, IEEE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Farzon Nosiri — Senior Software Engineer | Technical Lead
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Award-winning Senior Software Engineer and Technical Lead with nearly two decades of experience designing scalable distributed systems, modernizing legacy architectures for B2B growth, and engineering production AI/LLM workflows, RAG pipelines, and high-performance backends.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="/Farzon_Nosiri_resume_new_design.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-neutral-950 font-bold text-sm hover:bg-orange-400 transition-colors duration-200 shadow-md"
            >
              <FaDownload />
              <span>Download PDF Resume</span>
            </a>
            <div className="text-xs text-neutral-400 text-center lg:text-right font-mono">
              me@farzon.dev • (303) 210-9813
            </div>
          </div>
        </div>
      </div>

      {/* Quick Impact Metric Tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-neutral-200/90 border border-neutral-300 p-4 sm:p-5 shadow-sm hover:border-orange-500/60 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {stat.value}
              </span>
              {stat.icon}
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
              {stat.label}
            </div>
            <div className="text-[11px] text-gray-600 mt-0.5 font-mono">
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>

      {/* Superpowers / Core Competencies Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {superpowers.map((sp, idx) => (
          <div
            key={idx}
            className="bg-neutral-200/90 border-t-2 border-neutral-400 hover:border-orange-500 p-5 shadow-sm transition-colors duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-300 text-neutral-800 font-mono">
                  {sp.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {sp.title}
              </h3>
              <p className="text-xs text-orange-600 font-semibold mb-3">
                {sp.subtitle}
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                {sp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <FiCheckCircle className="text-orange-500 text-sm mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
