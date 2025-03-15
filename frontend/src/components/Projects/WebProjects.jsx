import { motion } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Project Name",
    description:
      "A brief description of your project and what it does. What problems does it solve?",
    images: [
      "/path-to-your-image1.jpg",
      "/path-to-your-image2.jpg",
      "/path-to-your-image3.jpg",
    ], // Array of image paths
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"], // Add your technologies
    liveLink: "https://your-project-url.com", // Optional
    githubLink: "https://github.com/your-username/project", // Optional
  },
  // Add more projects following the same structure
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gray-700 rounded-lg opacity-75 blur"></div>
      <div className="relative bg-black p-6 rounded-lg">
        <div className="relative overflow-hidden rounded-lg">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-gray-300 p-3 rounded-full backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-gray-300 p-3 rounded-full backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      currentImageIndex === index
                        ? "bg-gray-300"
                        : "bg-gray-500"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-900 px-3 py-1 rounded-full text-sm font-medium text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-gray-900 rounded-lg flex items-center gap-2 text-gray-300"
              whileTap={{ scale: 0.95 }}
            >
              <span>Live Demo</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};

const WebProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
    >
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default WebProjects;
