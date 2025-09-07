import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [hidden, sethidden] = useState("");

  const btnClicked = () => {
    if (hidden === "") {
      sethidden("hidden");
    } else {
      sethidden("");
    }
  };

  const a = "w-full flex-grow lg:flex items-center lg:w-auto" + hidden;

  return (
    <div className="py-4 px-2 lg:mx-4 xl:mx-12 font-display">
      <div>
        <nav className="flex items-center justify-between flex-wrap">
          <div className="block lg:hidden">
            <button
              onClick={btnClicked}
              className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-6 w-6 text-gray-700"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {hidden ? (
            <></>
          ) : (
            <div id="main-nav" className={a}>
              <div className="text-xl lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="block lg:inline-block cursor-pointer text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  offset={-150}
                  smooth={true}
                  duration={500}
                  className="block lg:inline-block cursor-pointer text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  About
                </Link>
                <a
                  className="block lg:inline-block cursor-pointer text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                  href="Abhiram_Resume.pdf"
                  download="Abhiram_Resume.pdf"
                >
                  <p className="btn highlighted-btn"> Get Resume</p>
                </a>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="block lg:inline-block cursor-pointer text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Experience
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="block lg:inline-block cursor-pointer text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Projects
                </Link>
                <Link
                  to="contact-me"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="block lg:inline-block cursor-pointer text-md font-bold sm:hover:border-indigo-400 hover:text-orange-300 mx-2 focus:text-blue-300 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  Contact-Me
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
