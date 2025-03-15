import { motion } from "framer-motion";

const DigitalDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
    >
      {/* Add your digital design projects here */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Design 1</h3>
        <p>Digital design project description goes here</p>
      </div>
      {/* Add more design cards as needed */}
    </motion.div>
  );
};

export default DigitalDesign;
