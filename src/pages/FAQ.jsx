import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiArrowUpRight,
} from "react-icons/fi";

import "./FAQ.css";

const faqs = [
  {
    question: "What type of machinery does Agunity supply?",
    answer:
      "Agunity Investment Ltd supplies agricultural processing machinery for coffee, maize, rice, cassava, grains, animal feed, biomass and material handling applications.",
  },
  {
    question: "Does Agunity fabricate machines in Uganda?",
    answer:
      "Yes. Agunity is positioned around agricultural machinery fabrication and engineering in Uganda. We can also assess requirements for custom machinery and machine modifications.",
  },
  {
    question: "Can you build a machine according to our requirements?",
    answer:
      "Yes. If your requirement does not fit a standard machine, you can discuss custom fabrication or modification with our team. We assess the application, material being processed and desired production capacity.",
  },
  {
    question: "Do you install machinery?",
    answer:
      "Installation and commissioning can be discussed as part of a machinery project, particularly where several machines form part of a processing setup.",
  },
  {
    question: "Do you supply machines outside Kampala?",
    answer:
      "Yes. Agunity serves customers across Uganda and can discuss machinery requirements for customers in other East African markets.",
  },
  {
    question: "How do I get a machine quotation?",
    answer:
      "Send us the machine you are interested in, what you intend to process, your preferred production capacity and your location. Our team can then assess the requirement and provide the appropriate quotation.",
  },
  {
    question: "What information should I provide when requesting a quotation?",
    answer:
      "Useful information includes the agricultural product you process, required machine, expected production capacity, power availability, location and whether you require installation or a wider processing system.",
  },
  {
    question: "Can Agunity help me choose the right machine?",
    answer:
      "Yes. If you are unsure which machine is appropriate, tell us what you want to process and what you want the final output to be. We can help identify the relevant machinery category and processing requirement.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <span className="eyebrow">
          FREQUENTLY ASKED QUESTIONS
        </span>

        <h1>
          Questions before
          <br />
          <span>you build.</span>
        </h1>

        <p>
          Find answers to common questions about agricultural machinery,
          fabrication, installation and agro-processing solutions from
          Agunity Investment Ltd.
        </p>
      </section>

      <section className="faq-section">
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="faq-cta">
        <div>
          <span className="eyebrow">
            STILL NEED HELP?
          </span>

          <h2>
            Let's discuss your
            <br />
            <span>machine requirement.</span>
          </h2>
        </div>

        <Link to="/request-a-quote">
          Request a Quote
          <FiArrowUpRight />
        </Link>
      </section>
    </div>
  );
}

export default FAQ;

