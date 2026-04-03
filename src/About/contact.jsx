import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, ShieldCheck, Loader2 } from "lucide-react";
import "../styles/contact.css";

export default function Contact() {
  const form = useRef();
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsPending(true);
    setSuccess(false);

    const SERVICE_ID = "service_3t4hl2p";
    const TEMPLATE_ID = "template_bfinuab";
    const PUBLIC_KEY = "ok7ty8rEWwDtysryh";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>In aviation, every detail keeps us airborne.</p>
      </div>

      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="info-card">

            <div className="info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>chalidiriba87@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Phone size={20} /></div>
              <div>
                <h4>Phone</h4>
                <p>+251 918943716</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

          </div>

          <div className="security-badge">
            <ShieldCheck size={18} />
            <span>Secure Enterprise Communication</span>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="from_name" required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="from_email" required />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" required />
            </div>

            <button type="submit" className="submit-btn" disabled={isPending}>
              {isPending ? (
                <>
                  Sending <Loader2 className="spin" size={18} />
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {success && <p className="success-msg">✅ Message sent successfully!</p>}
          </form>
        </div>

      </div>
    </section>
  );
}