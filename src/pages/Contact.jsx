
import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span className="eyebrow">CONTACT AGUNITY</span>

        <h1>
          Let's talk
          <br />
          <span>machinery.</span>
        </h1>

        <p>
          Tell us what you process, what equipment you need and where your
          operation is located.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <span className="eyebrow">GET IN TOUCH</span>

          <h2>
            Start with
            <br />
            <span>the requirement.</span>
          </h2>

          <p>
            Whether you need a standard agricultural machine, a complete
            processing setup or a custom fabrication, send us your requirement
            and our team can discuss the next step.
          </p>

          <div className="contact-details">
            <div>
              <FiMapPin />
              <span>
                <strong>Location</strong>
                Gayaza Road, Kampala, Uganda
              </span>
            </div>

            <div>
              <FiPhone />
              <span>
                <strong>Phone</strong>
                Contact Agunity Investment Ltd
              </span>
            </div>

            <div>
              <FiMail />
              <span>
                <strong>Email</strong>
                Request our contact details
              </span>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send an enquiry</h3>

          <form>
            <div className="form-row">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                Company
                <input type="text" placeholder="Company name" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone
                <input type="tel" placeholder="Phone number" />
              </label>

              <label>
                Email
                <input type="email" placeholder="Email address" />
              </label>
            </div>

            <label>
              Machine / Requirement
              <input
                type="text"
                placeholder="e.g. maize mill, coffee huller..."
              />
            </label>

            <label>
              Message
              <textarea
                rows="6"
                placeholder="Tell us about your processing requirement..."
              />
            </label>

            <button type="submit">
              Send Enquiry
              <FiArrowUpRight />
            </button>
          </form>
        </div>
      </section>

      <section className="contact-quote">
        <span className="eyebrow">READY TO START?</span>

        <h2>
          Request a detailed
          <br />
          <span>machine quotation.</span>
        </h2>

        <Link to="/request-a-quote">
          Request a Quote
          <FiArrowUpRight />
        </Link>
      </section>
    </div>
  );
}

export default Contact;

