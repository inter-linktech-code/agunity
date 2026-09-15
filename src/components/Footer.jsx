import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link to="/" className="footer-brand">
            <span className="footer-logo">AI</span>

            <span>
              <strong>AGUNITY</strong>
              <small>INVESTMENT LTD</small>
            </span>
          </Link>

          <p>
            Agricultural machinery fabrication and agro-processing equipment
            engineered for productive businesses across Uganda and East Africa.
          </p>

          <Link to="/request-a-quote" className="footer-cta">
            Start a Project
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/about">About Us</Link>
          <Link to="/machinery">Machinery</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/why-agunity">Why Agunity</Link>
        </div>

        <div className="footer-column">
          <h4>Machinery</h4>

          <Link to="/machinery">Coffee Processing</Link>
          <Link to="/machinery">Maize Processing</Link>
          <Link to="/machinery">Rice Processing</Link>
          <Link to="/machinery">Cassava Processing</Link>
          <Link to="/machinery">Animal Feed</Link>
          <Link to="/machinery">Material Handling</Link>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact</h4>

          <div>
            <FiMapPin />
            <span>Gayaza Road, Kampala, Uganda</span>
          </div>

          <div>
            <FiPhone />
            <span>Contact Agunity Investment Ltd</span>
          </div>

          <div>
            <FiMail />
            <span>Request our contact details</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Agunity Investment Ltd. All rights
          reserved.
        </span>

        <span>ENGINEERING • FABRICATION • AGRO-PROCESSING</span>
      </div>
    </footer>
  );
}

export default Footer;
