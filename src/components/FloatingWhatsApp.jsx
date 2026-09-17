import React from "react";
import { FiArrowUpRight, FiMessageCircle, FiX } from "react-icons/fi";
import { useState } from "react";
import "./FloatingWhatsApp.css";

function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "256789409761";

  const message =
    "Hello Agunity Investment Ltd, I would like to enquire about your agricultural machinery and processing equipment.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className={`floating-whatsapp ${isOpen ? "is-open" : ""}`}>
      {/* MESSAGE PANEL */}
      <div className="floating-whatsapp-panel">
        <div className="floating-whatsapp-panel-top">
          <div className="floating-whatsapp-panel-icon">
            <FiMessageCircle />
          </div>

          <button
            type="button"
            className="floating-whatsapp-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close WhatsApp message"
          >
            <FiX />
          </button>
        </div>

        <div className="floating-whatsapp-panel-content">
          <span className="floating-whatsapp-eyebrow">
            AGUNITY INVESTMENT LTD
          </span>

          <h3>Need a machine?</h3>

          <p>
            Tell us what you are processing and the equipment you are
            looking for. Our team can help you discuss the right
            machinery for your operation.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-panel-button"
          >
            <span>Chat on WhatsApp</span>
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <button
        type="button"
        className="floating-whatsapp-button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={
          isOpen
            ? "Close WhatsApp contact"
            : "Contact Agunity Investment Ltd on WhatsApp"
        }
      >
        <span className="floating-whatsapp-button-ring" />

        <span className="floating-whatsapp-button-icon">
          {isOpen ? <FiX /> : <FiMessageCircle />}
        </span>

        <span className="floating-whatsapp-button-text">
          <small>CHAT WITH US</small>
          <strong>WhatsApp</strong>
        </span>
      </button>
    </div>
  );
}

export default FloatingWhatsApp;