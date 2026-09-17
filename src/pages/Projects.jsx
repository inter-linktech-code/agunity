import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiSettings,
  FiTool,
  FiLayers,
  FiTruck,
} from "react-icons/fi";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Agricultural Processing Systems",
    category: "AGRO-PROCESSING",
    text:
      "Machinery fabrication and supply for agricultural processors seeking practical production equipment for crop processing and value addition.",
    icon: <FiSettings />,
    applications: [
      "Crop processing",
      "Grain handling",
      "Value addition",
    ],
  },
  {
    number: "02",
    title: "Custom Machine Fabrication",
    category: "ENGINEERING",
    text:
      "Equipment developed or modified around specific processing requirements, production targets and operating conditions.",
    icon: <FiTool />,
    applications: [
      "Custom equipment",
      "Machine modification",
      "Production requirements",
    ],
  },
  {
    number: "03",
    title: "Material Handling Systems",
    category: "FABRICATION",
    text:
      "Conveying and lifting equipment supporting efficient movement of agricultural materials between different processing stages.",
    icon: <FiTruck />,
    applications: [
      "Bucket elevators",
      "Screw conveyors",
      "Material movement",
    ],
  },
  {
    number: "04",
    title: "Processing Line Development",
    category: "SYSTEMS",
    text:
      "Integrated machinery solutions designed to connect multiple stages of agricultural processing into practical production systems.",
    icon: <FiLayers />,
    applications: [
      "Processing lines",
      "Equipment integration",
      "Production systems",
    ],
  },
];

function Projects() {
  return (
    <main className="projects-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-grid"></div>

        <div className="projects-hero-inner">

          <div className="projects-hero-content">

            <div className="projects-eyebrow">
              <span></span>
              PROJECTS &amp; FABRICATION
            </div>

            <h1>
              Machines are
              <span>only part of it.</span>
            </h1>

            <p>
              Our work is about creating practical processing capacity
              through machinery fabrication, engineering and integrated
              agricultural processing solutions.
            </p>

            <div className="projects-hero-actions">

              <Link
                to="/machinery"
                className="projects-primary-button"
              >
                Explore Machinery
                <FiArrowUpRight />
              </Link>

              <Link
                to="/request-a-quote"
                className="projects-outline-button"
              >
                Start a Project
                <FiArrowRight />
              </Link>

            </div>

          </div>

          <div className="projects-hero-visual">

            <div className="projects-hero-technical">
              <div className="technical-circle technical-circle-one"></div>
              <div className="technical-circle technical-circle-two"></div>

              <div className="technical-cross technical-cross-one">
                +
              </div>

              <div className="technical-cross technical-cross-two">
                +
              </div>

              <FiSettings className="projects-hero-icon" />

              <div className="technical-label technical-label-top">
                AGUNITY
              </div>

              <div className="technical-label technical-label-bottom">
                FABRICATION / ENGINEERING
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="projects-introduction">

        <div className="projects-container">

          <div className="projects-introduction-grid">

            <div className="projects-section-marker">
              <span>01</span>
              <div></div>
              <small>OUR WORK</small>
            </div>

            <div className="projects-introduction-content">

              <div className="projects-kicker">
                ENGINEERING WITH A PURPOSE
              </div>

              <h2>
                Built around the
                <span>production requirement.</span>
              </h2>

              <p className="projects-introduction-large">
                Every processing operation has different requirements.
                The right machinery depends on the crop, production
                capacity, workflow, available space and intended output.
              </p>

              <p>
                Agunity Investment Ltd approaches fabrication from the
                perspective of the operation itself. We supply standard
                agricultural machinery while also supporting custom
                fabrication, machine modification, material handling and
                broader processing system requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT / WORK AREAS
      ===================================================== */}

      <section className="projects-section">

        <div className="projects-container">

          <div className="projects-section-heading">

            <div>
              <div className="projects-kicker">
                FABRICATION CAPABILITIES
              </div>

              <h2>
                Different requirements.
                <span>Practical solutions.</span>
              </h2>
            </div>

            <p>
              Our project work covers individual machines, custom
              fabrication and connected processing systems.
            </p>

          </div>

          <div className="projects-list">

            {projects.map((project) => (
              <article
                className="project-row"
                key={project.number}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-icon">
                  {project.icon}
                </div>

                <div className="project-main">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <div className="project-applications">

                    {project.applications.map((application) => (
                      <span key={application}>
                        <FiCheckCircle />
                        {application}
                      </span>
                    ))}

                  </div>

                </div>

                <Link
                  to="/request-a-quote"
                  className="project-arrow-link"
                  aria-label={`Discuss ${project.title}`}
                >
                  <FiArrowUpRight />
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          HOW WE APPROACH PROJECTS
      ===================================================== */}

      <section className="projects-process">

        <div className="projects-container">

          <div className="projects-process-heading">

            <div className="projects-kicker">
              PROJECT APPROACH
            </div>

            <h2>
              From requirement
              <span>to working equipment.</span>
            </h2>

          </div>

          <div className="projects-process-grid">

            <div className="process-card">
              <span>01</span>

              <div className="process-line"></div>

              <h3>Understand</h3>

              <p>
                We first understand the crop, material, production
                requirement and operating environment.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>

              <div className="process-line"></div>

              <h3>Develop</h3>

              <p>
                The equipment or fabrication requirement is considered
                around the intended application and workflow.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>

              <div className="process-line"></div>

              <h3>Fabricate</h3>

              <p>
                Machinery is fabricated or modified according to the
                agreed technical requirements.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>

              <div className="process-line"></div>

              <h3>Deliver</h3>

              <p>
                The completed equipment is prepared for installation,
                operation or integration into the processing environment.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MACHINERY CONNECTION
      ===================================================== */}

      <section className="projects-machinery">

        <div className="projects-container">

          <div className="projects-machinery-inner">

            <div className="projects-machinery-content">

              <div className="projects-kicker">
                STANDARD MACHINERY
              </div>

              <h2>
                Need equipment from our
                <span>existing machinery range?</span>
              </h2>

              <p>
                Explore Agunity's agricultural machinery catalogue,
                including coffee processing, maize processing, grain
                processing, rice, cassava, animal feed, material handling
                and other equipment.
              </p>

            </div>

            <Link
              to="/machinery"
              className="projects-machinery-button"
            >
              View Machinery
              <FiArrowUpRight />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          CUSTOM FABRICATION CTA
      ===================================================== */}

      <section className="projects-fabrication">

        <div className="projects-fabrication-pattern"></div>

        <div className="projects-container">

          <div className="projects-fabrication-inner">

            <div className="projects-fabrication-content">

              <div className="projects-eyebrow projects-eyebrow-light">
                <span></span>
                CUSTOM FABRICATION
              </div>

              <h2>
                Have a machine
                <span>in mind?</span>
              </h2>

              <p>
                If the equipment you need is not in our standard range,
                speak to our team about a custom fabrication, machine
                modification or processing-system requirement.
              </p>

            </div>

            <div className="projects-fabrication-action">

              <Link to="/request-a-quote">
                Discuss Fabrication
                <FiArrowUpRight />
              </Link>

              <Link
                to="/contact"
                className="projects-contact-link"
              >
                Contact Agunity
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Projects;