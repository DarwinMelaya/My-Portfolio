import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "../Modals/ImageModal";

const designsData = [
  {
    id: 1,
    title: "Certificates",
    description: "Aptitong Fiesta Legaue Certificate of Completion",
    images: [
      "/digitaldesign/certificates/1.png",
      "/digitaldesign/certificates/2.png",
      "/digitaldesign/certificates/3.png",
      "/digitaldesign/certificates/4.png",
    ], // Replace with your actual image paths
    tools: ["Canva"],
  },
  {
    id: 2,
    title: "Photo Editing",
    description: "Aptitong Fiesta Legaue Photo Editing",
    images: [
      "/digitaldesign/photoediting/1.png",
      "/digitaldesign/photoediting/2.png",
      "/digitaldesign/photoediting/3.png",
      "/digitaldesign/photoediting/4.png",
      "/digitaldesign/photoediting/5.png",
      "/digitaldesign/photoediting/6.png",
    ],
    tools: ["Canva"],
  },
  {
    id: 3,
    title: "Paraluman",
    description: "Paraluman by Adine cover photo",
    images: ["paraluman.jpg"],
    tools: ["Ibis Paint X"],
  },
  {
    id: 4,
    title: "Digital Art",
    description: "Digital using Ibis Paint X",
    images: [
      "digitalart/1.jpg",
      "digitalart/2.jpg",
      "digitalart/3.jpg",
      "digitalart/4.jpg",
      "digitalart/5.jpg",
      "digitalart/6.jpg",
      "digitalart/7.jpg",
      "digitalart/8.jpg",
      "digitalart/9.jpg",
      "digitalart/10.jpg",
      "digitalart/11.jpg",
      "digitalart/12.jpg",
      "digitalart/13.jpg",
      "digitalart/14.jpg",
    ],
    tools: ["Ibis Paint X"],
  },
  // Add more design items as needed
];

const DesignCard = ({ design }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === design.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? design.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-[600px] group">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg opacity-75 blur transition-opacity duration-300 group-hover:opacity-90"></div>
      <div className="relative bg-black p-8 rounded-lg h-full flex flex-col">
        <div className="relative overflow-hidden rounded-xl h-72 flex-shrink-0 ring-1 ring-gray-700">
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={design.images[currentImageIndex]}
            alt={`${design.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-72 object-cover rounded-xl cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          />
          {design.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {design.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-white scale-125"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col h-full mt-6">
          <h3 className="text-2xl font-bold text-white tracking-tight line-clamp-1">
            {design.title}
          </h3>
          <div className="flex-grow overflow-y-auto mt-2">
            <p className={`text-gray-300 mb-4 leading-relaxed`}>
              {isExpanded
                ? design.description
                : `${design.description.slice(0, 150)}... `}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-white text-sm font-medium inline transition-colors duration-300"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {design.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-900/50 px-4 py-1.5 rounded-full text-sm font-medium text-gray-200 border border-gray-700/50 backdrop-blur-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={design.images}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
};

const DigitalDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
    >
      {designsData.map((design) => (
        <DesignCard key={design.id} design={design} />
      ))}
    </motion.div>
  );
};

export default DigitalDesign;
