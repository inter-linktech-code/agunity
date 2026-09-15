
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiSettings,
  FiTool,
} from "react-icons/fi";

import machineryData from "../data/machineryData";
import "./MachineryDetails.css";

function MachineryDetails() {
  const { machineId } = useParams();

  const machine = machineryData.find(
    (item) => String(item.id) === String(machineId)
  );

  /* =========================================================
     MACHINE NOT FOUND
     ========================================================= */

  if (!machine) {
    return (
      <section className="machine-not-found">
        <div className="machine-not-found-inner">
          <span>404 • MACHINE NOT FOUND</span>

          <h1>
            We couldn't find
            <strong> that machine.</strong>
          </h1>

          <p>
            The machinery you are looking for may have been moved,
            renamed or is not currently listed in our catalogue.
          </p>

          <Link
            to="/machinery"
            className="machine-primary-btn"
          >
            <FiArrowLeft />
            Back to Machinery
          </Link>
        </div>
      </section>
    );
  }

  /* =========================================================
     RELATED MACHINERY
     ========================================================= */

  const relatedMachines = machineryData
    .filter(
      (item) =>
        item.id !== machine.id &&
        item.category === machine.category
    )
    .slice(0, 3);

  /* If there are not enough machines in the same category,
     fill the remaining cards with other machinery. */

  if (relatedMachines.length < 3) {
    machineryData.forEach((item) => {
      if (
        relatedMachines.length < 3 &&
        item.id !== machine.id &&
        !relatedMachines.some(
          (related) => related.id === item.id
        )
      ) {
        relatedMachines.push(item);
      }
    });
  }

  const features = [
    "Fabricated for practical agricultural processing",
    "Designed for reliable day-to-day operation",
    "Heavy-duty engineering and fabrication",
    "Suitable for commercial and institutional applications",
    "Serviceable components for easier maintenance",
    "Technical support available from Agunity",
  ];

  const applications = [
    "Agricultural processing",
    "Commercial processing facilities",
    "Farmer cooperatives",
    "Agro-processing businesses",
    "Institutional production",
    "Small and medium enterprises",
  ];

  return (
    <div className="machine-details-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="machine-details-hero">

        <div className="machine-details-container">

          {/* BREADCRUMB */}

          <div className="machine-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>

            <Link to="/machinery">
              Machinery
            </Link>

            <span>/</span>

            <span>{machine.name}</span>
          </div>

          {/* HERO GRID */}

          <div className="machine-details-grid">

            <div className="machine-details-copy">

              <div className="machine-details-category">
                {machine.category}
              </div>

              <h1 className="machine-details-title">
                {machine.name}
              </h1>

              <p className="machine-details-intro">
                {machine.description}
              </p>

              <div className="machine-details-actions">

                <Link
                  to="/request-a-quote"
                  className="machine-primary-btn"
                >
                  Request a Quote
                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/machinery"
                  className="machine-secondary-btn"
                >
                  <FiArrowLeft />
                  All Machinery
                </Link>

              </div>

            </div>

            {/* MACHINE VISUAL */}

            <div className="machine-visual-card">

              <div className="machine-visual-grid" />

              <div className="machine-visual-inner">

                <div className="machine-art">

                  <div className="machine-art-label">
                    AGUNITY
                  </div>

                  <div className="machine-art-top" />

                  <div className="machine-art-main" />

                  <div className="machine-art-accent" />

                  <div className="machine-art-leg one" />

                  <div className="machine-art-leg two" />

                  <div className="machine-art-wheel one" />

                  <div className="machine-art-wheel two" />

                </div>

              </div>

            </div>

          </div>

          {/* MACHINE META */}

          <div className="machine-meta-strip">

            <div className="machine-meta-item">

              <span className="machine-meta-label">
                Category
              </span>

              <span className="machine-meta-value">
                {machine.category}
              </span>

            </div>

            <div className="machine-meta-item">

              <span className="machine-meta-label">
                Engineering
              </span>

              <span className="machine-meta-value">
                Agricultural Processing
              </span>

            </div>

            <div className="machine-meta-item">

              <span className="machine-meta-label">
                Availability
              </span>

              <span className="machine-meta-value">
                Fabrication & Supply
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="machine-info-section">

        <div className="machine-info-layout">

          {/* LEFT */}

          <div>

            {/* OVERVIEW */}

            <div className="machine-info-block">

              <div className="machine-section-eyebrow">
                MACHINE OVERVIEW
              </div>

              <h2 className="machine-section-title">
                Built for
                <br />
                productive processing.
              </h2>

              <p className="machine-section-text">
                The {machine.name} is part of Agunity Investment
                Ltd's agricultural machinery range, developed to
                support efficient processing and value addition
                within agricultural production.
              </p>

              <p
                className="machine-section-text"
                style={{ marginTop: "18px" }}
              >
                Agunity combines local fabrication capability with
                practical engineering knowledge to provide
                machinery solutions for agricultural businesses,
                processors, farmers, cooperatives and institutions
                across Uganda and the wider East African market.
              </p>

            </div>

            {/* FEATURES */}

            <div className="machine-info-block">

              <div className="machine-section-eyebrow">
                ENGINEERING
              </div>

              <h2 className="machine-section-title">
                Key features
              </h2>

              <div className="machine-features">

                {features.map((feature) => (
                  <div
                    className="machine-feature"
                    key={feature}
                  >
                    <div className="machine-feature-mark">
                      <FiCheck />
                    </div>

                    <span>
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* APPLICATIONS */}

            <div className="machine-info-block">

              <div className="machine-section-eyebrow">
                APPLICATIONS
              </div>

              <h2 className="machine-section-title">
                Where it fits.
              </h2>

              <p className="machine-section-text">
                This machine can form part of different
                agricultural processing operations depending on
                the crop, production model and required output.
              </p>

              <div className="machine-applications">

                {applications.map((application) => (
                  <span
                    className="machine-application"
                    key={application}
                  >
                    {application}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT — SPECIFICATIONS */}

          <aside>

            <div className="machine-spec-card">

              <div className="machine-spec-header">

                <span>
                  MACHINE INFORMATION
                </span>

                <h3>
                  {machine.name}
                </h3>

              </div>

              <dl className="machine-spec-list">

                <div className="machine-spec-row">
                  <dt>Category</dt>
                  <dd>{machine.category}</dd>
                </div>

                <div className="machine-spec-row">
                  <dt>Application</dt>
                  <dd>
                    Agricultural Processing
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>Build</dt>
                  <dd>
                    Fabricated
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>Supplier</dt>
                  <dd>
                    Agunity Investment Ltd
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>Location</dt>
                  <dd>
                    Kampala, Uganda
                  </dd>
                </div>

              </dl>

              <div
                style={{
                  padding: "22px 25px",
                  borderTop:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >

                <Link
                  to="/request-a-quote"
                  className="machine-primary-btn"
                  style={{ width: "100%" }}
                >
                  Get Machine Quote
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          CUSTOM FABRICATION
      ===================================================== */}

      <section className="machine-fabrication-section">

        <div className="machine-fabrication-card">

          <div className="machine-fabrication-content">

            <div className="machine-section-eyebrow">
              CUSTOM ENGINEERING
            </div>

            <h2>
              Need a different
              <br />
              specification?
            </h2>

            <p>
              Your production requirements may be different from
              a standard machine configuration. Talk to Agunity
              about fabrication, modification, capacity
              requirements, dimensions or integration with other
              processing equipment.
            </p>

            <Link
              to="/request-a-quote"
              className="machine-primary-btn"
            >
              Discuss Your Requirement
              <FiArrowUpRight />
            </Link>

          </div>

          <div className="fabrication-icon">
            <FiTool />
          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED MACHINERY
      ===================================================== */}

      {relatedMachines.length > 0 && (
        <section className="related-machinery-section">

          <div className="related-machinery-container">

            <div className="related-machinery-heading">

              <div>

                <div className="machine-section-eyebrow">
                  EXPLORE MORE
                </div>

                <h2>
                  Related machinery
                </h2>

              </div>

              <Link to="/machinery">
                View Complete Catalogue
                <FiArrowUpRight />
              </Link>

            </div>

            <div className="related-machinery-grid">

              {relatedMachines.map((relatedMachine) => (
                <Link
                  to={`/machinery/${relatedMachine.id}`}
                  className="related-machine-card"
                  key={relatedMachine.id}
                >

                  <div>

                    <div className="related-machine-category">
                      {relatedMachine.category}
                    </div>

                    <h3>
                      {relatedMachine.name}
                    </h3>

                  </div>

                  <div className="related-machine-bottom">

                    <span>
                      View Machine
                    </span>

                    <FiArrowUpRight />

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="machine-final-cta">

        <div className="machine-final-cta-inner">

          <div className="machine-section-eyebrow">
            AGUNITY INVESTMENT LTD
          </div>

          <h2>
            Let's build the right
            <br />
            <span>processing solution.</span>
          </h2>

          <p>
            Tell us what you process, your expected production
            capacity and what you want the machine to achieve.
            Our team can help you determine the right equipment
            or fabrication approach.
          </p>

          <Link
            to="/request-a-quote"
            className="machine-primary-btn"
          >
            Request a Quote
            <FiArrowUpRight />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default MachineryDetails;
