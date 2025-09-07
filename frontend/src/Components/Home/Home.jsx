import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import Abhiram from "../../assets/Images/Abhiram.png";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Front-End Developer",
      "Back-end Developer",
      "React Developer",
      "Full-Stack Developer",
      "Python Developer",
      "Problem Solver",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="mx-3" id="home">
      <div className="relative font-display flex flex-col justify-center items-center text-center text-white ">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
            Hello, I'm Abhiram
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4">
            🔥 🚀 {text} <Cursor cursorStyle="|" />
            🚀🔥
          </h1>
        </div>
        <div className="relative justify-center items-center content-center justify-self-center justify-items-center self-center place-items-center">
          <img
            src={Abhiram}
            alt="Abhiram Paidimarri"
            className="h-96 lg:h-96 md:h-64 sm:h-48 w-auto rounded-sm object-cover transform scale-105 items-center content-center justify-self-center self-center justify-items-center place-items-center"
          />
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Home;
