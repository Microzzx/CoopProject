import React, { useState, useEffect } from 'react';
import "../css/footer.css";
import icon from "../image/back-to-top.png";
function Footer() {
  const [showElement, setShowElement] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      { showElement && (
        <button type="button" className="btn" id="btn-back-to-top" onClick={backToTop}>
        <img
          src={icon}
          className="rounded-circle"
          id="icon"
          height="60px"
          width="60px"
          alt="avatar"
        />
      </button>
      )}
      
      <footer className="bg-dark text-center text-white">
        <div className="text-center p-3">
          © 2023 Copyright : MDBootstrap.com
        </div>
      </footer>
    </div>
  );
}

export default Footer;
