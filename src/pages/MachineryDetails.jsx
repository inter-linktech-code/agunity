import React, { useEffect } from "react";
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
     PAGE SEO
  ========================================================= */

  useEffect(() => {
    if (!machine) {
      document.title =
        "Machine Not Found | Agunity Investment Ltd";

      return;
    }

    document.title = `${machine.name} Uganda | Agricultural Machinery | Agunity Investment Ltd`;

    const description =
      machine.description ||
      `${machine.name} for agricultural processing in Uganda, supplied and fabricated by Agunity Investment Ltd.`;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let metaKeywords = document.querySelector(
      'meta[name="keywords"]'
    );

    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.setAttribute(
      "content",
      machine.keywords ||
        `${machine.name}, agricultural machinery Uganda, agricultural machinery Kampala, agro processing machinery Uganda`
    );

    return () => {
      document.title =
        "Agunity Investment Ltd | Agricultural Machinery Uganda";
    };
  }, [machine]);

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

  /* =========================================================
     ENGINEERING FEATURES
  ========================================================= */

  const features = [
    "Fabricated for practical agricultural processing",
    "Designed for reliable day-to-day operation",
    "Heavy-duty engineering and fabrication",
    "Suitable for commercial and institutional applications",
    "Serviceable components for easier maintenance",
    "Technical support available from Agunity",
  ];

  /* =========================================================
     APPLICATIONS
  ========================================================= */

  const applications = [
    "Agricultural processing",
    "Commercial processing facilities",
    "Farmer cooperatives",
    "Agro-processing businesses",
    "Institutional production",
    "Small and medium enterprises",
  ];

  /* =========================================================
     MACHINE IMAGE
  ========================================================= */

  const machineImage =
    machine.image ||
    machine.images?.[0] ||
    machine.photo ||
    machine.imageUrl ||
    "";

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

            {/* HERO COPY */}

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

            {/* MACHINE PHOTOGRAPH */}

            <div className="machine-visual-card">

              <div className="machine-visual-grid" />

              <div className="machine-visual-inner">

                {machineImage ? (
                  <img
                    src={machineImage}
                    alt={`${machine.name} agricultural machinery fabricated and supplied by Agunity Investment Ltd in Uganda`}
                    className="machine-details-image"
                  />
                ) : (
                  <div className="machine-image-fallback">
                    <FiSettings />

                    <span>
                      AGUNITY INVESTMENT LTD
                    </span>
                  </div>
                )}

                <div className="machine-photo-label">
                  <span>
                    AGUNITY INVESTMENT LTD
                  </span>

                  <strong>
                    {machine.name}
                  </strong>
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

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

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
                The {machine.name} is part of Agunity
                Investment Ltd's agricultural machinery
                range, developed to support efficient
                processing and value addition within
                agricultural production.
              </p>

              <p
                className="machine-section-text"
                style={{ marginTop: "18px" }}
              >
                Agunity combines local fabrication capability
                with practical engineering knowledge to
                provide machinery solutions for agricultural
                businesses, processors, farmers, cooperatives
                and institutions across Uganda and the wider
                East African market.
              </p>

              {machine.keywords && (
                <p
                  className="machine-section-text"
                  style={{
                    marginTop: "18px",
                    fontSize: "0.78rem",
                    color: "#87918a",
                  }}
                >
                  {machine.keywords}
                </p>
              )}

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
                agricultural processing operations depending
                on the crop, production model and required
                output.
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

          {/* =================================================
              RIGHT — MACHINE INFORMATION
          ================================================= */}

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
                  <dt>
                    Category
                  </dt>

                  <dd>
                    {machine.category}
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>
                    Application
                  </dt>

                  <dd>
                    Agricultural Processing
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>
                    Build
                  </dt>

                  <dd>
                    Fabricated
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>
                    Supplier
                  </dt>

                  <dd>
                    Agunity Investment Ltd
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>
                    Location
                  </dt>

                  <dd>
                    Kampala, Uganda
                  </dd>
                </div>

                <div className="machine-spec-row">
                  <dt>
                    Market
                  </dt>

                  <dd>
                    Uganda & East Africa
                  </dd>
                </div>

              </dl>

              <div className="machine-spec-action">

                <Link
                  to="/request-a-quote"
                  className="machine-primary-btn"
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
              Your production requirements may be different
              from a standard machine configuration. Talk to
              Agunity about fabrication, modification, capacity
              requirements, dimensions or integration with
              other processing equipment.
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

              {relatedMachines.map((relatedMachine) => {

                const relatedImage =
                  relatedMachine.image ||
                  relatedMachine.images?.[0] ||
                  relatedMachine.photo ||
                  relatedMachine.imageUrl ||
                  "";

                return (
                  <Link
                    to={`/machinery/${relatedMachine.id}`}
                    className="related-machine-card"
                    key={relatedMachine.id}
                  >

                    {/* REAL MACHINE PHOTO */}

                    <div className="related-machine-image">

                      {relatedImage ? (
                        <img
                          src={relatedImage}
                          alt={`${relatedMachine.name} agricultural machinery`}
                        />
                      ) : (
                        <div className="related-machine-image-fallback">
                          <FiSettings />
                        </div>
                      )}

                      <div className="related-machine-image-overlay" />

                      <span className="related-machine-category">
                        {relatedMachine.category}
                      </span>

                      <div className="related-machine-arrow">
                        <FiArrowUpRight />
                      </div>

                    </div>

                    {/* MACHINE CONTENT */}

                    <div className="related-machine-content">

                      <h3>
                        {relatedMachine.name}
                      </h3>

                      <p>
                        {relatedMachine.description}
                      </p>

                      <div className="related-machine-bottom">

                        <span>
                          View Machine
                        </span>

                        <FiArrowRight />

                      </div>

                    </div>

                  </Link>
                );
              })}

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
            <span>
              processing solution.
            </span>
          </h2>

          <p>
            Tell us what you process, your expected
            production capacity and what you want the machine
            to achieve. Our team can help you determine the
            right equipment or fabrication approach.
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