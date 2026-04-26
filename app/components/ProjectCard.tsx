export default function ProjectCard({ proj }) {
  return (
    <div
      className="relative bg-[#fff8dc] p-5 w-[260px] 
      shadow-xl rotate-[-2deg] hover:scale-105 transition duration-300 cursor-pointer"
    >

      {/* tape */}
      <div className="absolute top-[-10px] left-[30%] w-[80px] h-[18px] bg-[#f5e6c8] rotate-[-6deg] opacity-80" />

      <p className="font-semibold text-black text-lg mb-2">
        {proj.title}
      </p>

      <p className="text-sm text-black/70 mb-4">
        {proj.desc}
      </p>

      <div className="flex gap-3 text-sm">

        <a
          href={proj.github}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          className="underline text-blue-600"
        >
          GitHub
        </a>

        {proj.live !== "#" && (
          <a
            href={proj.live}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="underline text-green-600"
          >
            Live
          </a>
        )}

      </div>
    </div>
  );
}