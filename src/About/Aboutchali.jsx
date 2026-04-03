import React from "react";
import { User, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";
import "../styles/About.css";

export default function Aboutchali() {
  const experiences = [
    "Analyze bulk flight data & safety events",
    "Monitor operational trends & deviations",
    "Follow-up on safety findings & corrective actions",
    "Support data-driven safety reporting"
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Header */}
        <div className="about-header">
          <h1>Professional Profile</h1>
          <div className="underline"></div>
        </div>

        <div className="about-grid">
          
          {/* Left: Bio & Education */}
          <div className="about-left">
            <div className="bio-card">
              <div className="card-icon"><User size={24} /></div>
              <h2>About Me</h2>
              <p>
                I am a <strong>Flight Data Analyst</strong> at <strong>Ethiopian Airlines</strong>, 
                working within the Flight Operations Safety Office. I specialize in transforming 
                large-scale aviation data into actionable safety insights.
              </p>
              <p>
                My career is built at the intersection of <strong>Information Technology</strong> and 
                <strong> Aviation Safety</strong>, with a long-term vision of progressing toward 
                becoming a professional pilot.
              </p>
            </div>

            <div className="education-card">
              <div className="card-icon"><GraduationCap size={24} /></div>
              <h3>Education</h3>
              <div className="edu-item">
                <h4>BSc in Information Technology</h4>
                <p>University of Gondar</p>
              </div>
            </div>
          </div>

          {/* Right: Experience & Certs */}
          <div className="about-right">
            
            {/* Experience Box */}
            <div className="experience-main">
              <div className="exp-header">
                <Briefcase size={24} className="blue-icon" />
                <div>
                  <h3>Flight Data Analyst</h3>
                  <span>Ethiopian Airlines • 2+ Years</span>
                </div>
              </div>
              
              <ul className="exp-list">
                {experiences.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Grid */}
            <div className="certs-section">
              <h3><Award size={22} /> Certifications</h3>
              <div className="certs-grid">
                <div className="cert-tag">IATA: Aviation Operational Safety</div>
                <div className="cert-tag">ICAO: Flight Data Monitoring</div>
                <div className="cert-tag">GHS: Flight Data Analysis</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}