"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";

const projects = [
  {
    title: "Collaborative Whiteboard",
    desc: "Real-time multi-user drawing",
    image: "/project1.png",
    details: [
      "Next.js + Node.js",
      "Socket.io for real-time sync",
      "PostgreSQL + Prisma",
      "Redis for pub/sub",
      "Infinite Scrolling",
      "A canvas where you can draw anything and can share with live with others"
    ],
    github: "https://github.com/rshandilya-02/x-draw",
    live: "#",
  },
  {
    title: "MyDrive",
    desc: "Secure file storage with AWS S3 and custom cli access",
    image: "/project2.png",
    details: [
      "AWS S3",
      "Presigned URLs",
      "Authentication",
      "CI/CD pipeline",
      "Published npm package"
    ],
    github: "https://github.com/rshandilya-02/mystore",
    live: "https://mystore-olive.vercel.app/",
  },
  {
    title: "Typingo",
    desc: "Test your Typing speed",
    image: "/project3.png",
    details: [
      "test your typing speed",
      "get results analysis"
    ],
    github: "https://github.com/rshandilya-02/typingo",
    live: "https://typingo-three.vercel.app/",
    
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState<any | null>(null);

  return (
    <div className="flex justify-center  min-h-screen w-full bg-black/60">

      {/* MAIN CONTAINER */}
      <div className="mt-16 w-[1050px] min-h-screen  rounded-[28px] 
      bg-[linear-gradient(145deg,#ead7c2,#d9c3ab)] 
      shadow-[0_25px_60px_rgba(0,0,0,0.25)] 
      border border-black/20 relative  p-16">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none min-h-full"
          style={{
            backgroundImage: `
              linear-gradient(#b8a999 1px, transparent 1px),
              linear-gradient(90deg, #b8a999 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 min-h-full w-[3px] bg-black/30 -translate-x-1/2 pointer-events-none" />

        <h1 className="text-4xl font-serif text-[#d94b3d] mb-16 relative z-10">
          My Work
        </h1>

        {/* PROJECTS */}
        <div className="relative z-10 flex flex-col gap-16">

          {projects.map((proj, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative flex items-center">

                {/* LEFT */}
                {isLeft && (
                  <div
                    className="w-1/2 flex justify-end pr-10 cursor-pointer"
                    onClick={() => setActiveProject(proj)}
                  >
                    <ProjectCard proj={proj} />
                  </div>
                )}

                {/* DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#d94b3d] rounded-full border-2 border-white z-10 pointer-events-none" />

                {/* RIGHT */}
                {!isLeft && (
                  <div
                    className="w-1/2 ml-auto pl-10 cursor-pointer"
                    onClick={() => setActiveProject(proj)}
                  >
                    <ProjectCard proj={proj} />
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >

          {/* CARD */}
          <div
            className="bg-[#fff8dc] w-[520px] rounded-xl shadow-2xl p-6 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >

            {/* IMAGE */}
            <div className="w-full h-[240px] relative mb-4 rounded-md overflow-hidden">
              <Image
                src={activeProject.image}
                alt="project"
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold text-black mb-2">
              {activeProject.title}
            </h2>

            {/* DESC */}
            <p className="text-black/70 mb-4">
              {activeProject.desc}
            </p>

            {/* TECH */}
            <div className="mb-4">
              <p className="font-semibold mb-2">Tech Stack</p>
              <ul className="text-sm text-black/70 space-y-1">
                {activeProject.details?.map((d: string, idx: number) => (
                  <li key={idx}>• {d}</li>
                ))}
              </ul>
            </div>

            {/* LINKS */}
            <div className="flex gap-4">
              <a
                href={activeProject.github}
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded-md text-sm"
              >
                GitHub
              </a>

              {activeProject.live !== "#" && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  className="px-4 py-2 bg-green-600 text-white rounded-md text-sm"
                >
                  Live
                </a>
              )}
                
              <div className="bg-white text-black border-2 rounded-md p-2">
               <button onClick={()=>setActiveProject(null)}>close</button>
               </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}