import ProfileSection from "../Layouts/ProfileSection";
import Navbar from "../Layouts/Navbar";
import Technologies from "../Layouts/Technologies";
import Projects from "../Layouts/Projects";
import CtaSection from "../Layouts/CtaSection";

const Main = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 flex flex-col gap-32">
        <ProfileSection />
        <Technologies />
        <Projects />
        <CtaSection />
      </main>
    </div>
  );
};

export default Main;
