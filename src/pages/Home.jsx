import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiSettings,
  FiShield,
  FiTool,
  FiTrendingUp,
  FiTruck,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import machineryData from "../data/machineryData";

import "./Home.css";

const heroSlides = [
  {
    machineId: "coffee-huller",
    eyebrow: "AGRICULTURAL MACHINERY • UGANDA",
    title: "Machines built",
    highlight: "for production.",
    description:
      "Agunity Investment Ltd fabricates agricultural processing machinery for farmers, agro-processors, cooperatives and commercial production businesses across Uganda and East Africa.",
    primary: "Explore Machinery",
    primaryLink: "/machinery",
    secondary: "Request a Quote",
    secondaryLink: "/request-a-quote",
  },
  {
    machineId: "maize-huller-mill",
    eyebrow: "MAIZE PROCESSING • FABRICATION",
    title: "Engineering for",
    highlight: "agro-processing.",
    description:
      "Practical maize hulling and milling equipment designed around the needs of farmers, millers, cooperatives and growing processing businesses.",
    primary: "View Maize Machinery",
    primaryLink: "/machinery?category=Maize%20Processing",
    secondary: "Discuss Your Requirement",
    secondaryLink: "/contact",
  },
  {
    machineId: "rice-huller",
    eyebrow: "RICE PROCESSING • UGANDA",
    title: "Processing made",
    highlight: "more productive.",
    description:
      "Rice processing equipment developed for agricultural businesses looking to improve processing efficiency and build practical production capacity.",
    primary: "Explore Rice Machinery",
    primaryLink: "/machinery?category=Rice%20Processing",
    secondary: "Request a Quote",
    secondaryLink: "/request-a-quote",
  },
  {
    machineId: "animal-feed-mill",
    eyebrow: "ANIMAL FEED • PROCESSING SYSTEMS",
    title: "Equipment for",
    highlight: "growing operations.",
    description:
      "Feed processing machinery for livestock farmers, poultry operations and commercial producers seeking practical equipment for feed production.",
    primary: "Explore Feed Machinery",
    primaryLink: "/machinery?category=Animal%20Feed",
    secondary: "Talk to Agunity",
    secondaryLink: "/contact",
  },
  {
    machineId: "multiple-thresher",
    eyebrow: "FABRICATION • ENGINEERING • SUPPLY",
    title: "Fabricated in Uganda.",
    highlight: "Built for Africa.",
    description:
      "Agricultural machinery developed with practical fabrication, serviceability and the operating conditions of African businesses in mind.",
    primary: "View All Machinery",
    primaryLink: "/machinery",
    secondary: "Start a Project",
    secondaryLink: "/request-a-quote",
  },
];

const sectors = [
  {
    title: "Coffee",
    subtitle: "Processing",
    machineId: "coffee-huller",
  },
  {
    title: "Maize",
    subtitle: "Processing",
    machineId: "maize-huller-mill",
  },
  {
    title: "Rice",
    subtitle: "Processing",
    machineId: "rice-huller",
  },
  {
    title: "Animal Feed",
    subtitle: "Production",
    machineId: "animal-feed-mill",
  },
  {
    title: "Grain",
    subtitle: "Processing",
    machineId: "multiple-thresher",
  },
  {
    title: "Material",
    subtitle: "Handling",
    machineId: "bucket-elevator",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Machine Fabrication",
    text:
      "Agricultural machinery fabricated around practical processing applications and production requirements.",
    icon: FiTool,
  },
  {
    number: "02",
    title: "Processing Systems",
    text:
      "Equipment for crop processing, grain handling, animal feed production and agricultural value addition.",
    icon: FiSettings,
  },
  {
    number: "03",
    title: "Material Handling",
    text:
      "Conveyors and elevators that support the movement of agricultural materials through processing operations.",
    icon: FiTruck,
  },
  {
    number: "04",
    title: "Custom Requirements",
    text:
      "Engineering conversations for businesses whose processing requirements call for a specific equipment solution.",
    icon: FiLayers,
  },
];

const applications = [
  "Farmers & farmer groups",
  "Agricultural cooperatives",
  "Commercial agro-processors",
  "Grain & cereal processors",
  "Coffee processing businesses",
  "Animal feed producers",
  "Agribusiness enterprises",
  "Institutional agricultural projects",
];

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

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[activeSlide];

  const currentMachine = useMemo(
    () => getMachineById(currentSlide.machineId),
    [currentSlide.machineId]
  );

  const currentImage = getMachineImage(currentMachine);

  const featuredMachines = machineryData.slice(0, 8);

  const goNext = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(goNext, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    document.title =
      "Agunity Investment Ltd | Agricultural Machinery Fabrication Uganda";

    const description =
      "Agunity Investment Ltd is a Ugandan agricultural machinery fabricator supplying coffee hullers, maize mills, rice hullers, threshers, animal feed machinery, conveyors and agro-processing equipment across Uganda and East Africa.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="home-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="home-hero-background">
          {heroSlides.map((slide, index) => {
            const machine = getMachineById(slide.machineId);
            const image = getMachineImage(machine);

            return (
              <div
                key={slide.machineId}
                className={`home-hero-slide ${
                  activeSlide === index ? "active" : ""
                }`}
                style={{
                  backgroundImage: image
                    ? `url("${image}")`
                    : "none",
                }}
                aria-hidden={activeSlide !== index}
              />
            );
          })}
        </div>

        <div className="home-hero-overlay" />
        <div className="home-hero-grid" />

        <div className="home-container home-hero-inner">

          <div className="home-hero-content">

            <div className="home-hero-eyebrow">
              <span />
              <strong>{currentSlide.eyebrow}</strong>
            </div>

            <h1>
              {currentSlide.title}
              <span>{currentSlide.highlight}</span>
            </h1>

            <p>{currentSlide.description}</p>

            <div className="home-hero-actions">
              <Link
                to={currentSlide.primaryLink}
                className="home-primary-button"
              >
                {currentSlide.primary}
                <FiArrowUpRight />
              </Link>

              <Link
                to={currentSlide.secondaryLink}
                className="home-hero-secondary"
              >
                {currentSlide.secondary}
                <FiArrowRight />
              </Link>
            </div>

            <div className="home-hero-trust">
              <div>
                <FiCheck />
                <span>Uganda Fabrication</span>
              </div>

              <div>
                <FiShield />
                <span>Practical Engineering</span>
              </div>

              <div>
                <FiGlobe />
                <span>East Africa</span>
              </div>
            </div>
          </div>

          <div className="home-hero-machine">

            <div className="home-machine-frame">
              <span className="frame-corner frame-top-left" />
              <span className="frame-corner frame-top-right" />
              <span className="frame-corner frame-bottom-left" />
              <span className="frame-corner frame-bottom-right" />

              <div className="home-machine-label">
                <span>01 / 05</span>
                <span>AGUNITY INVESTMENT LTD</span>
              </div>

              <div className="home-machine-title">
                <small>FEATURED EQUIPMENT</small>
                <strong>
                  {currentMachine?.name || "Agricultural Machinery"}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="home-hero-arrow home-hero-arrow-left"
          onClick={goPrevious}
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>

        <button
          type="button"
          className="home-hero-arrow home-hero-arrow-right"
          onClick={goNext}
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>

        <div className="home-hero-bottom">
          <div className="home-container home-hero-bottom-inner">

            <div className="home-hero-counter">
              <strong>
                {String(activeSlide + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <span>
                {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="home-hero-dots">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.machineId}
                  className={
                    activeSlide === index
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span />
                </button>
              ))}
            </div>

            <div className="home-hero-location">
              <FiMapPin />
              <span>Gayaza Road • Kampala • Uganda</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / POSITIONING
      ===================================================== */}

      <section className="home-positioning">
        <div className="home-container positioning-grid">

          <div className="positioning-index">
            <span>01</span>
            <div />
            <small>AGUNITY</small>
          </div>

          <div className="positioning-content">
            <span className="home-kicker">
              AGRICULTURAL MACHINERY & FABRICATION
            </span>

            <h2>
              We build equipment around
              <span> the work it has to do.</span>
            </h2>

            <div className="positioning-columns">
              <p>
                Agunity Investment Ltd is an agricultural machinery
                fabrication and processing solutions company based in
                Kampala, Uganda.
              </p>

              <p>
                We provide equipment for crop processing, grain
                handling, animal feed production, material movement
                and agricultural value addition — serving farmers,
                processors, cooperatives and commercial businesses.
              </p>
            </div>

            <div className="positioning-footer">
              <Link to="/about" className="home-text-link">
                Discover Agunity
                <FiArrowUpRight />
              </Link>

              <span>
                EST. AGRICULTURAL ENGINEERING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTORS
      ===================================================== */}

      <section className="home-sectors">
        <div className="home-container">

          <div className="home-section-header">
            <div>
              <span className="home-kicker">
                PROCESSING SECTORS
              </span>

              <h2>
                Equipment for the
                <span> agricultural value chain.</span>
              </h2>
            </div>

            <Link
              to="/industries"
              className="home-outline-link"
            >
              Explore Industries
              <FiArrowUpRight />
            </Link>
          </div>

          <div className="home-sector-grid">
            {sectors.map((sector, index) => {
              const machine = getMachineById(sector.machineId);
              const image = getMachineImage(machine);

              return (
                <Link
                  to="/machinery"
                  className="home-sector-card"
                  key={sector.machineId}
                >
                  <div className="home-sector-image">
                    {image ? (
                      <img
                        src={image}
                        alt={`${sector.title} ${sector.subtitle} machinery in Uganda`}
                        loading="lazy"
                      />
                    ) : null}

                    <div className="home-sector-overlay" />

                    <span className="home-sector-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="home-sector-arrow">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <div className="home-sector-content">
                    <span>{sector.subtitle}</span>
                    <h3>{sector.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MACHINERY SHOWCASE
      ===================================================== */}

      <section className="home-machinery">
        <div className="home-container">

          <div className="home-machinery-header">
            <div>
              <span className="home-kicker">
                THE EQUIPMENT
              </span>

              <h2>
                Agricultural machinery,
                <span> made practical.</span>
              </h2>
            </div>

            <div className="home-machinery-header-copy">
              <p>
                Explore machinery for coffee, maize, rice, grain,
                cassava, animal feed, biomass, seed processing and
                material handling.
              </p>

              <Link
                to="/machinery"
                className="home-text-link"
              >
                View Complete Catalogue
                <FiArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="home-machinery-grid">
            {featuredMachines.map((machine, index) => {
              const image = getMachineImage(machine);

              return (
                <Link
                  to={`/machinery/${machine.id}`}
                  className={`home-machinery-card ${
                    index === 0
                      ? "featured"
                      : ""
                  }`}
                  key={machine.id}
                >
                  <div className="home-machinery-image">

                    {image ? (
                      <img
                        src={image}
                        alt={`${machine.name} agricultural machinery fabricated by Agunity Investment Ltd in Uganda`}
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="home-machinery-empty">
                        <FiSettings />
                      </div>
                    )}

                    <div className="home-machinery-image-overlay" />

                    <span className="home-machinery-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="home-machinery-category">
                      {machine.category}
                    </span>

                    <span className="home-machinery-arrow">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <div className="home-machinery-card-content">
                    <h3>{machine.name}</h3>

                    <p>{machine.description}</p>

                    <div>
                      <span>View Machine</span>
                      <FiArrowRight />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          ENGINEERING / FABRICATION
      ===================================================== */}

      <section className="home-engineering">
        <div className="home-container engineering-grid">

          <div className="engineering-visual">

            <div className="engineering-main-image">
              {getMachineImage(
                getMachineById("maize-huller-mill")
              ) ? (
                <img
                  src={getMachineImage(
                    getMachineById("maize-huller-mill")
                  )}
                  alt="Maize huller and mill fabricated by Agunity Investment Ltd in Uganda"
                  loading="lazy"
                />
              ) : null}

              <div className="engineering-image-overlay" />

              <div className="engineering-image-caption">
                <span>AGUNITY / ENGINEERING</span>
                <strong>FABRICATED IN UGANDA</strong>
              </div>
            </div>

            <div className="engineering-small-image">
              {getMachineImage(
                getMachineById("bucket-elevator")
              ) ? (
                <img
                  src={getMachineImage(
                    getMachineById("bucket-elevator")
                  )}
                  alt="Bucket elevator agricultural material handling equipment in Uganda"
                  loading="lazy"
                />
              ) : null}
            </div>

            <div className="engineering-stamp">
              <FiSettings />
              <span>FABRICATION</span>
            </div>
          </div>

          <div className="engineering-content">

            <span className="home-kicker">
              FABRICATION & ENGINEERING
            </span>

            <h2>
              More than a machine.
              <span> A processing solution.</span>
            </h2>

            <p className="engineering-lead">
              Agricultural machinery performs best when the
              equipment matches the operation. Agunity approaches
              fabrication from the processing requirement first.
            </p>

            <div className="engineering-list">

              <div>
                <span className="engineering-list-icon">
                  <FiCheck />
                </span>

                <div>
                  <strong>Understand</strong>
                  <p>
                    We consider the crop, processing stage,
                    production objective and operating environment.
                  </p>
                </div>
              </div>

              <div>
                <span className="engineering-list-icon">
                  <FiCheck />
                </span>

                <div>
                  <strong>Engineer</strong>
                  <p>
                    Machinery is approached around practical
                    processing and material-handling requirements.
                  </p>
                </div>
              </div>

              <div>
                <span className="engineering-list-icon">
                  <FiCheck />
                </span>

                <div>
                  <strong>Fabricate</strong>
                  <p>
                    Equipment is fabricated with serviceability
                    and real agricultural operations in mind.
                  </p>
                </div>
              </div>

            </div>

            <div className="engineering-actions">
              <Link
                to="/why-agunity"
                className="home-dark-button"
              >
                Why Agunity
                <FiArrowUpRight />
              </Link>

              <Link
                to="/request-a-quote"
                className="home-light-link"
              >
                Discuss Your Requirement
                <FiArrowRight />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="home-capabilities">
        <div className="home-container">

          <div className="home-section-header capabilities-header">

            <div>
              <span className="home-kicker">
                WHAT WE DO
              </span>

              <h2>
                Engineering capability
                <span> behind the equipment.</span>
              </h2>
            </div>

            <p>
              From individual machines to connected processing
              requirements, our work is centred on practical
              agricultural and industrial applications.
            </p>

          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  className="capability-card"
                  key={capability.number}
                >
                  <div className="capability-top">
                    <span>{capability.number}</span>

                    <Icon />
                  </div>

                  <h3>{capability.title}</h3>

                  <p>{capability.text}</p>

                  <span className="capability-line" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="home-applications">
        <div className="home-container applications-grid">

          <div className="applications-heading">

            <span className="home-kicker">
              WHO WE SERVE
            </span>

            <h2>
              Equipment for businesses
              <span> that process.</span>
            </h2>

            <p>
              Our machinery is relevant across different stages of
              the agricultural value chain — from farm-level
              processing to commercial agro-processing operations.
            </p>

            <Link
              to="/industries"
              className="home-outline-link"
            >
              Explore Applications
              <FiArrowUpRight />
            </Link>

          </div>

          <div className="applications-list">
            {applications.map((application, index) => (
              <div
                className="application-item"
                key={application}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{application}</strong>

                <FiArrowUpRight />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          REGIONAL REACH
      ===================================================== */}

      <section className="home-reach">
        <div className="home-container reach-grid">

          <div className="reach-content">

            <span className="home-kicker">
              REGIONAL REACH
            </span>

            <h2>
              Fabrication from Uganda.
              <span> Reach across East Africa.</span>
            </h2>

            <p>
              Based in Kampala, Agunity Investment Ltd is positioned
              to support agricultural processing businesses in Uganda
              and the wider East African market.
            </p>

            <div className="reach-countries">
              <span>Uganda</span>
              <span>Kenya</span>
              <span>Rwanda</span>
              <span>Tanzania</span>
              <span>Burundi</span>
              <span>DRC</span>
            </div>

            <Link
              to="/contact"
              className="home-dark-button"
            >
              Talk to Agunity
              <FiArrowUpRight />
            </Link>

          </div>

          <div className="reach-visual">

            <div className="reach-grid-pattern" />

            <div className="reach-circle reach-circle-one" />
            <div className="reach-circle reach-circle-two" />

            <div className="reach-center">
              <FiGlobe />

              <strong>UGANDA</strong>

              <span>
                EAST AFRICA
                <br />
                MACHINERY SUPPLY
              </span>
            </div>

            <div className="reach-point reach-point-one">
              <span />
              <small>UGANDA</small>
            </div>

            <div className="reach-point reach-point-two">
              <span />
              <small>KENYA</small>
            </div>

            <div className="reach-point reach-point-three">
              <span />
              <small>RWANDA</small>
            </div>

            <div className="reach-point reach-point-four">
              <span />
              <small>TANZANIA</small>
            </div>

            <div className="reach-location">
              <FiMapPin />
              <span>
                Gayaza Road
                <small>Kampala, Uganda</small>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="home-numbers">
        <div className="home-container numbers-grid">

          <div>
            <strong>23+</strong>
            <span>Machinery Types</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Ugandan Fabrication Partner</span>
          </div>

          <div>
            <strong>06</strong>
            <span>East African Markets</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Application Focused</span>
          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <div className="home-cta-grid" />

        <div className="home-container home-final-inner">

          <div className="home-final-copy">

            <span className="home-kicker">
              HAVE A MACHINERY REQUIREMENT?
            </span>

            <h2>
              Tell us what you need
              <span> to process.</span>
            </h2>

            <p>
              Select from our machinery catalogue or tell us about
              your processing requirement. Agunity can help you
              identify the equipment to discuss for your operation.
            </p>

          </div>

          <div className="home-final-actions">

            <Link
              to="/request-a-quote"
              className="home-final-primary"
            >
              Request a Quote
              <FiArrowUpRight />
            </Link>

            <Link
              to="/machinery"
              className="home-final-secondary"
            >
              Explore Machinery
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;