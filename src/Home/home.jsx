import React from "react";
import { ArrowRight } from "lucide-react";
import Nav from "../component/nav";
import profilePic from "../images/prof_pic.jpg";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Nav />

      <section className="home" id="home">
        <div className="home-container">

          {/* LEFT CONTENT */}
          <div className="home-content">
            <span className="welcome-badge">✈️ Flight Operations Safety Office</span>

            <h1>
              Hi, I'm <span className="highlight">Chalchisa</span>
            </h1>

            <h2>Flight Data Analyst</h2>

            <p>
              I specialize in <strong>Flight Data Monitoring (FDM)</strong> and safety analysis. 
              Currently ensuring operational excellence and safety compliance at{" "}
              <strong>Ethiopian Airlines</strong>.
            </p>

            <div className="home-btns">
              <a href="#about" className="btn primary">
                Experience <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>

            {/* Stats - Updated for your experience */}
            <div className="home-stats">
              <div>
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>Safety Focus</p>
              </div>
              <div>
                <h3>FDM</h3>
                <p>Expertise</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="home-image-section">
            <div className="image-blob">
              <img src={profilePic} alt="Chalchisa Diriba" />
            </div>

            {/* Floating Aviation Badges */}
            <div className="tech-badge badge-1">IATA Certified</div>
            <div className="tech-badge badge-2">ICAO FDM</div>
            <div className="tech-badge badge-3">Safety Analysis</div>
            <div className="tech-badge badge-4">GHS Training</div>
          </div>

        </div>
      </section>
    </>
  );
}