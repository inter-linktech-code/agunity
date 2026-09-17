import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import logo from "../assets/logo.png";
import "./Footer.css";

const machineryLinks = [
  {
    label: "Coffee Processing",
    path: "/machinery?category=Coffee%20Processing",
  },
  {
    label: "Maize Processing",
    path: "/machinery?category=Maize%20Processing",
  },
  {
    label: "Rice Processing",
    path: "/machinery?category=Rice%20Processing",
  },
  {
    label: "Cassava Processing",
    path: "/machinery?category=Cassava%20Processing",
  },
  {
    label: "Animal Feed",
    path: "/machinery?category=Animal%20Feed",
  },
];

const companyLinks = [
  {
    label: "About Agunity",
    path: "/about",
  },
  {
    label: "Why Agunity",
    path: "/why-agunity",
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "FAQ",
    path: "/faq",
  },
];

const contactLinks = [
  {
    icon: <FiPhone />,
    label: "+256 789 409761",
    href: "tel:+256789409761",
  },
  {
    icon: <FiMail />,
    label: "agunityinvestment@gmail.com",
    href: "mailto:agunityinvestment@gmail.com",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* --------------------------------
          FOOTER TOP
      -------------------------------- */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-main-grid">

            {/* BRAND */}
            <div className="footer-brand-column">
              <Link to="/" className="footer-brand">
                <span className="footer-brand-logo">
                  <img
                    src={logo}
                    alt="Agunity Investment Ltd logo"
                  />
                </span>

                <span className="footer-brand-copy">
                  <strong>AGUNITY</strong>
                  <small>INVESTMENT LTD</small>
                </span>
              </Link>

              <p className="footer-brand-description">
                Agricultural machinery fabrication and processing
                solutions for farmers, agro-processors and businesses
                across Uganda and East Africa.
              </p>

              <Link to="/request-a-quote" className="footer-quote-link">
                <span>Start a Project</span>
                <FiArrowUpRight />
              </Link>
            </div>

            {/* COMPANY */}
            <div className="footer-column">
              <div className="footer-column-heading">
                <span>01</span>
                <h3>Company</h3>
              </div>

              <nav className="footer-links">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="footer-link"
                  >
                    <FiChevronRight />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* MACHINERY */}
            <div className="footer-column footer-machinery-column">
              <div className="footer-column-heading">
                <span>02</span>
                <h3>Machinery</h3>
              </div>

              <nav className="footer-links">
                {machineryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="footer-link"
                  >
                    <FiChevronRight />
                    <span>{link.label}</span>
                  </Link>
                ))}

                <Link
                  to="/machinery"
                  className="footer-link footer-view-all"
                >
                  <span>View All Machinery</span>
                  <FiArrowUpRight />
                </Link>
              </nav>
            </div>

            {/* CONTACT */}
            <div className="footer-column footer-contact-column">
              <div className="footer-column-heading">
                <span>03</span>
                <h3>Contact</h3>
              </div>

              <div className="footer-contact-list">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="footer-contact-item"
                  >
                    <span className="footer-contact-icon">
                      {contact.icon}
                    </span>

                    <span>{contact.label}</span>
                  </a>
                ))}

                <div className="footer-contact-item footer-location">
                  <span className="footer-contact-icon">
                    <FiMapPin />
                  </span>

                  <span>
                    Gayaza Road,
                    <br />
                    Kampala, Uganda
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/256789409761"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp"
              >
                <span>WhatsApp Agunity</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------
          ENGINEERING STRIP
      -------------------------------- */}
      <div className="footer-engineering-strip">
        <div className="footer-container">
          <div className="footer-engineering-content">
            <div className="footer-engineering-label">
              <span className="footer-engineering-line" />
              <span>AGUNITY INVESTMENT LTD</span>
            </div>

            <p>
              Agricultural Machinery • Fabrication • Processing Solutions
            </p>

            <span className="footer-engineering-code">
              UGA / AGRI / ENG
            </span>
          </div>
        </div>
      </div>

      {/* --------------------------------
          FOOTER BOTTOM
      -------------------------------- */}
      <div className="footer-bottom-wrapper">
        <div className="footer-container">
          <div className="footer-bottom">

            <div className="footer-legal">
              <span>
                © {currentYear} Agunity Investment Ltd.
              </span>

              <span className="footer-divider">/</span>

              <span>
                All rights reserved.
              </span>
            </div>

            {/* INTER-LINK TECH SIGNATURE */}
            <a
              href="https://inter-linktech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-studio"
              aria-label="Website designed and developed by INTER-LINK TECH"
            >
              <span className="footer-studio-label">
                DIGITAL PARTNER
              </span>

              <span className="footer-studio-brand">
                <span className="footer-studio-mark">
                  I
                </span>

                <span>
                  INTER-LINK <strong>TECH</strong>
                </span>

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="footer-studio-arrow"
                >
                  <path d="M5 19L19 5" />
                  <path d="M8 5h11v11" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;