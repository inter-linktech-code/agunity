import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiSettings } from "react-icons/fi";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Agricultural Processing Systems",
    category: "AGRO-PROCESSING",
    text: "Machinery fabrication and supply for agricultural processors seeking practical production equipment.",
  },
  {
    number: "02",
    title: "Custom Machine Fabrication",
    category: "ENGINEERING",
    text: "Equipment developed or modified around specific processing requirements and operating conditions.",
  },
  {
    number: "03",
    title: "Material Handling Systems",
    category: "FABRICATION",
    text: "Conveying and lifting equipment supporting efficient movement of agricultural materials.",
  },
  {
    number: "04",
    title: "Processing Line Development",
    category: "SYSTEMS",
    text: "Integrated machinery solutions designed to connect multiple stages of agricultural processing.",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div>
          <span className="eyebrow">PROJECTS & FABRICATION</span>

          <h1>
            Machines are
            <br />
            <span>only part of it.</span>
          </h1>

          <p>
            Our work is about creating practical processing capacity through
            machinery, fabrication and engineering.
          </p>
        </div>

        <FiSettings className="projects-hero-icon" />
      </section>

      <section className="projects-section">
        <div className="projects-intro">
          <span>OUR WORK</span>

          <h2>
            Built around the
            <br />
            <span>production requirement.</span>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>

              <FiArrowUpRight className="project-arrow" />
            </article>
          ))}
        </div>
      </section>

      <section className="projects-fabrication">
        <div>
          <span className="eyebrow">CUSTOM FABRICATION</span>

          <h2>
            Have a machine
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            If the equipment you need is not in our standard range, speak to
            our team about a custom fabrication or modification requirement.
          </p>
        </div>

        <Link to="/request-a-quote">
          Discuss Fabrication
          <FiArrowUpRight />
        </Link>
      </section>
    </div>
  );
}

export default Projects;

