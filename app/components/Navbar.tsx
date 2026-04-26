"use client"

import { useRouter } from "next/navigation";

import { Nerko_One } from "next/font/google";

export const nerko = Nerko_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar () {
    const router = useRouter();
    return (<div>

<div className={`${nerko.className} text-white noise2 flex gap-5 text-black text-2xl p-4 justify-center`}>
  
  {/* ABOUT */}
  <div className="relative group cursor-pointer" onClick={()=>router.push('/')}>
    <span className="relative z-10 p-3 ">about</span>

    <svg
      className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[160%] 
                 opacity-0 group-hover:opacity-100 transition duration-300"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <path
        d="M5 35 Q120 -10 290 25 Q420 60 300 75 Q150 95 40 60 Q-10 45 5 35"
        stroke="#d8cbcb"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 38 Q130 0 300 30 Q410 65 290 70 Q160 90 50 62 Q0 50 10 38"
        stroke="#beb5b5"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  </div>

  {/* WORK */}
  <div className="relative group cursor-pointer" onClick={()=>router.push('/work')}>
    <span className="relative z-10  p-3">work</span>
   <svg
      className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[160%] 
                 opacity-0 group-hover:opacity-100 transition duration-300"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <path
        d="M5 35 Q120 -10 290 25 Q420 60 300 75 Q150 95 40 60 Q-10 45 5 35"
        stroke="#c4b7b7"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 38 Q130 0 300 30 Q410 65 290 70 Q160 90 50 62 Q0 50 10 38"
        stroke="#e2d0d0"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  </div>

  {/* CONNECT */}
  <div className="relative group cursor-pointer" onClick={()=>router.push('/experience')}>
    <span className="relative z-10  p-3">Experience</span>
    <svg
      className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[160%] 
                 opacity-0 group-hover:opacity-100 transition duration-300"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <path
        d="M5 35 Q120 -10 290 25 Q420 60 300 75 Q150 95 40 60 Q-10 45 5 35"
        stroke="#ccb0b0"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 38 Q130 0 300 30 Q410 65 290 70 Q160 90 50 62 Q0 50 10 38"
        stroke="#e9d8d8"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  </div>

  <div className="relative group cursor-pointer" onClick={()=>router.push('/skills')}>
    <span className="relative z-10  p-3">Skills</span>
    <svg
      className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[160%] 
                 opacity-0 group-hover:opacity-100 transition duration-300"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
    >
      <path
        d="M5 35 Q120 -10 290 25 Q420 60 300 75 Q150 95 40 60 Q-10 45 5 35"
        stroke="#ccb0b0"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 38 Q130 0 300 30 Q410 65 290 70 Q160 90 50 62 Q0 50 10 38"
        stroke="#e9d8d8"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  </div>

</div>

</div>)
}