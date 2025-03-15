import { motion } from "framer-motion";

const WebProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
    >
      {/* Add your web projects here */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Project 1</h3>
        <p>Web project description goes here</p>
      </div>
      {/* Add more project cards as needed */}
    </motion.div>
  );
};

export default WebProjects;
