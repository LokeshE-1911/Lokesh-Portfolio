import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 animate-bounce  right-5 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
