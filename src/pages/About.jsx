import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiTool, FiTarget } from "react-icons/fi";

import "./About.css";

function About() {
  const capabilities = [
    "Agricultural processing machinery fabrication",
    "Custom machine engineering and modification",
    "Machine installation and commissioning",
    "Material handling equipment",
    "Agro-processing systems",
    "Technical support and maintenance",
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="eyebrow">ABOUT AGUNITY INVESTMENT LTD</span>

          <h1>
            Built around
            <br />
            <span>engineering.</span>
          </h1>

          <p>
            We fabricate agricultural processing machinery designed to help
            businesses transform raw agricultural products into productive,
            scalable processing operations.
          </p>
        </div>

        <div className="about-hero-number">01</div>
      </section>

      <section className="about-intro">
        <div className="about-intro-label">
          <span>01</span>
          WHO WE ARE
        </div>

        <div className="about-intro-content">
          <h2>
            Agricultural machinery
            <br />
            <span>fabricated in Uganda.</span>
          </h2>

          <p>
            Agunity Investment Ltd is a Ugandan engineering and machinery
            fabrication company serving agricultural processors, farmers,
            institutions and businesses that need dependable processing
            equipment.
          </p>

          <p>
            Our work goes beyond supplying machines. We focus on understanding
            the processing requirement, selecting or fabricating the right
            equipment, and helping customers establish practical processing
            capacity.
          </p>
        </div>
      </section>

      <section className="about-capabilities">
        <div>
          <span className="eyebrow">OUR CAPABILITY</span>

          <h2>
            From raw material
            <br />
            <span>to processing.</span>
          </h2>

          <p>
            Agricultural processing requires more than a machine catalogue.
            It requires engineering thinking, appropriate equipment,
            fabrication quality and an understanding of how machines work
            together.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((item, index) => (
            <div className="capability-item" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
              <FiCheckCircle />
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="value-card">
          <FiTool />
          <h3>Engineering</h3>
          <p>
            Practical machinery solutions designed around production
            requirements and operating conditions.
          </p>
        </div>

        <div className="value-card">
          <FiTarget />
          <h3>Performance</h3>
          <p>
            Equipment selected and fabricated with productivity, durability
            and maintainability in mind.
          </p>
        </div>

        <div className="value-card">
          <FiCheckCircle />
          <h3>Value</h3>
          <p>
            Cost-conscious machinery solutions for processors seeking to
            increase production without unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span className="eyebrow">LET'S BUILD CAPACITY</span>
          <h2>
            Tell us what you
            <br />
            <span>need to process.</span>
          </h2>
        </div>

        <Link to="/request-a-quote">
          Discuss Your Requirement
          <FiArrowRight />
        </Link>
      </section>
    </div>
  );
}

export default About;

