import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiTool,
  FiShield,
  FiTrendingUp,
  FiSettings,
  FiUsers,
  FiTarget,
  FiCpu,
  FiLayers,
  FiTruck,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";

import coffeeHuller from "../assets/coffee-huller.jpg";
import coffeeWetPulper from "../assets/coffee-wet-pulper.jpg";
import maizeHullerMill from "../assets/maize-huller-mill.jpg";
import maizeSheller from "../assets/maize-sheller.jpg";
import multipleThresher from "../assets/multiple-thresher.jpg";
import riceHuller from "../assets/rice-huller.jpg";
import cassavaMill from "../assets/cassava-mill.jpg";
import animalFeedMill from "../assets/animal-feed-mill.jpg";
import seedCleaner from "../assets/seed-cleaner.jpg";
import bucketElevator from "../assets/bucket-elevator.jpg";
import screwConveyor from "../assets/screw-conveyor.jpg";
import briquetteMachine from "../assets/briquette-machine.jpg";

import "./WhyAgunity.css";

const reasons = [
  {
    icon: FiTool,
    number: "01",
    title: "Fabrication expertise",
    text:
      "Agunity approaches agricultural machinery from an engineering and fabrication perspective. Our equipment range is built around practical processing applications rather than simply presenting machines as catalogue products.",
  },
  {
    icon: FiSettings,
    number: "02",
    title: "Application-led solutions",
    text:
      "The machine you need depends on what you are processing, the stage of processing, the required output and the environment in which the equipment will operate. We start with that requirement.",
  },
  {
    icon: FiTrendingUp,
    number: "03",
    title: "Production focused",
    text:
      "Machinery is part of a production system. We consider processing stages, material movement, machine interaction and the operational objective when discussing equipment requirements.",
  },
  {
    icon: FiShield,
    number: "04",
    title: "Built for demanding work",
    text:
      "Agricultural processing environments can be demanding. Equipment needs to be practical, serviceable and suitable for the operating conditions in which farmers, processors and businesses use it.",
  },
  {
    icon: FiUsers,
    number: "05",
    title: "Customer focused",
    text:
      "We work from the customer's requirement. Whether you need one machine or several pieces of equipment, the objective is to understand the operation before determining the appropriate machinery.",
  },
  {
    icon: FiCheck,
    number: "06",
    title: "Value conscious",
    text:
      "Our approach is focused on practical machinery solutions that address the actual processing requirement without introducing unnecessary complexity into the operation.",
  },
];

const capabilityCards = [
  {
    icon: FiTool,
    title: "Machine Fabrication",
    text:
      "Agricultural processing equipment developed around practical crop processing and value-addition applications.",
  },
  {
    icon: FiSettings,
    title: "Machine Modification",
    text:
      "Where a standard configuration does not fit the application, technical requirements can be discussed for modification or custom fabrication.",
  },
  {
    icon: FiLayers,
    title: "Processing Systems",
    text:
      "Multiple machines can be considered together where a project requires several processing stages or material-handling operations.",
  },
  {
    icon: FiTruck,
    title: "Material Handling",
    text:
      "Equipment such as bucket elevators and screw conveyors supports movement of agricultural products between processing stages.",
  },
];

const machineryHighlights = [
  {
    image: coffeeHuller,
    category: "COFFEE PROCESSING",
    title: "Coffee Huller Machine",
    text:
      "Equipment for coffee hulling and post-harvest processing applications.",
  },
  {
    image: coffeeWetPulper,
    category: "COFFEE PROCESSING",
    title: "Coffee Wet Pulper",
    text:
      "Machinery for coffee wet pulping and early-stage coffee processing.",
  },
  {
    image: maizeHullerMill,
    category: "MAIZE PROCESSING",
    title: "Maize Huller & Mill",
    text:
      "Combined maize hulling and milling equipment for agricultural processors.",
  },
  {
    image: maizeSheller,
    category: "MAIZE PROCESSING",
    title: "Maize Sheller",
    text:
      "Machinery for efficient separation of maize grain from harvested cobs.",
  },
  {
    image: multipleThresher,
    category: "GRAIN PROCESSING",
    title: "Multiple Thresher",
    text:
      "Multi-purpose threshing equipment for agricultural grain-processing applications.",
  },
  {
    image: riceHuller,
    category: "RICE PROCESSING",
    title: "Rice Huller",
    text:
      "Rice hulling machinery for agricultural processors and commercial operations.",
  },
  {
    image: cassavaMill,
    category: "CASSAVA PROCESSING",
    title: "Cassava Mill",
    text:
      "Milling equipment supporting cassava processing and value addition.",
  },
  {
    image: animalFeedMill,
    category: "ANIMAL FEED",
    title: "Animal Feed Mill",
    text:
      "Feed milling equipment for livestock and poultry feed-processing operations.",
  },
  {
    image: seedCleaner,
    category: "SEED PROCESSING",
    title: "Seed Cleaner",
    text:
      "Equipment for cleaning harvested grain and seed before further processing.",
  },
  {
    image: bucketElevator,
    category: "MATERIAL HANDLING",
    title: "Bucket Elevator",
    text:
      "Vertical material-handling equipment for moving agricultural products between stages.",
  },
  {
    image: screwConveyor,
    category: "MATERIAL HANDLING",
    title: "Screw Conveyor",
    text:
      "Controlled conveying equipment for grain and agricultural materials.",
  },
  {
    image: briquetteMachine,
    category: "BIOMASS",
    title: "Briquette Machine",
    text:
      "Equipment for processing suitable biomass materials into briquettes.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    text:
      "We begin with the agricultural product, processing objective, expected production level and operating environment.",
  },
  {
    number: "02",
    title: "Assess",
    text:
      "The requirement is considered against the appropriate machinery category, processing stage, capacity and equipment configuration.",
  },
  {
    number: "03",
    title: "Engineer",
    text:
      "Where required, the machinery solution can be discussed from a fabrication, modification or system-integration perspective.",
  },
  {
    number: "04",
    title: "Build",
    text:
      "The objective is practical equipment that can perform its intended processing function within the customer's operation.",
  },
];

function WhyAgunity() {
  return (
    <div className="why-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="why-hero">
        <div className="why-hero-grid">

          <div className="why-hero-content">
            <span className="eyebrow">
              WHY AGUNITY
            </span>

            <h1>
              Engineering
              <br />
              <span>that works.</span>
            </h1>

            <p>
              Agricultural machinery should do more than look good on a
              specification sheet. It should make sense for the crop,
              production process and operating environment it enters.
            </p>

            <div className="why-hero-actions">
              <Link
                to="/machinery"
                className="why-primary-button"
              >
                Explore Our Machinery
                <FiArrowUpRight />
              </Link>

              <Link
                to="/request-a-quote"
                className="why-outline-button"
              >
                Discuss Your Requirement
              </Link>
            </div>

            <div className="why-hero-meta">
              <div>
                <strong>23+</strong>
                <span>Machine Types</span>
              </div>

              <div>
                <strong>UGANDA</strong>
                <span>Based in Kampala</span>
              </div>

              <div>
                <strong>AGRO</strong>
                <span>Processing Focus</span>
              </div>
            </div>
          </div>

          <div className="why-hero-visual">

            <div className="why-hero-main-image">
              <img
                src={coffeeHuller}
                alt="Coffee huller machine fabricated for agricultural processing in Uganda"
              />
            </div>

            <div className="why-hero-secondary-image">
              <img
                src={maizeHullerMill}
                alt="Maize huller and mill agricultural processing machine in Uganda"
              />
            </div>

            <div className="why-hero-machine-label">
              <span>AGUNITY MACHINERY</span>
              <strong>
                Practical equipment.
                <br />
                Real production.
              </strong>
            </div>

            <div className="why-hero-grid-pattern" />
          </div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="why-introduction">
        <div className="why-container">

          <div className="why-introduction-grid">

            <div className="why-section-marker">
              <span>01</span>
              <div />
              <small>OUR DIFFERENCE</small>
            </div>

            <div className="why-introduction-content">
              <span className="why-kicker">
                MORE THAN A MACHINE
              </span>

              <h2>
                The equipment matters.
                <br />
                <span>So does everything around it.</span>
              </h2>

              <p className="why-lead">
                A successful agricultural processing operation is rarely
                about one machine in isolation. The machine has to fit the
                material, production target, available power, workspace,
                processing sequence and the people operating it.
              </p>

              <div className="why-introduction-columns">
                <p>
                  This is why Agunity approaches machinery from an
                  application and fabrication perspective. Instead of
                  starting with a machine name alone, we look at the
                  requirement behind the machine.
                </p>

                <p>
                  From coffee and maize processing to rice, cassava,
                  animal feed, grain handling, biomass and material
                  movement, our equipment range is designed around
                  practical agricultural processing needs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY DIFFERENT
      ===================================================== */}
      <section className="why-reasons">
        <div className="why-container">

          <div className="why-section-heading">
            <div>
              <span className="why-kicker">
                OUR DIFFERENCE
              </span>

              <h2>
                Fabrication first.
                <br />
                <span>Production always.</span>
              </h2>
            </div>

            <p>
              Agunity's approach is centred on practical agricultural
              machinery and the production environments in which that
              equipment will operate.
            </p>
          </div>

          <div className="why-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  className="why-card"
                  key={reason.title}
                >
                  <div className="why-card-top">
                    <span>{reason.number}</span>

                    <div className="why-card-icon">
                      <Icon />
                    </div>
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>

                  <div className="why-card-line" />
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          REAL MACHINERY
      ===================================================== */}
      <section className="why-machinery">

        <div className="why-container">

          <div className="why-machinery-heading">
            <div>
              <span className="why-kicker">
                REAL EQUIPMENT
              </span>

              <h2>
                Machines for
                <br />
                <span>real processing.</span>
              </h2>
            </div>

            <div className="why-machinery-heading-copy">
              <p>
                Explore examples from Agunity's agricultural machinery
                range. Each machine serves a particular processing,
                handling or value-addition application.
              </p>

              <Link
                to="/machinery"
                className="why-text-link"
              >
                View Complete Machinery Catalogue
                <FiArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="why-machine-grid">

            {machineryHighlights.map((machine, index) => (
              <Link
                to="/machinery"
                className="why-machine-card"
                key={machine.title}
              >
                <div className="why-machine-image">

                  <img
                    src={machine.image}
                    alt={`${machine.title} ${machine.category.toLowerCase()} machinery supplied by Agunity Investment Ltd Uganda`}
                  />

                  <span className="why-machine-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="why-machine-category">
                    {machine.category}
                  </span>

                  <div className="why-machine-overlay">
                    <FiArrowUpRight />
                  </div>
                </div>

                <div className="why-machine-content">
                  <h3>{machine.title}</h3>

                  <p>{machine.text}</p>

                  <span>
                    View Machinery
                    <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="why-capabilities">
        <div className="why-container">

          <div className="why-capabilities-grid">

            <div className="why-capabilities-image">

              <img
                src={bucketElevator}
                alt="Bucket elevator material handling machine for agricultural processing"
              />

              <div className="why-capabilities-image-label">
                <span>ENGINEERING CAPABILITY</span>
                <strong>
                  From individual machines
                  <br />
                  to connected systems.
                </strong>
              </div>

            </div>

            <div className="why-capabilities-content">

              <span className="why-kicker">
                WHAT WE CAN DO
              </span>

              <h2>
                Equipment built around
                <span> the application.</span>
              </h2>

              <p className="why-capabilities-lead">
                Agricultural processing does not always fit into a
                standard machine category. Agunity can discuss individual
                machines, machine modifications and projects involving
                several connected processing stages.
              </p>

              <div className="why-capability-list">

                {capabilityCards.map((capability) => {
                  const Icon = capability.icon;

                  return (
                    <div
                      className="why-capability-item"
                      key={capability.title}
                    >
                      <div className="why-capability-icon">
                        <Icon />
                      </div>

                      <div>
                        <h3>{capability.title}</h3>
                        <p>{capability.text}</p>
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}
      <section className="why-approach">

        <div className="why-container">

          <div className="why-approach-heading">

            <div className="why-section-marker dark-marker">
              <span>02</span>
              <div />
              <small>OUR APPROACH</small>
            </div>

            <div>
              <span className="why-kicker">
                FROM REQUIREMENT TO EQUIPMENT
              </span>

              <h2>
                Understand.
                <br />
                Assess.
                <br />
                <span>Engineer. Build.</span>
              </h2>
            </div>

          </div>

          <div className="why-approach-grid">

            {approachSteps.map((step, index) => (
              <article
                className="why-approach-card"
                key={step.number}
              >
                <div className="why-approach-number">
                  {step.number}
                </div>

                <div className="why-approach-line" />

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                {index < approachSteps.length - 1 && (
                  <FiArrowRight className="why-approach-arrow" />
                )}
              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}
      <section className="why-serve">

        <div className="why-container">

          <div className="why-serve-heading">

            <span className="why-kicker">
              WHO WE WORK WITH
            </span>

            <h2>
              Machinery for
              <span> agricultural enterprise.</span>
            </h2>

            <p>
              Agunity machinery can support different types of
              agricultural and agro-processing operations. The specific
              machine requirement depends on the product, processing
              stage and production objective.
            </p>

          </div>

          <div className="why-serve-grid">

            <div className="why-serve-card">
              <FiUsers />
              <h3>Farmers & Farmer Groups</h3>
              <p>
                Equipment for farmers and organised agricultural groups
                seeking to improve post-harvest processing and value
                addition.
              </p>
            </div>

            <div className="why-serve-card">
              <FiSettings />
              <h3>Agro-Processors</h3>
              <p>
                Machinery for businesses processing coffee, maize, rice,
                cassava, grains and other agricultural products.
              </p>
            </div>

            <div className="why-serve-card">
              <FiTrendingUp />
              <h3>Commercial Enterprises</h3>
              <p>
                Processing equipment for commercial operations looking
                to establish, expand or improve agricultural production
                capacity.
              </p>
            </div>

            <div className="why-serve-card">
              <FiTarget />
              <h3>Agricultural Projects</h3>
              <p>
                Machinery requirements for institutional, development
                and agricultural projects requiring practical processing
                equipment.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          UGANDA / LOCATION
      ===================================================== */}
      <section className="why-location">

        <div className="why-container">

          <div className="why-location-grid">

            <div className="why-location-content">

              <span className="why-kicker">
                BASED IN UGANDA
              </span>

              <h2>
                Engineering from
                <br />
                <span>Kampala.</span>
              </h2>

              <p>
                Agunity Investment Ltd is based along Gayaza Road in
                Kampala, Uganda. Our focus is agricultural machinery and
                processing equipment for customers and agricultural
                businesses operating in Uganda and the wider East African
                market.
              </p>

              <div className="why-location-details">

                <div>
                  <FiMapPin />

                  <span>
                    <strong>Location</strong>
                    Gayaza Road, Kampala, Uganda
                  </span>
                </div>

                <div>
                  <FiCheckCircle />

                  <span>
                    <strong>Focus</strong>
                    Agricultural machinery & fabrication
                  </span>
                </div>

              </div>

              <Link
                to="/contact"
                className="why-primary-button"
              >
                Contact Agunity
                <FiArrowUpRight />
              </Link>

            </div>

            <div className="why-location-images">

              <div className="why-location-image-large">
                <img
                  src={animalFeedMill}
                  alt="Animal feed mill agricultural machinery in Uganda"
                />
              </div>

              <div className="why-location-image-small">
                <img
                  src={screwConveyor}
                  alt="Screw conveyor agricultural material handling machine"
                />
              </div>

              <div className="why-location-badge">
                <strong>UGANDA</strong>
                <span>AGRICULTURAL ENGINEERING</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="why-final-cta">

        <div className="why-container">

          <div className="why-final-cta-inner">

            <div>
              <span className="why-kicker">
                HAVE A PROCESSING REQUIREMENT?
              </span>

              <h2>
                Tell us what you want
                <br />
                <span>to build.</span>
              </h2>

              <p>
                You do not need to know every technical specification
                before contacting us. Tell us what you are processing,
                your expected output and where you are located.
              </p>
            </div>

            <div className="why-final-actions">

              <Link
                to="/request-a-quote"
                className="why-final-primary"
              >
                Request a Quote
                <FiArrowUpRight />
              </Link>

              <Link
                to="/machinery"
                className="why-final-secondary"
              >
                Explore Machinery
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default WhyAgunity;