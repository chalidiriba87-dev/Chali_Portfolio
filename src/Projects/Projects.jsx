import React from "react";
import { Layers, Shield, Zap, CheckCircle, Database } from "lucide-react";
import "../styles/Projects.css";

export default function Projects() {
  const projectData = [
    {
      title: "Flight Data Monitoring (FDM)",
      challenge: "Processing massive volumes of raw flight data to detect exceedances and safety trends.",
      solution: "Implemented rigorous data analysis protocols using specialized FDM software to identify operational deviations.",
      result: "Reduced high-risk safety events by providing actionable insights to the Safety Committee.",
      tags: ["FDM Analysis", "Safety Trends", "ICAO Standards"],
    },
    {
      title: "Safety Event Investigation",
      challenge: "Identifying the root causes of operational safety findings and incidents.",
      solution: "Conducted deep-dive analysis of bulk flight data in synchronization with safety reporting systems.",
      result: "Supported the development of data-driven corrective actions and risk mitigation strategies.",
      tags: ["Root Cause", "Risk Awareness", "Safety Findings"],
    },
    {
      title: "Operational Trend Analytics",
      challenge: "Monitoring long-term operational deviations across the entire fleet.",
      solution: "Developed comprehensive safety reporting dashboards to visualize fleet-wide performance.",
      result: "Improved leadership visibility into fleet safety health and operational risk profiles.",
      tags: ["Data Visualization", "Fleet Monitoring", "Decision Support"],
    },
    {
      title: "Compliance & Safety Audits",
      challenge: "Ensuring all flight operations meet ICAO and IATA international safety standards.",
      solution: "Automated data verification processes for safety audits and continuous improvement monitoring.",
      result: "Achieved consistent enterprise-grade compliance and streamlined audit workflows.",
      tags: ["IATA Compliance", "Quality Assurance", "Audit Support"],
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <h1>Safety & Analytics Impact</h1>
          <p>Key contributions to operational safety and data-driven decision making at Ethiopian Airlines.</p>
          <div className="underline"></div>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>

              {/* Top */}
              <div className="card-top">
                <div className="project-icon-box">
                  <Database size={18} />
                </div>
                <h2>{project.title}</h2>
              </div>

              {/* Body */}
              <div className="project-body">

                <div className="project-info-item">
                  <h4><Shield size={14} /> Challenge</h4>
                  <p>{project.challenge}</p>
                </div>

                <div className="project-info-item">
                  <h4><Zap size={14} /> Solution</h4>
                  <p>{project.solution}</p>
                </div>

                <div className="project-info-item result">
                  <h4><CheckCircle size={14} /> Result</h4>
                  <p>{project.result}</p>
                </div>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}