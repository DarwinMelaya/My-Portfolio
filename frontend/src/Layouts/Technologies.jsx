import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiSupabase,
  SiFigma,
  SiCanva,
  SiMysql,
} from "react-icons/si";

const Technologies = () => {
  const technologies = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    { name: "Figma", icon: <SiFigma className="text-white" /> },
    { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the items array for seamless looping
  const doubledTechnologies = [...technologies, ...technologies];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      {/* Changed fixed to absolute for background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black pointer-events-none" />

      {/* Changed fixed to absolute for grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_100%)] pointer-events-none" />

      <motion.h2
        className="relative text-5xl font-bold mb-16 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Technologies
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={ref}
          className="flex gap-8 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center group flex-shrink-0"
            >
              <div
                className="relative p-6 bg-gray-900/80 rounded-2xl 
                          hover:scale-105 transition-transform duration-300 ease-out
                          border border-gray-800 hover:border-gray-700
                          will-change-transform"
              >
                <div className="relative text-6xl">{tech.icon}</div>
              </div>

              <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
