import ProfileSection from "../Layouts/ProfileSection";
import Navbar from "../Layouts/Navbar";
import Technologies from "../Layouts/Technologies";
import Projects from "../Layouts/Projects";
import CtaSection from "../Layouts/CtaSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="text-white text-6xl font-bold">DARWIN</div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 flex flex-col gap-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProfileSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Technologies />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CtaSection />
        </motion.div>
      </main>
    </div>
  );
};

export default Main;
