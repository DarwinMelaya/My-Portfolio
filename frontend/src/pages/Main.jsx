import ProfileSection from "../Layouts/ProfileSection";
import Navbar from "../Layouts/Navbar";

const Main = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ProfileSection />
      </div>
    </div>
  );
};

export default Main;
