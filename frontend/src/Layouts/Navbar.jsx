import { useState } from "react";
import { FaCopy, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("melayadarwin@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      text: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      text: "Instagram",
      href: "https://www.instagram.com/dahr.wynne/",
    },
    {
      icon: <FaGithub className="text-xl" />,
      text: "Github",
      href: "https://github.com/DarwinMelaya",
    },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="group cursor-pointer" onClick={handleCopyEmail}>
          <div className="text-gray-300 text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="hidden sm:block">melayadarwin@gmail.com</span>
            <span className="block sm:hidden">Email</span>
            <FaCopy className="text-lg" />
          </div>
          <div
            className={`text-xs text-gray-400 transition-opacity duration-300 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            Copied to clipboard!
          </div>
        </div>

        <div className="flex gap-4 sm:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 px-4 py-2 hover:bg-gray-900 rounded-lg 
                transition-all duration-300 flex items-center gap-2 hover:scale-105
                hover:shadow-lg hover:shadow-gray-800"
            >
              {link.icon}
              <span className="hidden sm:block">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
