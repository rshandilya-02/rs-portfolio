"use client";

import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  GitBranch,
  Box,
  Cpu,
  Brain,
  Terminal,
} from "lucide-react";

const sections = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Layout },
      { name: "Next.js", icon: Layout },
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Code },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "REST APIs", icon: Terminal },
      { name: "Socket.io", icon: Cpu },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Database },
      { name: "Redis", icon: Database },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Cloud },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD", icon: GitBranch },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "DSA", icon: Code },
      { name: "GenAI", icon: Brain },
      { name: "ML", icon: Brain },
      { name: "Linux", icon: Terminal },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-400/50 text-white px-6 md:px-20 py-16 text-black z-1 ">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">
        Skills
      </h1>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {sections.map((section, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold mb-6 text-white/90">
              {section.title}
            </h2>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {section.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition"
                  >
                    <Icon size={18} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}