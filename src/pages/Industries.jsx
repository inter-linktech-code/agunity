import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronRight,
  FiMapPin,
  FiSettings,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import coffeeHuller from "../assets/coffee-huller.jpg";
import coffeeWetPulper from "../assets/coffee-wet-pulper.jpg";
import maizeHullerMill from "../assets/maize-huller-mill.jpg";
import maizeSheller from "../assets/maize-sheller.jpg";
import riceHuller from "../assets/rice-huller.jpg";
import riceThresher from "../assets/rice-thresher.jpg";
import cassavaChipper from "../assets/cassava-chipper.jpg";
import cassavaMill from "../assets/cassava-mill.jpg";
import animalFeedMixer from "../assets/animal-feed-mixer.jpg";
import animalFeedMill from "../assets/animal-feed-mill.jpg";
import seedCleaner from "../assets/seed-cleaner.jpg";
import briquetteMachine from "../assets/briquette-machine.jpg";

import "./Industries.css";

const industries = [
  {
    number: "01",
    id: "coffee",
    title: "Coffee Processing",
    shortTitle: "Coffee",
    description:
      "Machinery solutions for coffee farmers, processors, cooperatives and commercial enterprises involved in coffee processing and value addition.",
    image: coffeeHuller,
    machines: [
      "Coffee Huller Machine",
      "Coffee Wet Pulper",
    ],
    keywords:
      "coffee processing machinery Uganda, coffee huller Uganda, coffee pulper Kampala",
  },
  {
    number: "02",
    id: "maize",
    title: "Maize Processing",
    shortTitle: "Maize",
    description:
      "Practical machinery for maize shelling, hulling, milling and grain preparation across small, medium and commercial processing operations.",
    image: maizeHullerMill,
    machines: [
      "Maize Huller & Mill",
      "Maize Sheller",
      "Broken Maize Machine",
    ],
    keywords:
      "maize processing machinery Uganda, maize milling machine Kampala, maize sheller Uganda",
  },
  {
    number: "03",
    id: "grain",
    title: "Grain Processing",
    shortTitle: "Grain",
    description:
      "Agricultural processing equipment supporting threshing, cleaning, milling and preparation of a wide range of grains and cereals.",
    image: seedCleaner,
    machines: [
      "Multiple Thresher",
      "Sorghum Thresher",
      "Groundnut Thresher",
      "Millet Mill",
      "Seed Cleaner",
    ],
    keywords:
      "grain processing machinery Uganda, grain thresher Kampala, agricultural processing equipment Uganda",
  },
  {
    number: "04",
    id: "rice",
    title: "Rice Processing",
    shortTitle: "Rice",
    description:
      "Rice processing machinery designed to support efficient threshing, hulling and post-harvest handling for farmers and commercial processors.",
    image: riceHuller,
    machines: [
      "Rice Thresher",
      "Rice Huller",
    ],
    keywords:
      "rice processing machinery Uganda, rice huller Uganda, rice thresher Kampala",
  },
  {
    number: "05",
    id: "cassava",
    title: "Cassava Processing",
    shortTitle: "Cassava",
    description:
      "Processing solutions for cassava preparation, chipping and milling, helping agricultural enterprises add value to cassava production.",
    image: cassavaMill,
    machines: [
      "Cassava Chipper",
      "Cassava Mill",
    ],
    keywords:
      "cassava processing machinery Uganda, cassava chipper Kampala, cassava mill Uganda",
  },
  {
    number: "06",
    id: "animal-feed",
    title: "Animal Feed Production",
    shortTitle: "Animal Feed",
    description:
      "Machinery for livestock and poultry feed preparation, including mixing, milling, silage and feed-processing operations.",
    image: animalFeedMill,
    machines: [
      "Animal Feed Mixer",
      "Animal Feed Mill",
      "Silage Machine",
      "Chaff Cutter",
    ],
    keywords:
      "animal feed machinery Uganda, feed mill Kampala, animal feed mixer Uganda",
  },
  {
    number: "07",
    id: "seed",
    title: "Seed Processing",
    shortTitle: "Seed",
    description:
      "Equipment supporting the cleaning and preparation of agricultural seed and grain before storage, distribution or further processing.",
    image: seedCleaner,
    machines: [
      "Seed Cleaner",
      "Material Handling Systems",
    ],
    keywords:
      "seed processing machinery Uganda, seed cleaner Kampala, seed cleaning machine Uganda",
  },
  {
    number: "08",
    id: "biomass",
    title: "Biomass & Briquette Production",
    shortTitle: "Biomass",
    description:
      "Machinery solutions for converting suitable agricultural and biomass materials into useful fuel products and supporting circular production systems.",
    image: briquetteMachine,
    machines: [
      "Briquette Machine",
      "Biomass Processing Equipment",
    ],
    keywords:
      "briquette machine Uganda, biomass machinery Kampala, briquette making machine Uganda",
  },
];

const capabilities = [
  {
    icon: <FiSettings />,
    number: "01",
    title: "Machine Fabrication",
    text:
      "Agricultural processing machines fabricated to support practical production requirements and operating conditions.",
  },
  {
    icon: <FiTool />,
    number: "02",
    title: "Processing Systems",
    text:
      "Individual machines and interconnected equipment for agricultural processing and material handling operations.",
  },
  {
    icon: <FiTrendingUp />,
    number: "03",
    title: "Value Addition",
    text:
      "Equipment designed to help agricultural businesses move beyond raw production into processing and value addition.",
  },
  {
    icon: <FiUsers />,
    number: "04",
    title: "Business Solutions",
    text:
      "Machinery solutions serving farmers, cooperatives, processors, institutions and commercial enterprises.",
  },
];

const serviceAreas = [
  "Agricultural cooperatives",
  "Commercial agro-processors",
  "Farmers and farmer groups",
  "Food processing businesses",
  "Animal feed producers",
  "Grain and cereal processors",
  "Coffee processors",
  "Rice processors",
  "Institutional agricultural projects",
  "Agribusiness enterprises",
];

function Industries() {
  return (
    <main className="industries-page">

      {/* HERO */}
      <section className="industries-hero">
        <div className="industries-hero-background">
          <div className="industries-hero-pattern"></div>
          <div className="industries-hero-shape industries-hero-shape-one"></div>
          <div className="industries-hero-shape industries-hero-shape-two"></div>
        </div>

        <div className="industries-container industries-hero-inner">

          <div className="industries-breadcrumb">
            <Link to="/">Home</Link>
            <FiChevronRight />
            <span>Industries</span>
          </div>

          <div className="industries-hero-grid">

            <div className="industries-hero-content">

              <div className="industries-eyebrow">
                <span className="industries-eyebrow-line"></span>
                AGRICULTURAL INDUSTRIES
              </div>

              <h1>
                Machinery Built for
                <span> Agricultural Production</span>
              </h1>

              <p className="industries-hero-lead">
                Agunity Investment Ltd provides agricultural machinery
                fabrication and processing solutions for businesses,
                farmers, cooperatives and agro-processors across Uganda
                and East Africa.
              </p>

              <div className="industries-hero-actions">
                <Link
                  to="/machinery"
                  className="industries-primary-button"
                >
                  Explore Machinery
                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/request-a-quote"
                  className="industries-outline-button"
                >
                  Request a Quote
                  <FiArrowRight />
                </Link>
              </div>

              <div className="industries-hero-meta">
                <div>
                  <strong>Uganda</strong>
                  <span>Based &amp; Fabricated</span>
                </div>

                <div className="industries-meta-divider"></div>

                <div>
                  <strong>East Africa</strong>
                  <span>Regional Focus</span>
                </div>

                <div className="industries-meta-divider"></div>

                <div>
                  <strong>Agro</strong>
                  <span>Processing Solutions</span>
                </div>
              </div>

            </div>

            <div className="industries-hero-visual">

              <div className="industries-hero-image-wrap">
                <img
                  src={coffeeHuller}
                  alt="Coffee huller machine for agricultural processing in Uganda"
                  className="industries-hero-image"
                />

                <div className="industries-hero-image-overlay"></div>

                <div className="industries-hero-image-label">
                  <span>AGUNITY FABRICATION</span>
                  <strong>Agricultural Processing Machinery</strong>
                </div>
              </div>

              <div className="industries-hero-badge">
                <FiSettings />
                <div>
                  <strong>Built for Production</strong>
                  <span>Practical machinery solutions</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="industries-intro">
        <div className="industries-container">

          <div className="industries-intro-grid">

            <div className="industries-section-marker">
              <span>01</span>
              <div></div>
              <small>OUR SECTORS</small>
            </div>

            <div className="industries-intro-main">

              <div className="industries-kicker">
                INDUSTRY-FOCUSED ENGINEERING
              </div>

              <h2>
                Supporting the
                <span> agricultural value chain.</span>
              </h2>

              <p className="industries-intro-large">
                Agricultural production does not end at harvest. Efficient
                processing, handling and value addition are essential for
                turning crops into commercially useful products.
              </p>

              <p>
                Agunity Investment Ltd fabricates and supplies machinery
                serving different stages of agricultural processing. Our
                solutions are relevant to coffee, maize, grains, rice,
                cassava, animal feed, seed processing, biomass and other
                agricultural applications.
              </p>

              <p>
                We work with businesses and agricultural enterprises that
                need practical equipment to improve processing efficiency,
                increase production capacity and create greater value from
                locally available agricultural resources.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-list-section">
        <div className="industries-container">

          <div className="industries-section-heading">

            <div>
              <div className="industries-kicker">
                INDUSTRIES WE SERVE
              </div>

              <h2>
                From farm production
                <span> to processing.</span>
              </h2>
            </div>

            <p>
              Explore the agricultural sectors supported by Agunity's
              machinery fabrication and processing solutions.
            </p>

          </div>

          <div className="industry-list">

            {industries.map((industry) => (
              <article
                className="industry-card"
                id={industry.id}
                key={industry.id}
              >

                <div className="industry-card-number">
                  {industry.number}
                </div>

                <div className="industry-card-image-wrap">
                  <img
                    src={industry.image}
                    alt={`${industry.title} machinery and processing equipment in Uganda`}
                    className="industry-card-image"
                  />

                  <div className="industry-card-image-overlay"></div>

                  <div className="industry-card-image-label">
                    {industry.shortTitle}
                  </div>
                </div>

                <div className="industry-card-content">

                  <div className="industry-card-top">
                    <span className="industry-card-tag">
                      AGRICULTURAL SECTOR
                    </span>

                    <span className="industry-card-arrow">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                  <div className="industry-machine-heading">
                    MACHINERY APPLICATIONS
                  </div>

                  <ul className="industry-machine-list">
                    {industry.machines.map((machine) => (
                      <li key={machine}>
                        <FiCheckCircle />
                        <span>{machine}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/machinery"
                    className="industry-card-link"
                  >
                    View Machinery
                    <FiArrowRight />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="industries-capabilities">
        <div className="industries-container">

          <div className="industries-capabilities-heading">

            <div>
              <div className="industries-kicker">
                OUR CAPABILITIES
              </div>

              <h2>
                More than individual
                <span> machines.</span>
              </h2>
            </div>

            <p>
              Our work can support individual processing requirements as
              well as broader agricultural production and material
              handling applications.
            </p>

          </div>

          <div className="capabilities-grid">

            {capabilities.map((capability) => (
              <div
                className="capability-card"
                key={capability.number}
              >

                <div className="capability-top">
                  <span>{capability.number}</span>
                  <div className="capability-icon">
                    {capability.icon}
                  </div>
                </div>

                <h3>{capability.title}</h3>

                <p>{capability.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="industries-applications">
        <div className="industries-container">

          <div className="applications-layout">

            <div className="applications-heading">

              <div className="industries-kicker">
                WHO WE SERVE
              </div>

              <h2>
                Machinery for
                <span> agricultural businesses.</span>
              </h2>

              <p>
                Our equipment can support different types of agricultural
                enterprises, from organized farmer groups to commercial
                processing businesses.
              </p>

              <Link
                to="/contact"
                className="industries-text-button"
              >
                Discuss Your Requirement
                <FiArrowUpRight />
              </Link>

            </div>

            <div className="applications-list">

              {serviceAreas.map((area, index) => (
                <div
                  className="application-item"
                  key={area}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{area}</strong>

                  <FiArrowUpRight />
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* REGIONAL REACH */}
      <section className="industries-reach">
        <div className="industries-container">

          <div className="reach-grid">

            <div className="reach-content">

              <div className="industries-kicker">
                REGIONAL AGRICULTURAL ENGINEERING
              </div>

              <h2>
                Fabricated in Uganda.
                <span> Built for regional agriculture.</span>
              </h2>

              <p>
                Uganda has a strong agricultural economy and a growing
                demand for local processing and value-addition solutions.
                Agunity focuses on machinery that can support these
                agricultural enterprises.
              </p>

              <p>
                Our regional outlook extends across East African
                agricultural markets where practical processing,
                fabrication and material-handling equipment can support
                local production.
              </p>

              <div className="reach-location">
                <FiMapPin />

                <div>
                  <strong>Gayaza Road, Kampala</strong>
                  <span>Uganda</span>
                </div>
              </div>

            </div>

            <div className="reach-stat-panel">

              <div className="reach-panel-label">
                AGRICULTURAL MACHINERY
              </div>

              <div className="reach-big-number">
                23+
              </div>

              <h3>
                Machinery solutions
                across multiple agricultural sectors.
              </h3>

              <div className="reach-panel-line"></div>

              <div className="reach-panel-bottom">
                <span>COFFEE</span>
                <span>GRAIN</span>
                <span>RICE</span>
                <span>CASSAVA</span>
                <span>FEED</span>
                <span>BIOMASS</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="industries-cta">

        <div className="industries-cta-grid"></div>

        <div className="industries-container industries-cta-inner">

          <div className="industries-cta-content">

            <div className="industries-kicker">
              START YOUR PROJECT
            </div>

            <h2>
              Looking for machinery
              <span> for your operation?</span>
            </h2>

            <p>
              Tell us what you need to process, the scale of your
              operation and the type of equipment you are looking for.
              Our team can discuss a suitable machinery solution.
            </p>

          </div>

          <div className="industries-cta-actions">

            <Link
              to="/request-a-quote"
              className="industries-cta-primary"
            >
              Request a Quote
              <FiArrowUpRight />
            </Link>

            <Link
              to="/machinery"
              className="industries-cta-secondary"
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

export default Industries;