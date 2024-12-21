import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Add styles for the button

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button className="scroll-to-top " onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}
export default ScrollToTopButton;
