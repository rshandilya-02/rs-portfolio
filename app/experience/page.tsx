"use client";

export default function Experience() {
  return (
    <div className="flex justify-center noise2 min-h-screen w-full">

      {/* PAPER CONTAINER */}
      <div className="mt-16 w-[1000px] min-h-[700px] rounded-[28px] 
      bg-[linear-gradient(145deg,#ead7c2,#d9c3ab)] 
      shadow-[0_25px_60px_rgba(0,0,0,0.25)] 
      border border-black/20 relative overflow-hidden p-16">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#b8a999 1px, transparent 1px),
              linear-gradient(90deg, #b8a999 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />

        {/* HEADER */}
        <h1 className="text-4xl font-serif text-[#d94b3d] mb-12 relative z-10">
          Experience
        </h1>

        <div className="relative z-10 flex flex-col gap-10">

          {/* RIBBON EXPERIENCE */}
          <div className="bg-[#fff8dc] p-8 rounded-xl shadow-xl rotate-[-1deg]">

            <h2 className="text-2xl font-semibold text-black">
              Software Development Intern
            </h2>

            <p className="text-sm text-black/60 mb-4">
              Ribbon Communications · Bangalore · Apr 2025 – Sep 2025
            </p>

            <ul className="space-y-3 text-black/80 text-[15px] leading-relaxed">

              <li>
                • Built and maintained enterprise analytics dashboards using 
                <span className="font-medium"> Angular & TypeScript</span>, 
                contributing to production-grade features across multiple modules.
              </li>

              <li>
                • Improved accessibility by resolving 
                <span className="font-medium"> 20+ WCAG 2.1 issues</span>, 
                enhancing keyboard navigation, ARIA compliance, and semantic structure.
              </li>

              <li>
                • Implemented 
                <span className="font-medium"> LDAP-based security workflows</span> 
                including certificate display, secure downloads, and configuration UI.
              </li>

              <li>
                • Diagnosed and fixed production & QA issues while optimizing 
                legacy components to improve performance and responsiveness.
              </li>

              <li>
                • Worked in collaborative environments using 
                <span className="font-medium"> Bitbucket, Perforce, and CI pipelines</span>.
              </li>

            </ul>
          </div>

          {/* FREELANCE EXPERIENCE */}
          <div className="bg-[#fff8dc] p-8 rounded-xl shadow-xl rotate-[1deg]">

            <h2 className="text-2xl font-semibold text-black">
              Freelance Web Developer
            </h2>

            <p className="text-sm text-black/60 mb-4">
              Posterly · Remote · Oct 2025
            </p>

            <ul className="space-y-3 text-black/80 text-[15px] leading-relaxed">

              <li>
                • Designed and developed a fully branded 
                <span className="font-medium"> e-commerce website</span> 
                using Odoo Website Builder with responsive UI and custom styling.
              </li>

              <li>
                • Delivered a production-ready client solution with 
                <span className="font-medium"> improved UX and visual identity</span>.
              </li>

              <li>
                • Optimized on-page SEO and Google Search Console indexing, 
                achieving 
                <span className="font-medium"> first-page ranking</span> 
                within the product category.
              </li>

            </ul>
          </div>

          {/* SKILLS SNAPSHOT */}
          {/* <div className="bg-[#fff8dc] p-8 rounded-xl shadow-xl rotate-[-1deg]">

            <h2 className="text-2xl font-semibold text-black mb-4">
              Core Skills
            </h2>

            <p className="text-black/80 leading-relaxed">
              JavaScript, TypeScript, C++, Python · React, Next.js, Angular · 
              Node.js, Express · PostgreSQL, MongoDB, Prisma, Redis · 
              Docker, Kubernetes, AWS · REST APIs, WebSockets · 
              Accessibility (WCAG), CI/CD, System Design
            </p>

          </div> */}

        </div>
      </div>
    </div>
  );
}