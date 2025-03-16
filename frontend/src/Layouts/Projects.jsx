import { motion } from "framer-motion";
import { useState } from "react";
import WebProjects from "../components/Projects/WebProjects";
import DigitalDesign from "../components/Projects/DigitalDesign";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.h2
        className="relative text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Projects
      </motion.h2>

      <div className="flex justify-center gap-6 mb-12">
        <button
          className={`relative px-8 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group ${
            activeCategory === "web"
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-transparent text-white border border-white/30 hover:border-white"
          }`}
          onClick={() => setActiveCategory("web")}
        >
          <span className="relative z-10">Web Projects</span>
          {activeCategory !== "web" && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          )}
          {activeCategory === "web" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>

        <button
          className={`relative px-8 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group ${
            activeCategory === "design"
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-transparent text-white border border-white/30 hover:border-white"
          }`}
          onClick={() => setActiveCategory("design")}
        >
          <span className="relative z-10">Digital Design</span>
          {activeCategory !== "design" && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          )}
          {activeCategory === "design" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      </div>

      <div className="w-full text-center">
        {activeCategory === "web" ? <WebProjects /> : <DigitalDesign />}
      </div>
    </div>
  );
};

export default Projects;
