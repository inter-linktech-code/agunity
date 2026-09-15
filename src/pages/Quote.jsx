import React from "react";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

import "./Quote.css";

function Quote() {
  return (
    <div className="quote-page">
      <section className="quote-hero">
        <div>
          <span className="eyebrow">REQUEST A QUOTE</span>

          <h1>
            Let's build the
            <br />
            <span>right machine.</span>
          </h1>

          <p>
            Give us a few details about your processing requirement and our
            team can assess the equipment needed.
          </p>
        </div>

        <div className="quote-benefits">
          <div>
            <FiCheckCircle />
            <span>Machinery selection</span>
          </div>

          <div>
            <FiCheckCircle />
            <span>Custom fabrication</span>
          </div>

          <div>
            <FiCheckCircle />
            <span>Processing solutions</span>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <form className="quote-form">
          <div className="quote-form-header">
            <span>01</span>
            <h2>Your details</h2>
          </div>

          <div className="quote-fields">
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Company / Organisation
              <input type="text" placeholder="Company name" />
            </label>

            <label>
              Phone Number
              <input type="tel" placeholder="Phone number" />
            </label>

            <label>
              Email
              <input type="email" placeholder="Email address" />
            </label>
          </div>

          <div className="quote-form-header second">
            <span>02</span>
            <h2>Machine requirement</h2>
          </div>

          <div className="quote-fields">
            <label>
              Machine / Equipment
              <input
                type="text"
                placeholder="e.g. maize mill, coffee huller"
              />
            </label>

            <label>
              Processing Material
              <input
                type="text"
                placeholder="e.g. maize, coffee, cassava"
              />
            </label>

            <label>
              Desired Capacity
              <input
                type="text"
                placeholder="e.g. 500 kg/hour"
              />
            </label>

            <label>
              Location
              <input
                type="text"
                placeholder="City / District / Country"
              />
            </label>
          </div>

          <label className="quote-message">
            Additional Information
            <textarea
              rows="7"
              placeholder="Tell us anything else about your requirement..."
            />
          </label>

          <button type="submit">
            Submit Quote Request
            <FiArrowUpRight />
          </button>
        </form>
      </section>
    </div>
  );
}

export default Quote;
