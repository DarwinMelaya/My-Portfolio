import { motion } from "framer-motion";

const ProfileSection = () => {
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
        <motion.a
          href="resume.pdf"
          download
          className="group px-6 py-3 bg-gray-900 rounded-lg
            hover:shadow-lg hover:shadow-gray-800/50 flex items-center gap-2 text-gray-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
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
        </motion.a>

        <motion.button
          className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300
            hover:bg-gray-900 transition-all duration-300 hover:scale-105
            hover:shadow-lg hover:shadow-gray-800/50 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
