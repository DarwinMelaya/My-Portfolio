import { motion } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "DOST SETUP Refund Monitoring System",
    description:
      "A refund monitoring tracker for DOST customers to track balances, with admin analytics, notifications, chat, payment records, customer profiles, and mobile responsiveness.",
    images: [
      "/setup/1.png",
      "/setup/2.png",
      "/setup/3.png",
      "/setup/4.png",
      "/setup/5.png",
      "/setup/6.png",
    ], // Array of image paths
    technologies: [
      "React",
      "Figma",
      "Supabase",
      "Tailwind CSS",
      "Npm",
      "REST API",
      "Render",
      "Node Mailer",
    ],
    liveLink: "https://setup-tbeg.onrender.com/",
  },
  {
    id: 2,
    title: "OJTracker",
    description:
      "It was created to make it easier to monitor the hours completed during OJT, and it also records the accomplishment report so that with just one click, a PDF file is generated.",
    images: [
      "/ojtracker/1.png",
      "/ojtracker/2.png",
      "/ojtracker/3.png",
      "/ojtracker/4.png",
      "/ojtracker/5.png",
    ], // Array of image paths
    technologies: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    liveLink: "https://ojt-tracker-system.vercel.app/",
  },
  {
    id: 3,
    title: "BINI CLONE🌸",
    description:
      "A recreation of the BINI website, featuring a modern and responsive design. This project showcases the group's latest updates, music, and events, providing fans with an engaging and interactive experience.",
    images: [
      "/bini/1.png",
      "/bini/2.png",
      "/bini/3.png",
      "/bini/4.png",
      "/bini/5.png",
      "/bini/6.png",
      "/bini/7.png",
      "/bini/8.png",
    ], // Array of image paths
    technologies: ["React", "Node.js", "Tailwind CSS"],
    liveLink: "https://bini-xi.vercel.app/",
  },
  {
    id: 4,
    title: "MobiFlix",
    description:
      "This project is a collection of movies where I used an API to display the latest movies.",
    images: [
      "/mobiflix/1.png",
      "/mobiflix/2.png",
      "/mobiflix/3.png",
      "/mobiflix/4.png",
    ], // Array of image paths
    technologies: ["React", "Node.js", "Tailwind CSS"],
    liveLink: "https://your-project-url.com",
  },
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="relative h-[600px]">
      <div className="absolute -inset-0.5 bg-gray-700 rounded-lg opacity-75 blur"></div>
      <div className="relative bg-black p-6 rounded-lg h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg h-56 flex-shrink-0">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-56 object-cover rounded-lg"
          />
          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
              whileTap={{ scale: 0.95 }}
              title="View Live Demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          )}
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

        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold my-3 text-gray-300 line-clamp-1">
            {project.title}
          </h3>
          <div className="flex-grow overflow-y-auto">
            <p className={`text-gray-400 mb-4`}>
              {isExpanded
                ? project.description
                : `${project.description.slice(0, 150)}... `}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium inline"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </p>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-900 px-3 py-1 rounded-full text-sm font-medium text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
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
