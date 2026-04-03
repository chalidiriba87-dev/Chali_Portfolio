import React from "react";
import { Download, ExternalLink, FileText, CheckCircle } from "lucide-react";
import cvPreview from "../images/CHALI_CV.jpg";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        {/* Header */}
        <div className="resume-header">
          <h1>Professional Credentials</h1>
          <p>Full-Stack Developer • MERN Specialist</p>
          <div className="underline"></div>
        </div>

        <div className="resume-content">

          {/* LEFT: Preview */}
          <div className="resume-visual">
            <div className="document-frame">
              <img src={cvPreview} alt="Henok CV Preview" />

              <div className="overlay">
                <a href="/CHALI_CV.pdf" target="_blank" rel="noreferrer">
                  <ExternalLink size={26} />
                  <span>Preview Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="resume-actions">
            <div className="action-card">

              <div className="icon-box">
                <FileText size={36} />
              </div>

              <h3>Curriculum Vitae</h3>

              <p>
                Access my complete professional profile including technical expertise,
                system design experience, and real-world enterprise projects.
              </p>

              {/* Buttons */}
              <div className="button-stack">

                <a
                  href="/CHALI_CV.pdf"
                  download="Chalchisa_Diriba_CV.pdf"
                  className="btn primary"
                >
                  <Download size={18} /> Download PDF
                </a>

                <a
                  href="/CHALI_CVpdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary"
                >
                  <ExternalLink size={18} /> View Online
                </a>

              </div>

              {/* Status */}
              <div className="status-tag">
                <CheckCircle size={16} />
                <span>Updated March 2026</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}