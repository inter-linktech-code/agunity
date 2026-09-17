import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiArrowUpRight,
  FiCheckCircle,
  FiMapPin,
  FiSettings,
} from "react-icons/fi";

import coffeeHuller from "../assets/coffee-huller.jpg";
import maizeHullerMill from "../assets/maize-huller-mill.jpg";
import riceHuller from "../assets/rice-huller.jpg";
import cassavaMill from "../assets/cassava-mill.jpg";
import animalFeedMill from "../assets/animal-feed-mill.jpg";
import bucketElevator from "../assets/bucket-elevator.jpg";

import "./FAQ.css";

const faqs = [
  {
    question: "What type of machinery does Agunity supply?",
    answer:
      "Agunity Investment Ltd supplies agricultural and agro-processing machinery for different stages of crop processing and value addition. Our machinery range includes coffee hullers and wet pulpers, maize hullers and mills, maize shellers, grain threshers, rice threshers and hullers, cassava chippers and mills, millet mills, animal feed mixers and mills, seed cleaners, material-handling equipment, briquette machines, silage machines, chaff cutters and other processing equipment.",
  },

  {
    question: "Does Agunity fabricate machines in Uganda?",
    answer:
      "Yes. Agunity Investment Ltd is an agricultural machinery fabrication and engineering business based in Kampala, Uganda. The company develops and supplies machinery for agricultural processing applications and can also assess requirements for custom fabrication, equipment modification and processing systems.",
  },

  {
    question: "Can Agunity build a machine according to our requirements?",
    answer:
      "Yes. Custom requirements can be discussed with the Agunity team. If a standard machine does not meet your application, we can assess the product you want to process, expected production capacity, available power, operating environment and other technical requirements before determining the appropriate machine or fabrication approach.",
  },

  {
    question: "Do you install and commission machinery?",
    answer:
      "Installation and commissioning depend on the type and scope of the machinery supplied. For individual machines, the requirement can be discussed during the quotation process. Where several machines form a processing line or larger installation, installation, positioning, integration and commissioning requirements can be assessed as part of the project.",
  },

  {
    question: "Do you supply machines outside Kampala?",
    answer:
      "Yes. Agunity is based in Kampala and serves customers and agricultural businesses across Uganda. Machinery requirements outside Kampala can be discussed with the team so that transport, delivery, installation requirements and the operating location can be considered when preparing the quotation.",
  },

  {
    question: "Can Agunity supply machinery to other East African countries?",
    answer:
      "Agunity can discuss machinery enquiries from customers outside Uganda. Customers in East African markets should provide their location, intended application, machine requirement, production capacity and any applicable delivery or installation requirements so the team can assess the project and provide the appropriate commercial information.",
  },

  {
    question: "How do I get a quotation for a machine?",
    answer:
      "Start by selecting the machine you are interested in and tell us what you intend to process. It is also helpful to provide your required production capacity, quantity of machines, location and available power supply. You can submit these details through our Request a Quote page or contact Agunity directly through WhatsApp or phone.",
  },

  {
    question: "What information should I provide when requesting a quotation?",
    answer:
      "The more information you provide, the easier it is to assess the requirement. Useful details include the crop or material being processed, the machine required, expected capacity in kilograms or tonnes per hour, quantity required, available power source, location, intended use, project timeline and whether you require a single machine, several machines or a complete processing setup.",
  },

  {
    question: "Can Agunity help me choose the right machine?",
    answer:
      "Yes. You do not necessarily need to know the exact machine name before contacting us. Tell us what agricultural product you are processing, what you want the machine to do, your expected production volume and the type of operation you are planning. The team can then assess the requirement and identify the relevant machinery category or processing equipment.",
  },

  {
    question: "Can I request more than one machine in the same quotation?",
    answer:
      "Yes. If your operation requires several machines, you can include multiple machines in one enquiry. This is particularly useful when you are developing a processing setup that may require equipment such as a cleaner, thresher, huller, mill, conveyor or other material-handling machinery.",
  },

  {
    question: "Can Agunity develop a complete agro-processing setup?",
    answer:
      "Agunity can discuss requirements involving multiple machines and processing stages. Where a project requires several pieces of equipment to work together, provide details about the product, desired processing stages, production capacity, available space and power supply. The requirement can then be assessed as a wider machinery or processing-system project.",
  },

  {
    question: "What crops and agricultural products can your machinery process?",
    answer:
      "The machinery range covers several agricultural processing applications, including coffee, maize, rice, cassava, millet, sorghum, groundnuts and other grains and agricultural materials. Animal feed, biomass and material-handling applications are also covered by specific equipment in the catalogue. The suitability of a particular machine depends on the material and required processing operation.",
  },
];

const machineHighlights = [
  {
    name: "Coffee Huller Machine",
    category: "Coffee Processing",
    image: coffeeHuller,
    text: "Equipment for coffee hulling and post-harvest processing.",
  },
  {
    name: "Maize Huller & Mill",
    category: "Maize Processing",
    image: maizeHullerMill,
    text: "Combined machinery for maize hulling and milling applications.",
  },
  {
    name: "Rice Huller",
    category: "Rice Processing",
    image: riceHuller,
    text: "Rice processing equipment for agricultural processors.",
  },
  {
    name: "Cassava Mill",
    category: "Cassava Processing",
    image: cassavaMill,
    text: "Milling equipment for cassava processing and value addition.",
  },
  {
    name: "Animal Feed Mill",
    category: "Animal Feed",
    image: animalFeedMill,
    text: "Machinery for producing processed livestock and poultry feed.",
  },
  {
    name: "Bucket Elevator",
    category: "Material Handling",
    image: bucketElevator,
    text: "Vertical material-handling equipment for processing operations.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="faq-hero">
        <div className="faq-hero-grid">
          <div className="faq-hero-content">
            <span className="eyebrow">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h1>
              Questions before
              <br />
              <span>you build.</span>
            </h1>

            <p>
              Clear answers about Agunity machinery, agricultural
              processing equipment, fabrication, quotations and
              project requirements in Uganda and beyond.
            </p>

            <div className="faq-hero-actions">
              <Link
                to="/machinery"
                className="faq-primary-button"
              >
                Explore Machinery
                <FiArrowUpRight />
              </Link>

              <Link
                to="/request-a-quote"
                className="faq-outline-button"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="faq-hero-visual">
            <div className="faq-hero-image">
              <img
                src={coffeeHuller}
                alt="Coffee huller machine fabricated for agricultural processing in Uganda"
              />
            </div>

            <div className="faq-hero-card">
              <span>AGUNITY MACHINERY</span>
              <strong>Built around the processing requirement.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="faq-introduction">
        <div className="faq-container">
          <div className="faq-introduction-grid">

            <div className="faq-section-marker">
              <span>01</span>
              <div />
              <small>FAQ</small>
            </div>

            <div className="faq-introduction-content">
              <span className="faq-kicker">
                BEFORE YOU REQUEST A MACHINE
              </span>

              <h2>
                The right machine starts with
                <span> the right requirement.</span>
              </h2>

              <p>
                Agricultural processing requirements are different from
                one operation to another. Production capacity, crop type,
                available power, location and the intended output can all
                affect the machinery required.
              </p>

              <p>
                These answers explain the information Agunity needs to
                understand your requirement and help you move from an
                initial enquiry to the appropriate machinery solution.
              </p>

              <div className="faq-intro-points">
                <div>
                  <FiCheckCircle />
                  <span>Standard agricultural machinery</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Custom fabrication requirements</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Multiple-machine processing setups</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="faq-section">
        <div className="faq-container">

          <div className="faq-section-heading">
            <div>
              <span className="faq-kicker">
                ANSWERS
              </span>

              <h2>
                Frequently asked
                <span> questions.</span>
              </h2>
            </div>

            <p>
              If your question is not covered below, send us your
              machinery requirement and our team can discuss the
              application with you.
            </p>
          </div>

          <div className="faq-content-grid">

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "open" : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span>
                        <small>
                          {String(index + 1).padStart(2, "0")}
                        </small>

                        {faq.question}
                      </span>

                      <div className="faq-icon">
                        {isOpen ? (
                          <FiMinus />
                        ) : (
                          <FiPlus />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        className="faq-answer"
                        id={`faq-answer-${index}`}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* FAQ SIDEBAR */}
            <aside className="faq-sidebar">

              <div className="faq-sidebar-card">
                <div className="faq-sidebar-icon">
                  <FiSettings />
                </div>

                <span className="faq-kicker">
                  NEED A MACHINE?
                </span>

                <h3>
                  Tell us what
                  <br />
                  you need to process.
                </h3>

                <p>
                  You don't have to know the exact machine name.
                  Tell us your crop, required output and expected
                  capacity and we can discuss the appropriate
                  equipment.
                </p>

                <Link
                  to="/request-a-quote"
                  className="faq-sidebar-button"
                >
                  Start Your Enquiry
                  <FiArrowUpRight />
                </Link>
              </div>

              <div className="faq-location-card">
                <FiMapPin />

                <div>
                  <span>BASED IN</span>
                  <strong>
                    Gayaza Road
                    <br />
                    Kampala, Uganda
                  </strong>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* =====================================================
          MACHINERY HIGHLIGHTS
      ===================================================== */}
      <section className="faq-machinery">
        <div className="faq-container">

          <div className="faq-machinery-heading">
            <div>
              <span className="faq-kicker">
                REAL MACHINERY
              </span>

              <h2>
                See some of the equipment
                <span> we supply.</span>
              </h2>
            </div>

            <Link
              to="/machinery"
              className="faq-text-link"
            >
              View Complete Catalogue
              <FiArrowUpRight />
            </Link>
          </div>

          <div className="faq-machine-grid">
            {machineHighlights.map((machine) => (
              <Link
                to="/machinery"
                className="faq-machine-card"
                key={machine.name}
              >
                <div className="faq-machine-image">
                  <img
                    src={machine.image}
                    alt={`${machine.name} - ${machine.category} machinery in Uganda`}
                  />

                  <span className="faq-machine-category">
                    {machine.category}
                  </span>
                </div>

                <div className="faq-machine-content">
                  <h3>{machine.name}</h3>

                  <p>{machine.text}</p>

                  <span className="faq-machine-link">
                    View Machinery
                    <FiArrowUpRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="faq-cta">
        <div className="faq-container">
          <div className="faq-cta-inner">

            <div>
              <span className="eyebrow">
                STILL NEED HELP?
              </span>

              <h2>
                Let's discuss your
                <br />
                <span>machine requirement.</span>
              </h2>

              <p>
                Tell us what you are processing, what you want
                to achieve and where your operation is located.
              </p>
            </div>

            <div className="faq-cta-actions">
              <Link to="/request-a-quote">
                Request a Quote
                <FiArrowUpRight />
              </Link>

              <a
                href="https://wa.me/256789409761"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Agunity
                <FiArrowUpRight />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default FAQ;