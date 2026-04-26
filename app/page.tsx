

import Image from "next/image";
import { GitBranch } from "lucide-react";

export default function Home() {
  return (
    <div className="noise2 min-h-screen w-full flex flex-col items-center">

      {/* HERO */}
      <div className="hero-section flex justify-center mt-16">
        <div className="p-[6px] rounded-[32px] bg-[#d4bfa8] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">

          <div className="w-full max-w-[1050px] min-h-[520px] rounded-[28px] bg-[linear-gradient(145deg,#ead7c2,#d9c3ab)] shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-black/30 relative">

            {/* PAPER + GRID */}
            <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] pointer-events-none">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(#b8a999 1px, transparent 1px),
                    linear-gradient(90deg, #b8a999 1px, transparent 1px)
                  `,
                  backgroundSize: "50px 50px"
                }}
              />
            </div>

            {/* FOLD */}
            <div className="absolute left-1/2 top-0 h-full w-[12px] -translate-x-1/2 z-10 bg-gradient-to-r from-black/20 via-black/10 to-transparent blur-[1px]" />

            {/* SPIRAL */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex flex-col justify-between py-6 z-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[18px] h-[12px] border-[2px] border-black/70 rounded-full bg-[#e9d8c5] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                />
              ))}
            </div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col md:flex-row h-full px-6 md:px-16">

              {/* LEFT */}
             <div className="flex flex-col justify-center w-full md:w-[55%] text-[#d94b3d] pr-6">

  <p className="text-2xl text-black mb-2 font-medium">
    Rishabh Shandilya
  </p>

  <p className="text-lg italic text-black mb-6">
    Full Stack Developer . India
  </p>

  {/* HEADLINE */}
  <h1 className="text-5xl font-serif leading-tight">
    I build products that
  </h1>

  <h2 className="text-5xl  mt-2 animate-fadeIn">
    scale & feel <br></br>effortless
  </h2>

  <div className="w-[200px] h-[2px] bg-[#d94b3d] mt-5 opacity-70" />

  {/* DESCRIPTION */}
  <div className="mt-6 text-black/80 text-[14px] leading-relaxed max-w-[440px] space-y-2">

    <p>
      Full-stack developer focused on building clean, scalable web applications using 
      <span className="font-medium"> React, Next.js, and Node.js</span>.
    </p>

    <p>
      I work across frontend, backend, and infrastructure — combining 
      <span className="font-medium"> system design thinking with DevOps practices</span> 
      {" "}to ship reliable, production-ready systems.
    </p>

    <p>
      Experienced in building real-world features during my internship at 
      <span className="font-medium"> Ribbon Communications</span>.
    </p>

  </div>
</div>

              {/* PAGE SHADING */}
              <div className="absolute left-0 top-0 w-1/2 h-full bg-white/5 pointer-events-none" />
              <div className="absolute right-0 top-0 w-1/2 h-full bg-black/5 pointer-events-none" />

              {/* RIGHT */}c
              <div className="relative w-full md:w-[45%] flex justify-center mt-10 md:mt-0">

                <div className="relative md:absolute top-[20px] md:top-[55px] right-0 md:right-[120px] flex flex-col items-center animate-swing origin-top">

                  <div className="w-[2px] h-[80px] bg-black/40" />

                  <div className="bg-black p-3 pb-7 rounded-md shadow-[0_30px_40px_rgba(0,0,0,0.35)] rotate-2">
                    <div className="w-[220px] h-[240px] relative overflow-hidden rounded-sm">
                      <Image
                        src="/profile.png"
                        alt="my_image"
                        fill
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
     <div className="mt-24 w-full flex justify-center pb-16 ">

  {/* BASE PAPER */}
  <div className="w-full max-w-[900px] bg-[#fff8dc] rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-black/20 relative p-10">

    {/* GRID */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(#b8a999 1px, transparent 1px),
          linear-gradient(90deg, #b8a999 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px"
      }}
    />

    {/* DOODLE TITLE */}
    <div className="relative z-10 flex flex-col items-center gap-6">

      <p className="font-[cursive] text-[#d94b3d] text-2xl rotate-[-2deg]">
        let’s connect :)
      </p>

      {/* ICON LINKS */}
     <div className="flex flex-wrap gap-6 justify-center items-center">
        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/rishabh-shandilya-a261b1258/"
          target="_blank"
          className="group relative "
        >
          <div className="w-[60px] bg-blue-400 h-[60px]  border-2 border-black rounded-xl flex items-center justify-center rotate-[-6deg] shadow-md group-hover:rotate-0 transition duration-300">
            <span className="text-xl font-bold text-black ">in</span>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/rshandilya-02"
          target="_blank"
          className="group relative"
        >
          <div className="w-[80px] h-[60px] bg-white border-2 border-black rounded-xl flex items-center justify-center rotate-[4deg] shadow-md group-hover:rotate-0 transition duration-300">
            <span className="text-xl text-black ">Github</span>
          </div>
        </a>

        {/* TWITTER */}
        <a
          href="https://x.com/rshandilya22"
          target="_blank"
          className="group relative"
        >
          <div className="w-[60px] h-[60px] bg-black border-2 border-black rounded-xl flex items-center justify-center rotate-[-3deg] shadow-md group-hover:rotate-0 transition duration-300">
            <span className="text-xl text-white font-bold">X</span>
          </div>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:shandilya.rishabh117@gmail.com"
          className="group relative"
        >
          <div className="w-[60px] h-[60px] bg-white border-2 border-black rounded-xl flex items-center justify-center rotate-[5deg] shadow-md group-hover:rotate-0 transition duration-300">
            <span className="text-xl">✉️</span>
          </div>
        </a>

 <a
      href="/resume.pdf"
      download
      className="group relative"
    >
      <div className="bg-[#fff8dc] border-2 border-black px-6 py-4 rounded-md shadow-xl rotate-[-2deg] group-hover:rotate-0 transition duration-300">

        {/* tape */}
        <div className="absolute -top-3 left-1/3 w-[70px] h-[18px] bg-[#f5e6c8] rotate-[-6deg] opacity-80" />

        <p className="text-black font-medium">
          📄 download resume
        </p>

        <p className="text-xs text-black/60 mt-1">
          (pdf · quick overview of my work)
        </p>

      </div>
    </a>
      </div>

      {/* HAND-DRAWN LINE */}
      <div className="w-[200px] h-[2px] bg-[#d94b3d] mt-4 opacity-60 rotate-[1deg]" />

    </div>
  </div>
</div>

    </div>
  );
}