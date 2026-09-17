import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiGlobe,
  FiSettings,
  FiTarget,
  FiTool,
} from "react-icons/fi";

import machineryData from "../data/machineryData";

import "./About.css";

const getMachineById = (id) => {
  return machineryData.find((machine) => machine.id === id);
};

const getMachineImage = (machine) => {
  if (!machine) return "";

  if (machine.image) return machine.image;

  if (Array.isArray(machine.images) && machine.images.length > 0) {
    return machine.images[0];
  }

  if (machine.photo) return machine.photo;

  if (machine.imageUrl) return machine.imageUrl;

  return "";
};

function About() {
  const heroMachine = getMachineById("coffee-huller");
  const capabilityMachine = getMachineById("maize-huller-mill");

  const heroImage = getMachineImage(heroMachine);
  const capabilityImage = getMachineImage(capabilityMachine);

  const capabilities = [
    "Agricultural processing machinery fabrication",
    "Custom machine engineering and modification",
    "Machine installation and commissioning",
    "Material handling equipment",
    "Agro-processing systems",
    "Technical support and maintenance",
  ];

  const values = [
    {
      icon: FiTool,
      number: "01",
      title: "Engineering",
      text:
        "Practical machinery solutions designed around production requirements and operating conditions.",
    },
    {
      icon: FiTarget,
      number: "02",
      title: "Performance",
      text:
        "Equipment selected and fabricated with productivity, durability and maintainability in mind.",
    },
    {
      icon: FiCheckCircle,
      number: "03",
      title: "Value",
      text:
        "Cost-conscious machinery solutions for processors seeking to increase production without unnecessary complexity.",
    },
  ];

  return (
    <main className="about-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">
        {heroImage && (
          <div
            className="about-hero-image"
            style={{
              backgroundImage: `url("${heroImage}")`,
            }}
          />
        )}

        <div className="about-hero-overlay" />

        <div className="about-hero-grid" />

        <div className="about-hero-content">
          <div className="about-hero-eyebrow">
            <span />
            <span>ABOUT AGUNITY INVESTMENT LTD</span>
          </div>

          <h1>
            Built around
            <span>engineering.</span>
          </h1>

          <p>
            We fabricate agricultural processing machinery designed to help
            businesses transform raw agricultural products into productive,
            scalable processing operations.
          </p>

          <div className="about-hero-actions">
            <Link to="/machinery" className="about-primary-button">
              Explore Our Machinery
              <FiArrowUpRight />
            </Link>

            <Link to="/request-a-quote" className="about-secondary-button">
              Request a Quote
              <FiArrowRight />
            </Link>
          </div>
        </div>

        <div className="about-hero-machine">
          <span>FEATURED MACHINERY</span>
          <strong>
            {heroMachine?.name || "Agricultural Processing Machinery"}
          </strong>
        </div>

        <div className="about-hero-number">01</div>

        <div className="about-hero-bottom">
          <span>UGANDA</span>
          <div />
          <span>AGRICULTURAL ENGINEERING</span>
          <div />
          <span>EAST AFRICA</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="about-intro section">
        <div className="about-container">
          <div className="about-intro-label">
            <span>01</span>
            <div />
            WHO WE ARE
          </div>

          <div className="about-intro-content">
            <span className="about-kicker">
              AGRICULTURAL MACHINERY & FABRICATION
            </span>

            <h2>
              Agricultural machinery
              <span>fabricated in Uganda.</span>
            </h2>

            <div className="about-intro-text">
              <div>
                <p>
                  Agunity Investment Ltd is a Ugandan engineering and machinery
                  fabrication company serving agricultural processors, farmers,
                  institutions and businesses that need dependable processing
                  equipment.
                </p>

                <p>
                  Our work goes beyond supplying machines. We focus on
                  understanding the processing requirement, selecting or
                  fabricating the right equipment, and helping customers
                  establish practical processing capacity.
                </p>
              </div>

              <div className="about-intro-fact">
                <span>OUR APPROACH</span>

                <strong>
                  Practical engineering for
                  <br />
                  real production environments.
                </strong>

                <Link to="/machinery">
                  View Machinery
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="about-capabilities section">
        <div className="about-container capability-grid">
          <div className="capability-visual">
            {capabilityImage ? (
              <img
                src={capabilityImage}
                alt={`${capabilityMachine?.name || "Agricultural machinery"} fabricated by Agunity Investment Ltd in Uganda`}
                loading="lazy"
              />
            ) : (
              <div className="capability-placeholder">
                <FiSettings />
              </div>
            )}

            <div className="capability-visual-overlay" />

            <div className="capability-image-info">
              <span>AGUNITY INVESTMENT LTD</span>
              <strong>
                {capabilityMachine?.name || "Agricultural Machinery"}
              </strong>
            </div>

            <div className="capability-image-number">02</div>
          </div>

          <div className="capability-content">
            <span className="about-kicker">
              OUR CAPABILITY
            </span>

            <h2>
              From raw material
              <span>to processing.</span>
            </h2>

            <p className="capability-lead">
              Agricultural processing requires more than a machine catalogue.
              It requires engineering thinking, appropriate equipment,
              fabrication quality and an understanding of how machines work
              together.
            </p>

            <div className="capability-list">
              {capabilities.map((item, index) => (
                <div className="capability-item" key={item}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{item}</p>

                  <FiCheckCircle />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values section">
        <div className="about-container">
          <div className="values-heading">
            <div>
              <span className="about-kicker">
                WHAT GUIDES OUR WORK
              </span>

              <h2>
                Engineering with
                <span>purpose.</span>
              </h2>
            </div>

            <p>
              Our approach is centered on practical machinery, dependable
              engineering and solutions that create value for agricultural
              businesses.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div className="value-card" key={value.number}>
                  <div className="value-top">
                    <span>{value.number}</span>
                    <Icon />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          REGIONAL REACH
      ===================================================== */}

      <section className="about-reach section">
        <div className="about-container reach-grid">
          <div className="reach-content">
            <span className="about-kicker">
              OUR REACH
            </span>

            <h2>
              Ugandan engineering
              <span>for East Africa.</span>
            </h2>

            <p>
              We serve agricultural processors, farmers and businesses looking
              for practical machinery and fabrication solutions within Uganda
              and across the wider East African region.
            </p>

            <div className="reach-points">
              <div>
                <FiCheckCircle />
                <span>Uganda</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Kenya</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Rwanda</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Tanzania</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Burundi</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>DRC</span>
              </div>
            </div>
          </div>

          <div className="reach-visual">
            <div className="reach-card">
              <FiGlobe />

              <span>REGIONAL ENGINEERING</span>

              <strong>
                Built in Uganda.
                <br />
                Ready for Africa.
              </strong>

              <div className="reach-line" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta section">
        <div className="about-container">
          <div className="about-cta-inner">
            <div>
              <span className="about-kicker">
                LET'S BUILD CAPACITY
              </span>

              <h2>
                Tell us what you
                <span>need to process.</span>
              </h2>

              <p>
                Whether you need a standard agricultural machine or a
                fabrication solution around a specific processing requirement,
                let's discuss your operation.
              </p>
            </div>

            <Link to="/request-a-quote" className="about-cta-button">
              Discuss Your Requirement
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;