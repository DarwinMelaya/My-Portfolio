import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [letterIndex, setLetterIndex] = useState(0);
  const word = "DARWIN";

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setLetterIndex((prev) => {
        if (prev < word.length - 1) {
          return prev + 1;
        }
        // Clear the interval when animation is complete
        clearInterval(animationInterval);
        // Navigate after the last letter
        setTimeout(() => {
          navigate("/main");
        }, 500);
        return prev;
      });
    }, 200);

    // Cleanup
    return () => {
      clearInterval(animationInterval);
    };
  }, [navigate, word.length]);

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
