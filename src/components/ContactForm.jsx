import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-box">
        <p>Phone: <a href="tel:+919949600110" className="hidden-link">+91 9949600110</a></p>
        <p>WhatsApp: <a href="https://wa.me/919392740110" className="hidden-link">+91 9392740110</a></p>
        <p>
        Email: <a href="mailto:support@quantumsmarthub.com" className="hidden-link">support@quantumsmarthub.com</a>
        </p>
        <p>Location: WeWork, Nanakramguda Rd, Financial District, Hyderabad</p>
      </div>
    </section>
  );
};

export default ContactForm;
