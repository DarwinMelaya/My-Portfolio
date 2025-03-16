import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Handshake Icon */}
      <motion.div
        className="bg-gray-900 p-8 rounded-full mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
      >
        <svg
          className="w-16 h-16 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 16l-4 4m4-4l-4-4m4 4H8m12-4a8 8 0 10-16 0"
          />
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Tell me about your next project
      </motion.h2>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a
          href="mailto:melayadarwin@gmail.com"
          className="px-8 py-4 bg-gray-900 rounded-lg text-gray-300
            hover:shadow-lg hover:shadow-gray-800/50 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email Me
        </motion.a>

        <motion.a
          href="https://m.me/darwin.melaya.9"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-gray-700 rounded-lg text-gray-300
            hover:bg-gray-900 transition-all duration-300
            hover:shadow-lg hover:shadow-gray-800/50 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7-4a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Messenger
        </motion.a>
      </motion.div>
    </div>
  );
};

export default CtaSection;
