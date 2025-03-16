import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [letterIndex, setLetterIndex] = useState(0);
  const word = "DARWIN";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (letterIndex < word.length) {
        setLetterIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          navigate("/main");
        }, 500); // Wait 500ms after animation before navigating
      }
    }, 200); // Show new letter every 200ms

    return () => clearTimeout(timer);
  }, [letterIndex, navigate]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="text-white text-6xl font-bold">
        {word.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-300 ${
              index <= letterIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
