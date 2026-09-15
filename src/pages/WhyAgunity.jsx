import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheck,
  FiTool,
  FiShield,
  FiTrendingUp,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

import "./WhyAgunity.css";

const reasons = [
  {
    icon: FiTool,
    title: "Fabrication expertise",
    text: "We approach machinery from an engineering and fabrication perspective, not simply as catalogue products.",
  },
  {
    icon: FiSettings,
    title: "Practical solutions",
    text: "Our focus is on equipment that makes sense for the customer's production environment and operating needs.",
  },
  {
    icon: FiTrendingUp,
    title: "Production focused",
    text: "We think about throughput, processing stages, material movement and how equipment contributes to productivity.",
  },
  {
    icon: FiShield,
    title: "Built for work",
    text: "Agricultural machinery operates in demanding environments. Equipment must be practical, serviceable and dependable.",
  },
  {
    icon: FiUsers,
    title: "Customer focused",
    text: "We work with customers to understand what they process, how they operate and what they want to achieve.",
  },
  {
    icon: FiCheck,
    title: "Value conscious",
    text: "We aim to provide cost-effective machinery solutions without adding unnecessary complexity.",
  },
];

function WhyAgunity() {
  return (
    <div className="why-page">
      <section className="why-hero">
        <span className="eyebrow">WHY AGUNITY</span>

        <h1>
          Engineering
          <br />
          <span>that works.</span>
        </h1>

        <p>
          The right agricultural machine is not just about specifications. It
          is about whether it works for the production environment it enters.
        </p>
      </section>

      <section className="why-reasons">
        <div className="why-heading">
          <span>OUR DIFFERENCE</span>
          <h2>
            Fabrication first.
            <br />
            <span>Production always.</span>
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-card" key={reason.title}>
                <Icon />

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="why-statement">
        <div className="why-statement-number">02</div>

        <div>
          <span className="eyebrow">OUR APPROACH</span>

          <h2>
            Understand.
            <br />
            Engineer.
            <br />
            <span>Build.</span>
          </h2>

          <p>
            We believe machinery should solve a production problem. That means
            understanding the material, processing stage, required output and
            operating environment before recommending the right equipment.
          </p>

          <Link to="/request-a-quote">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WhyAgunity;

