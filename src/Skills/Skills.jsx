import React from "react";
// Add 'Globe' to this list
import { 
  BarChart3, ShieldAlert, Plane, Database, Search, FileText, ClipboardCheck, LayoutDashboard, Zap, Globe 
} from "lucide-react";
import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    {
      category: "Flight Data Analysis",
      icon: <BarChart3 size={32} />,
      tags: [
        { name: "FDM/FOQA", icon: <Plane size={14} /> },
        { name: "Exceedance Detection", icon: <ShieldAlert size={14} /> },
        { name: "Trend Monitoring", icon: <Search size={14} /> }
      ]
    },
    {
      category: "Safety Management",
      icon: <ClipboardCheck size={32} />,
      tags: [
        { name: "SMS Protocols", icon: <FileText size={14} /> },
        { name: "Risk Assessment", icon: <ShieldAlert size={14} /> },
        { name: "Audit Support", icon: <ClipboardCheck size={14} /> }
      ]
    },
    {
      category: "Tools & Systems",
      icon: <Database size={32} />,
      tags: [
        { name: "FDM Software", icon: <Zap size={14} /> },
        { name: "Safety Reporting", icon: <LayoutDashboard size={14} /> },
        { name: "Excel/SQL", icon: <Database size={14} /> }
      ]
    },
    {
      category: "Compliance",
      icon: <ShieldAlert size={32} />,
      tags: [
        { name: "ICAO Standards", icon: <Globe size={14} /> },
        { name: "IATA AOS", icon: <ClipboardCheck size={14} /> },
        { name: "GHS Protocols", icon: <FileText size={14} /> }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Header */}
        <div className="skills-header">
          <h1>Technical Expertise</h1>
          <div className="underline"></div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-box" key={idx}>
              <div className="icon-wrapper">{skill.icon}</div>
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i}>
                    {tag.icon} {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Card - Aviation Focus */}
        <div className="philosophy-card">
          <div className="philosophy-content">
            <div className="phi-header">
              <Plane className="phi-icon" size={32} />
              <h2>Safety-First Philosophy</h2>
            </div>
            <p>
              I specialize in <strong>operational safety excellence</strong> by leveraging bulk 
              flight data to identify risks before they become incidents. By adhering to 
              <strong> ICAO and IATA standards</strong>, I ensure that data-driven insights lead to 
              measurable improvements in aviation safety and operational reliability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}