import React, { useEffect } from "react";
import Nav from "./component/nav";
import Home from "./Home/home";
import Aboutchali from "./About/Aboutchali"; // Fixed naming here
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Resume from "./About/Resume";
import Contact from "./About/contact";
import "./styles/App.css";

function App() {
  // Smooth scroll logic
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for the fixed navbar
            behavior: "smooth",
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => link.addEventListener("click", handleAnchorClick));
    
    return () => {
      anchorLinks.forEach(link => link.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <main className="main-content">
        <Home />
        <Aboutchali />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      {/* Optional Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Chalchisa Diriba. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;