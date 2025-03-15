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

      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full ${
            activeCategory === "web"
              ? "bg-white text-black"
              : "bg-transparent text-white border border-white"
          }`}
          onClick={() => setActiveCategory("web")}
        >
          Web Projects
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            activeCategory === "design"
              ? "bg-white text-black"
              : "bg-transparent text-white border border-white"
          }`}
          onClick={() => setActiveCategory("design")}
        >
          Digital Design
        </button>
      </div>

      <div className="w-full text-center">
        {activeCategory === "web" ? <WebProjects /> : <DigitalDesign />}
      </div>
    </div>
  );
};

export default Projects;
