import { motion } from "framer-motion";
import { useState } from "react";

const ProfileSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const link = document.createElement("a");
      link.href = "resume.pdf";
      link.download = "resume.pdf";
      link.click();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Profile Image with animated border */}
      <motion.div
        className="relative group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
      >
        <div className="absolute -inset-0.5 bg-gray-700 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
        <motion.img
          src="profile.jpg"
          alt="Profile"
          className="relative w-40 h-40 rounded-full object-cover border-2 border-gray-700 transition-transform duration-300 group-hover:scale-105"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
        <span className="absolute bottom-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
        </span>
      </motion.div>

      <motion.h1
        className="mt-6 text-4xl font-bold text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Darwin Melaya
      </motion.h1>

      <motion.div
        className="max-w-2xl text-center mt-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-mono font-bold leading-tight">
          <span className="block text-gray-300">4th-year student at</span>
          <span className="block mt-2 text-gray-300">
            Marinduque State University
          </span>
        </h2>
        <p className="text-xl text-gray-400 mt-4">
          Passionate frontend developer crafting beautiful digital experiences
        </p>
      </motion.div>

      <motion.div
        className="mt-12 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.button
          onClick={handleDownload}
          className="group px-6 py-3 bg-gray-900 rounded-lg
            hover:shadow-lg hover:shadow-gray-800/50 flex items-center gap-2 text-gray-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Downloading...
            </>
          ) : (
            <>
              <span>Resume</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
