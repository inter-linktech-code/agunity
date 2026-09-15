import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiMapPin,
  FiPhone,
  FiSettings,
  FiTruck,
  FiZap,
} from "react-icons/fi";

import machineryData from "../data/machineryData";
import "./Home.css";

const categories = [
  {
    title: "Coffee Processing",
    description:
      "Coffee hullers and wet pulpers for coffee farmers, processors and commercial operations.",
    icon: "01",
    count: "02 Machines",
  },
  {
    title: "Maize Processing",
    description:
      "Maize shellers, hullers, mills and specialized grain processing machinery.",
    icon: "02",
    count: "04 Machines",
  },
  {
    title: "Rice Processing",
    description:
      "Rice threshing and hulling machinery for efficient post-harvest processing.",
    icon: "03",
    count: "02 Machines",
  },
  {
    title: "Cassava Processing",
    description:
      "Cassava chippers and mills for small, medium and commercial processors.",
    icon: "04",
    count: "02 Machines",
  },
  {
    title: "Animal Feed",
    description:
      "Feed mills, mixers, chaff cutters and silage machinery for livestock enterprises.",
    icon: "05",
    count: "04 Machines",
  },
  {
    title: "Grain & Seed",
    description:
      "Threshers, seed cleaners and milling equipment for grain processing.",
    icon: "06",
    count: "05 Machines",
  },
];

const advantages = [
  {
    icon: FiSettings,
    title: "Fabricated for Your Needs",
    text:
      "We build practical machinery around real agricultural processing requirements.",
  },
  {
    icon: FiZap,
    title: "Cost-Effective Solutions",
    text:
      "Our focus is on practical machines that deliver value without unnecessary costs.",
  },
  {
    icon: FiCpu,
    title: "Practical Engineering",
    text:
      "Agricultural machinery designed with usability, productivity and maintainability in mind.",
  },
  {
    icon: FiTruck,
    title: "Regional Supply",
    text:
      "Serving customers in Kampala, across Uganda and the wider East African market.",
  },
];

function Home() {
  useEffect(() => {
    document.title =
      "Agunity Investment Ltd | Agricultural Processing Machines Uganda";

    const description =
      "Agunity Investment Ltd fabricates and supplies affordable agricultural processing machines in Kampala, Uganda and East Africa, including maize mills, coffee hullers, rice hullers, cassava machines, threshers, animal feed machines and more.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  const featuredMachines = machineryData.slice(0, 8);

  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-grid" />

        <div className="hero-inner">

          <div className="hero-content">

            <div className="eyebrow">
              <span className="eyebrow-line" />
              Agricultural Machinery Fabricators
            </div>

            <h1>
              Agricultural Processing
              <span> Machines Built for Production.</span>
            </h1>

            <p className="hero-description">
              Affordable, practical agricultural processing
              machinery fabricated in Uganda for farmers,
              agro-processors, cooperatives and businesses across
              East Africa.
            </p>

            <div className="hero-actions">

              <Link
                to="/machinery"
                className="primary-button"
              >
                Explore Machinery
                <FiArrowRight />
              </Link>

              <Link
                to="/request-a-quote"
                className="secondary-button"
              >
                Request a Quote
                <FiArrowUpRight />
              </Link>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <FiCheckCircle />
                <span>Uganda Fabricated</span>
              </div>

              <div className="trust-item">
                <FiCheckCircle />
                <span>Custom Solutions</span>
              </div>

              <div className="trust-item">
                <FiCheckCircle />
                <span>East Africa Supply</span>
              </div>

            </div>

          </div>

          {/* HERO MACHINE */}

          <div className="hero-machine">

            <div className="machine-orbit orbit-one" />
            <div className="machine-orbit orbit-two" />

            <div className="machine-panel">

              <div className="machine-panel-top">
                <span>AGUNITY / FABRICATION</span>
                <span>01—25</span>
              </div>

              <div className="machine-illustration">

                <div className="machine-body">

                  <div className="machine-hopper" />

                  <div className="machine-chamber">
                    <div className="chamber-detail" />
                    <div className="chamber-detail" />
                  </div>

                  <div className="machine-base" />

                  <div className="machine-wheel wheel-left" />
                  <div className="machine-wheel wheel-right" />

                  <div className="machine-pipe" />

                </div>

              </div>

              <div className="machine-panel-bottom">

                <div>
                  <span className="panel-label">
                    CATEGORY
                  </span>

                  <strong>
                    AGRO PROCESSING
                  </strong>
                </div>

                <div>
                  <span className="panel-label">
                    ORIGIN
                  </span>

                  <strong>
                    UGANDA
                  </strong>
                </div>

              </div>

            </div>

            <div className="hero-floating-card">

              <div className="floating-icon">
                <FiSettings />
              </div>

              <div>
                <strong>
                  Fabricated Machinery
                </strong>

                <span>
                  Built for practical production
                </span>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-bottom">

          <div>
            <span>01</span>
            <p>Agricultural Processing</p>
          </div>

          <div>
            <span>02</span>
            <p>Custom Fabrication</p>
          </div>

          <div>
            <span>03</span>
            <p>Regional Supply</p>
          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro-section">

        <div className="section-container">

          <div className="intro-label">
            <span>01</span>
            <span>Who We Are</span>
          </div>

          <div className="intro-main">

            <div className="intro-heading">

              <span className="small-kicker">
                AGUNITY INVESTMENT LTD
              </span>

              <h2>
                Practical machinery for
                <em> productive agriculture.</em>
              </h2>

            </div>

            <div className="intro-text">

              <p>
                Agunity Investment Ltd is an agricultural machinery
                fabrication and supply company based in Kampala,
                Uganda. We provide machinery solutions for
                agricultural processing, grain handling, animal feed
                production and related industries.
              </p>

              <p>
                From maize milling and coffee processing to rice
                hulling, cassava processing, threshing and material
                handling, our machines are developed around
                practical production needs.
              </p>

              <Link
                to="/about"
                className="text-link"
              >
                Discover Agunity
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="categories-section">

        <div className="section-container">

          <div className="section-heading-row">

            <div>

              <span className="small-kicker">
                OUR MACHINERY
              </span>

              <h2>
                Machines for every
                <br />
                stage of processing.
              </h2>

            </div>

            <div className="heading-side">

              <p>
                Explore agricultural processing equipment
                fabricated and supplied for farms, cooperatives,
                processors and agro-industrial businesses.
              </p>

              <Link
                to="/machinery"
                className="text-link"
              >
                View All Machinery
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

          <div className="category-grid">

            {categories.map((category) => (
              <Link
                to="/machinery"
                className="category-card"
                key={category.title}
              >

                <div className="category-top">
                  <span>{category.icon}</span>
                  <FiArrowUpRight />
                </div>

                <div className="category-content">

                  <span>
                    {category.count}
                  </span>

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                </div>

                <div className="category-line" />

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED MACHINERY
      ===================================================== */}

      <section className="featured-section">

        <div className="section-container">

          <div className="section-heading-row featured-heading">

            <div>

              <span className="small-kicker">
                FEATURED MACHINERY
              </span>

              <h2>
                Built to work.
                <br />
                <em>Priced to make sense.</em>
              </h2>

            </div>

            <div className="featured-intro">

              <p>
                Agricultural processing machinery for Uganda
                and the wider East African market.
              </p>

            </div>

          </div>

          <div className="machine-grid">

            {featuredMachines.map((machine, index) => (

              <Link
                to={`/machinery/${machine.id}`}
                className="machine-card"
                key={machine.id}
              >

                <div className="machine-card-number">
                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </div>

                <div className="machine-card-visual">

                  <div className="visual-grid" />

                  <div className="visual-machine">

                    <div className="visual-top" />
                    <div className="visual-main" />
                    <div className="visual-bottom" />

                    <div className="visual-wheel one" />
                    <div className="visual-wheel two" />

                  </div>

                </div>

                <div className="machine-card-content">

                  <span>
                    {machine.category}
                  </span>

                  <h3>
                    {machine.name}
                  </h3>

                  <p>
                    {machine.description}
                  </p>

                  <div className="machine-card-link">
                    View Machine
                    <FiArrowRight />
                  </div>

                </div>

              </Link>

            ))}

          </div>

          <div className="center-action">

            <Link
              to="/machinery"
              className="primary-button dark-button"
            >
              View Complete Machinery Catalogue
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FABRICATION
      ===================================================== */}

      <section className="fabrication-section">

        <div className="section-container fabrication-grid">

          <div className="fabrication-visual">

            <div className="fabrication-number">
              02
            </div>

            <div className="fabrication-diagram">

              <div className="diagram-circle circle-large" />
              <div className="diagram-circle circle-small" />

              <div className="diagram-line line-one" />
              <div className="diagram-line line-two" />
              <div className="diagram-line line-three" />

              <div className="diagram-center">
                <FiSettings />
              </div>

            </div>

            <div className="fabrication-caption">
              <span>ENGINEERED IN</span>
              <strong>UGANDA</strong>
            </div>

          </div>

          <div className="fabrication-content">

            <span className="small-kicker">
              WHY AGUNITY
            </span>

            <h2>
              Machinery that works
              <em> for your operation.</em>
            </h2>

            <p className="lead">
              We focus on practical fabrication, sensible
              engineering and cost-effective agricultural
              processing solutions.
            </p>

            <div className="advantage-list">

              {advantages.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="advantage"
                    key={item.title}
                  >

                    <div className="advantage-icon">
                      <Icon />
                    </div>

                    <div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          REGIONAL REACH
      ===================================================== */}

      <section className="regional-section">

        <div className="section-container">

          <div className="regional-top">

            <div>

              <span className="small-kicker">
                OUR REACH
              </span>

              <h2>
                Kampala to
                <br />
                <em>East Africa.</em>
              </h2>

            </div>

            <div className="regional-copy">

              <p>
                Based in Kampala, Agunity Investment Ltd is
                positioned to serve agricultural businesses and
                processors across Uganda and neighbouring East
                African markets.
              </p>

              <Link
                to="/contact"
                className="text-link"
              >
                Talk to Our Team
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

          <div className="regional-map">

            <div className="map-grid" />

            <div className="map-line map-line-one" />
            <div className="map-line map-line-two" />
            <div className="map-line map-line-three" />

            <div className="location-point kampala">
              <span />

              <div>
                <strong>Kampala</strong>
                <small>Head Office</small>
              </div>
            </div>

            <div className="location-point uganda">
              <span />

              <div>
                <strong>Uganda</strong>
                <small>Nationwide</small>
              </div>
            </div>

            <div className="location-point rwanda">
              <span />

              <div>
                <strong>Rwanda</strong>
                <small>Regional</small>
              </div>
            </div>

            <div className="location-point burundi">
              <span />

              <div>
                <strong>Burundi</strong>
                <small>Regional</small>
              </div>
            </div>

            <div className="location-point tanzania">
              <span />

              <div>
                <strong>Tanzania</strong>
                <small>Regional</small>
              </div>
            </div>

            <div className="location-point drc">
              <span />

              <div>
                <strong>DRC</strong>
                <small>Regional</small>
              </div>
            </div>

            <div className="map-center">
              <FiGlobe />
              <span>AGUNITY</span>
            </div>

          </div>

          <div className="regional-countries">

            <div>
              <FiMapPin />
              <span>Kampala</span>
            </div>

            <div>
              <FiMapPin />
              <span>Uganda</span>
            </div>

            <div>
              <FiMapPin />
              <span>Rwanda</span>
            </div>

            <div>
              <FiMapPin />
              <span>Burundi</span>
            </div>

            <div>
              <FiMapPin />
              <span>Tanzania</span>
            </div>

            <div>
              <FiMapPin />
              <span>DRC</span>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-section">

        <div className="cta-pattern" />

        <div className="section-container cta-inner">

          <div className="cta-number">
            03
          </div>

          <div className="cta-content">

            <span className="small-kicker">
              START A PROJECT
            </span>

            <h2>
              Looking for the right
              <br />
              <em>machine for your operation?</em>
            </h2>

            <p>
              Tell us what you want to process, your production
              needs and your location. Our team can help identify
              a practical machinery solution.
            </p>

            <div className="cta-actions">

              <Link
                to="/request-a-quote"
                className="primary-button"
              >
                Request a Quote
                <FiArrowRight />
              </Link>

              <a
                href="https://wa.me/256000000000"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Agunity
                <FiArrowUpRight />
              </a>

            </div>

          </div>

          <div className="cta-side">

            <FiPhone />

            <span>
              Call our team
            </span>

            <strong>
              Get a quotation
            </strong>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;

