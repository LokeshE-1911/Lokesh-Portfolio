import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import Aboutme from "./Components/Aboutme/Aboutme";
import ContactMe from "./Components/ContactMe/ContactMe";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Links from "./Components/Links/Links";
import Projects from "./Components/Projects/Projects";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Chatbot from "./Components/Chatbot/Chatbot";
import Skills from "./Components/Skills/Skills";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-6DL557KQ80");
  }, []);
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white ">
      <Header />
      <Home />
      <Links />
      <Aboutme />
      <Chatbot />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
