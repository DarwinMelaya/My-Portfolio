import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [letterIndex, setLetterIndex] = useState(-1);
  const word = "DARWIN";

  useEffect(() => {
    let intervalId;
    let navigationTimeoutId;

    // Function to handle letter animation
    const animateNextLetter = () => {
      setLetterIndex((prevIndex) => {
        if (prevIndex >= word.length - 1) {
          clearInterval(intervalId);
          // Navigate after the last letter
          navigationTimeoutId = setTimeout(() => {
            navigate("/main");
          }, 1000);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    };

    // Start animation after initial delay
    const initialDelayId = setTimeout(() => {
      animateNextLetter();
      intervalId = setInterval(animateNextLetter, 200);
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(initialDelayId);
      clearInterval(intervalId);
      clearTimeout(navigationTimeoutId);
    };
  }, [navigate, word.length]);

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div
        className="text-white text-6xl font-bold relative"
        style={{
          textShadow:
            letterIndex === word.length - 1
              ? "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff"
              : "none",
        }}
      >
        {word.split("").map((letter, index) => (
          <span
            key={index}
            className={`
              inline-block transition-all duration-300
              ${
                index <= letterIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
              ${index <= letterIndex ? "animate-glow" : ""}
            `}
            style={{
              animationDelay: `${index * 0.2}s`,
              textShadow:
                index <= letterIndex
                  ? "0 0 10px rgba(255,255,255,0.7)"
                  : "none",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes glow {
            0% {
              text-shadow: 0 0 10px rgba(255,255,255,0.7);
            }
            50% {
              text-shadow: 0 0 20px rgba(255,255,255,0.9),
                          0 0 30px rgba(255,255,255,0.7),
                          0 0 40px rgba(255,255,255,0.5);
            }
            100% {
              text-shadow: 0 0 10px rgba(255,255,255,0.7);
            }
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
