import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import "../styles/nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <div className="logo-icon"><Terminal size={24} /></div>
          <span className="logo-text">Chalchisa</span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
          <li className="nav-cta">
            <a href="#contact" onClick={closeMenu}>Let's Talk</a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div 
          className="nav-mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

      </div>
    </nav>
  );
}