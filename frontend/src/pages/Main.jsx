import { useEffect, useState } from "react";
import ProfileSection from "../Layouts/ProfileSection";
import Navbar from "../Layouts/Navbar";
import Technologies from "../Layouts/Technologies";
import Projects from "../Layouts/Projects";
import CtaSection from "../Layouts/CtaSection";
import { motion } from "framer-motion";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="text-white text-6xl font-bold animate-glow">DARWIN</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen relative"
    >
      <Navbar />
      <main className="container mx-auto px-4 pt-24 flex flex-col gap-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Technologies />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CtaSection />
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Main;
