import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiSearch,
  FiSettings,
} from "react-icons/fi";

import machineryData from "../data/machineryData";
import "./Machinery.css";

function Machinery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(machineryData.map((machine) => machine.category)),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredMachines = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return machineryData.filter((machine) => {
      const matchesCategory =
        activeCategory === "All" ||
        machine.category === activeCategory;

      const searchableText = `
        ${machine.name}
        ${machine.category}
        ${machine.description}
        ${machine.keywords || ""}
      `.toLowerCase();

      const matchesSearch =
        !search || searchableText.includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const resetCatalogue = () => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  return (
    <div className="machinery-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="machinery-hero">
        <div className="machinery-hero-image" />

        <div className="machinery-hero-grid" />

        <div className="machinery-container machinery-hero-container">
          <div className="machinery-hero-content">
            <div className="machinery-eyebrow">
              ENGINEERING • FABRICATION • AGRO-PROCESSING
            </div>

            <h1>
              Agricultural machinery
              <span> fabricated for production.</span>
            </h1>

            <p>
              Explore agricultural processing machines fabricated
              and supplied by Agunity Investment Ltd for farmers,
              processors, businesses and institutions across Uganda
              and East Africa.
            </p>

            <div className="machinery-hero-actions">
              <a
                href="#machinery-catalogue"
                className="machinery-primary-btn"
              >
                Explore Machinery
                <FiArrowDown />
              </a>

              <Link
                to="/request-a-quote"
                className="machinery-secondary-btn"
              >
                Request a Quote
                <FiArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="machinery-hero-side">
            <div className="machinery-number">
              <strong>{machineryData.length}+</strong>
              <span>Machine solutions</span>
            </div>

            <div className="machinery-number">
              <strong>UGANDA</strong>
              <span>Fabrication & supply</span>
            </div>

            <div className="machinery-number">
              <strong>EAST AFRICA</strong>
              <span>Regional reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="machinery-intro">
        <div className="machinery-container machinery-intro-grid">
          <div>
            <div className="machinery-section-label">
              OUR MACHINERY
            </div>

            <h2>
              Equipment built around
              <span> agricultural production.</span>
            </h2>
          </div>

          <div className="machinery-intro-copy">
            <p>
              From grain threshing and milling to coffee processing,
              cassava processing, animal feed production and material
              handling, Agunity provides machinery designed around
              the practical requirements of agricultural businesses.
            </p>

            <p>
              Our approach combines fabrication, engineering,
              machinery supply, installation and technical support.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATALOGUE
      ===================================================== */}

      <section
        className="machinery-catalogue"
        id="machinery-catalogue"
      >
        <div className="machinery-container">
          <div className="machinery-catalogue-header">
            <div>
              <div className="machinery-section-label">
                MACHINE CATALOGUE
              </div>

              <h2>
                Find the right
                <span> machine.</span>
              </h2>
            </div>

            <p>
              Browse our agricultural processing and fabrication
              solutions.
            </p>
          </div>

          {/* SEARCH + FILTER */}

          <div className="machinery-controls">
            <div className="machinery-search">
              <FiSearch />

              <input
                type="text"
                placeholder="Search machinery..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                aria-label="Search machinery"
              />
            </div>

            <div className="machinery-filter">
              <FiSettings />

              <select
                value={activeCategory}
                onChange={(event) =>
                  setActiveCategory(event.target.value)
                }
                aria-label="Filter machinery by category"
              >
                {categories.map((category) => (
                  <option
                    value={category}
                    key={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* CATEGORY BUTTONS */}

          <div className="machinery-category-list">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* RESULTS BAR */}

          <div className="machinery-results-bar">
            <span>
              Showing{" "}
              <strong>{filteredMachines.length}</strong>{" "}
              machine
              {filteredMachines.length === 1 ? "" : "s"}
            </span>

            {(searchTerm || activeCategory !== "All") && (
              <button
                type="button"
                onClick={resetCatalogue}
              >
                Clear filters
              </button>
            )}
          </div>

          {/* MACHINE GRID */}

          {filteredMachines.length > 0 ? (
            <div className="machinery-grid">
              {filteredMachines.map((machine, index) => (
                <article
                  className="machinery-card"
                  key={machine.id || machine.name}
                >
                  <Link
                    to={`/machinery/${machine.id}`}
                    className="machinery-card-image-link"
                    aria-label={`View ${machine.name}`}
                  >
                    <div className="machinery-card-visual">
                      <div className="machinery-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {machine.image ? (
                        <img
                          src={machine.image}
                          alt={`${machine.name} - Agunity Investment Ltd Uganda`}
                          className="machinery-card-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="machinery-image-fallback">
                          <FiSettings />
                          <span>
                            {machine.name}
                          </span>
                        </div>
                      )}

                      <div className="machinery-card-overlay">
                        <span>
                          View Machine
                          <FiArrowUpRight />
                        </span>
                      </div>

                      <div className="machinery-card-tag">
                        AGUNITY
                      </div>
                    </div>
                  </Link>

                  <div className="machinery-card-content">
                    <div className="machinery-card-category">
                      {machine.category}
                    </div>

                    <h3>{machine.name}</h3>

                    <p>
                      {machine.description}
                    </p>

                    <div className="machinery-card-footer">
                      <Link
                        to={`/machinery/${machine.id}`}
                      >
                        View Machine
                        <FiArrowUpRight />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="machinery-empty">
              <FiSearch />

              <h3>
                No machinery found
              </h3>

              <p>
                Try another search term or select a
                different machinery category.
              </p>

              <button
                type="button"
                onClick={resetCatalogue}
              >
                Reset Catalogue
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          FABRICATION
      ===================================================== */}

      <section className="machinery-fabrication">
        <div className="machinery-container">
          <div className="fabrication-card">
            <div className="fabrication-content">
              <div className="machinery-section-label">
                CUSTOM FABRICATION
              </div>

              <h2>
                Need machinery built
                <span> around your process?</span>
              </h2>

              <p>
                Agricultural operations do not always fit into
                standard equipment. Agunity can fabricate and
                modify machinery according to your production
                requirements, available space and intended
                application.
              </p>

              <div className="fabrication-points">
                <div>
                  <FiCheck />
                  <span>
                    Custom machine fabrication
                  </span>
                </div>

                <div>
                  <FiCheck />
                  <span>
                    Machine modification
                  </span>
                </div>

                <div>
                  <FiCheck />
                  <span>
                    Production-line integration
                  </span>
                </div>

                <div>
                  <FiCheck />
                  <span>
                    Installation & technical support
                  </span>
                </div>
              </div>

              <Link
                to="/request-a-quote"
                className="machinery-primary-btn"
              >
                Discuss Your Requirement
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="fabrication-mark">
              <FiSettings />
              <span>FABRICATED IN UGANDA</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="machinery-applications">
        <div className="machinery-container">
          <div className="applications-header">
            <div>
              <div className="machinery-section-label">
                APPLICATIONS
              </div>

              <h2>
                Machinery for the
                <span> processing chain.</span>
              </h2>
            </div>

            <p>
              Equipment for different stages of agricultural
              processing, handling and production.
            </p>
          </div>

          <div className="applications-grid">
            <div className="application-item">
              <span>01</span>
              <h3>Threshing</h3>
              <p>
                Equipment for separating grain from harvested
                crops.
              </p>
            </div>

            <div className="application-item">
              <span>02</span>
              <h3>Milling</h3>
              <p>
                Milling solutions for grains, cassava and animal
                feed production.
              </p>
            </div>

            <div className="application-item">
              <span>03</span>
              <h3>Hulling</h3>
              <p>
                Machinery for removing husks and processing
                agricultural products.
              </p>
            </div>

            <div className="application-item">
              <span>04</span>
              <h3>Material Handling</h3>
              <p>
                Conveyors and elevators for moving processed
                materials efficiently.
              </p>
            </div>

            <div className="application-item">
              <span>05</span>
              <h3>Animal Feed</h3>
              <p>
                Machines supporting feed preparation, mixing and
                milling.
              </p>
            </div>

            <div className="application-item">
              <span>06</span>
              <h3>Biomass Processing</h3>
              <p>
                Equipment for biomass, silage and briquette
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="machinery-cta">
        <div className="machinery-container">
          <div className="machinery-cta-inner">
            <div className="machinery-section-label">
              START A PROJECT
            </div>

            <h2>
              Tell us what you
              <span> need to process.</span>
            </h2>

            <p>
              Share your crop, production capacity and processing
              requirements. Our team can help identify or fabricate
              the right machinery solution.
            </p>

            <div className="machinery-cta-actions">
              <Link
                to="/request-a-quote"
                className="machinery-primary-btn"
              >
                Request a Quote
                <FiArrowUpRight />
              </Link>

              <Link
                to="/contact"
                className="machinery-secondary-btn"
              >
                Contact Agunity
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Machinery;