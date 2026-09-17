import React from "react";

import { Link } from "react-router-dom";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
  FiMessageCircle,
} from "react-icons/fi";

import "./Contact.css";

import contactImage from "../assets/contact.jpg";

function Contact() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
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

          <div className="contact-hero-meta">
            <span>AGUNITY INVESTMENT LTD</span>
            <span>AGRICULTURAL MACHINERY</span>
            <span>UGANDA</span>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
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
            {/* LOCATION */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <span>
                <strong>Location</strong>
                Gayaza Road, Kampala, Uganda
              </span>
            </div>

            {/* PHONE */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <span>
                <strong>Phone</strong>

                <a href="tel:+256789409761">
                  +256 789 409761
                </a>
              </span>
            </div>

            {/* EMAIL */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FiMail />
              </div>

              <span>
                <strong>Email</strong>

                <a href="mailto:agunityinvestment@gmail.com">
                  agunityinvestment@gmail.com
                </a>
              </span>
            </div>

            {/* WHATSAPP */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FiMessageCircle />
              </div>

              <span>
                <strong>WhatsApp</strong>

                <a
                  href="https://wa.me/256789409761"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Agunity Investment
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-card">
          <div className="form-heading">
            <span className="eyebrow">SEND AN ENQUIRY</span>

            <h3>
              Tell us what
              <br />
              <span>you need.</span>
            </h3>

            <p>
              Give us a few details about your machinery or processing
              requirement and our team can get back to you.
            </p>
          </div>

          <form>
            <div className="form-row">
              <label>
                Name

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
              </label>

              <label>
                Company

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Phone

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
              </label>
            </div>

            <label>
              Machine / Requirement

              <input
                type="text"
                name="machine"
                placeholder="e.g. maize mill, coffee huller..."
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
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

      {/* DIRECT CONTACT STRIP */}
      <section className="contact-direct">
        <div>
          <span className="eyebrow">DIRECT CONTACT</span>

          <h2>
            Prefer to talk
            <br />
            <span>directly?</span>
          </h2>
        </div>

        <div className="direct-actions">
          <a href="tel:+256789409761" className="direct-link">
            <FiPhone />
            <span>
              <small>Call us</small>
              +256 789 409761
            </span>
            <FiArrowUpRight />
          </a>

          <a
            href="https://wa.me/256789409761"
            target="_blank"
            rel="noopener noreferrer"
            className="direct-link"
          >
            <FiMessageCircle />
            <span>
              <small>WhatsApp</small>
              +256 789 409761
            </span>
            <FiArrowUpRight />
          </a>

          <a
            href="mailto:agunityinvestment@gmail.com"
            className="direct-link"
          >
            <FiMail />
            <span>
              <small>Email us</small>
              agunityinvestment@gmail.com
            </span>
            <FiArrowUpRight />
          </a>
        </div>
      </section>

      {/* QUOTE CTA */}
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