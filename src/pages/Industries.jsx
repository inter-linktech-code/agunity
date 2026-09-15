import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiFilter,
  FiSearch,
  FiSettings,
  FiTool,
  FiX,
} from "react-icons/fi";

import machineryData from "../data/machineryData";

import "./Machinery.css";

const categories = [
  "All Machinery",
  "Coffee Processing",
  "Maize Processing",
  "Rice Processing",
  "Cassava Processing",
  "Grain Processing",
  "Animal Feed",
  "Material Handling",
  "Seed Processing",
  "Biomass",
  "Construction",
  "Processing & Fabrication",
];

const featuredIds = [
  "coffee-huller",
  "coffee-wet-pulper",
  "maize-huller-mill",
  "rice-huller",
  "cassava-mill",
  "animal-feed-mill",
];

function Machinery() {
  const [activeCategory, setActiveCategory] =
    useState("All Machinery");

  const [searchTerm, setSearchTerm] = useState("");

  const [mobileFilterOpen, setMobileFilterOpen] =
    useState(false);

  const filteredMachines = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return machineryData.filter((machine) => {
      const matchesCategory =
        activeCategory === "All Machinery" ||
        machine.category === activeCategory;

      const matchesSearch =
        !search ||
        machine.name.toLowerCase().includes(search) ||
        machine.category.toLowerCase().includes(search) ||
        machine.description.toLowerCase().includes(search) ||
        machine.keywords.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featuredMachines = machineryData.filter((machine) =>
    featuredIds.includes(machine.id)
  );

  return (
    <div className="machinery-page">

      {/* HERO */}
      <section className="machinery-hero">
        <div className="machinery-hero-grid"></div>

        <div className="machinery-container machinery-hero-inner">

          <div className="machinery-breadcrumb">
            <Link to="/">Home</Link>
            <FiChevronDown />
            <span>Machinery</span>
          </div>

          <div className="machinery-hero-content">

            <div className="machinery-eyebrow">
              <span></span>
              AGUNITY / MACHINERY
            </div>

            <h1>
              Agricultural machinery
              <em> fabricated for production.</em>
            </h1>

            <p>
              Explore Agunity Investment Ltd's range of
              agricultural processing machinery fabricated and
              supplied from Kampala, Uganda for farmers,
              processors, cooperatives and agro-industrial
              businesses across East Africa.
            </p>

            <div className="machinery-hero-actions">

              <a
                href="#catalogue"
                className="machinery-primary-button"
              >
                Explore Catalogue
                <FiArrowRight />
              </a>

              <Link
                to="/request-a-quote"
                className="machinery-outline-button"
              >
                Discuss Your Requirements
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

          <div className="machinery-hero-stat">

            <div className="stat-line"></div>

            <div>
              <strong>{machineryData.length}+</strong>

              <span>
                MACHINERY
                <br />
                SOLUTIONS
              </span>
            </div>

            <div className="stat-divider"></div>

            <div>
              <strong>EA</strong>

              <span>
                EAST AFRICA
                <br />
                MARKET
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="machinery-intro">

        <div className="machinery-container">

          <div className="machinery-intro-grid">

            <div className="machinery-section-number">
              <span>01</span>
              <div></div>
              <span>FABRICATION</span>
            </div>

            <div className="machinery-intro-heading">

              <span className="machinery-kicker">
                BUILT AROUND YOUR OPERATION
              </span>

              <h2>
                More than machines.
                <br />
                <em>Engineered solutions.</em>
              </h2>

            </div>

            <div className="machinery-intro-copy">

              <p>
                Agunity Investment Ltd fabricates
                agricultural processing machinery with a
                focus on practical performance,
                affordability and suitability for local
                production environments.
              </p>

              <p>
                Our machinery range covers crop processing,
                grain handling, animal feed production,
                biomass processing and related applications.
              </p>

              <div className="intro-points">

                <div>
                  <FiCheckCircle />
                  <span>Uganda-based fabrication</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>Custom machinery solutions</span>
                </div>

                <div>
                  <FiCheckCircle />
                  <span>
                    Practical production-focused design
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED MACHINES */}
      <section className="featured-machinery">

        <div className="machinery-container">

          <div className="machinery-section-heading">

            <div>

              <span className="machinery-kicker">
                SELECTED MACHINERY
              </span>

              <h2>
                Built for the
                <br />
                <em>processing floor.</em>
              </h2>

            </div>

            <p>
              A selection of machinery solutions available
              from Agunity Investment Ltd.
            </p>

          </div>

          <div className="featured-machine-grid">

            {featuredMachines.map((machine, index) => (

              <Link
                to={`/machinery/${machine.id}`}
                className="featured-machine-card"
                key={machine.id}
              >

                <div className="featured-machine-image">

                  <div className="machine-tech-grid"></div>

                  <div className="machine-placeholder">

                    <div className="machine-shape">

                      <div className="shape-hopper"></div>
                      <div className="shape-body"></div>
                      <div className="shape-base"></div>

                      <div className="shape-wheel wheel-one"></div>
                      <div className="shape-wheel wheel-two"></div>

                    </div>

                  </div>

                  <span className="machine-index">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </span>

                  <span className="machine-category">
                    {machine.category}
                  </span>

                </div>

                <div className="featured-machine-info">

                  <h3>{machine.name}</h3>

                  <p>{machine.description}</p>

                  <div>
                    View Machine
                    <FiArrowRight />
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* CATALOGUE */}
      <section
        className="catalogue-section"
        id="catalogue"
      >

        <div className="machinery-container">

          <div className="catalogue-heading">

            <div>

              <span className="machinery-kicker">
                COMPLETE CATALOGUE
              </span>

              <h2>
                Agricultural processing
                <br />
                <em>machinery.</em>
              </h2>

            </div>

            <div className="catalogue-heading-copy">

              <p>
                Find the machine suited to your crop,
                process or production requirement.
              </p>

            </div>

          </div>

          <div className="catalogue-toolbar">

            <div className="search-box">

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

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}

            </div>

            <button
              type="button"
              className="mobile-filter-button"
              onClick={() =>
                setMobileFilterOpen(!mobileFilterOpen)
              }
            >
              <FiFilter />
              Filters
            </button>

            <div className="catalogue-count">

              <strong>
                {filteredMachines.length}
              </strong>

              <span>MACHINES</span>

            </div>

          </div>

          <div
            className={`catalogue-layout ${
              mobileFilterOpen ? "filters-open" : ""
            }`}
          >

            <aside className="catalogue-sidebar">

              <div className="sidebar-heading">

                <span>FILTER BY</span>

                <button
                  type="button"
                  onClick={() =>
                    setMobileFilterOpen(false)
                  }
                  aria-label="Close filters"
                >
                  <FiX />
                </button>

              </div>

              <div className="category-list">

                {categories.map((category) => (

                  <button
                    type="button"
                    key={category}
                    className={
                      activeCategory === category
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setActiveCategory(category);
                      setMobileFilterOpen(false);
                    }}
                  >

                    <span>{category}</span>
                    <FiChevronDown />

                  </button>

                ))}

              </div>

              <div className="sidebar-quote">

                <FiTool />

                <strong>
                  Need a custom machine?
                </strong>

                <p>
                  Tell us what you need to process and our
                  team can discuss a fabrication solution.
                </p>

                <Link to="/request-a-quote">
                  Talk to Agunity
                  <FiArrowUpRight />
                </Link>

              </div>

            </aside>

            <div className="catalogue-results">

              {filteredMachines.length > 0 ? (

                <div className="catalogue-grid">

                  {filteredMachines.map(
                    (machine, index) => (

                      <Link
                        to={`/machinery/${machine.id}`}
                        className="catalogue-card"
                        key={machine.id}
                      >

                        <div className="catalogue-card-visual">

                          <div className="catalogue-card-grid"></div>

                          <div className="catalogue-machine">

                            <div className="catalogue-hopper"></div>
                            <div className="catalogue-body"></div>
                            <div className="catalogue-base"></div>

                            <div className="catalogue-wheel left"></div>
                            <div className="catalogue-wheel right"></div>

                          </div>

                          <span className="catalogue-number">
                            {(index + 1)
                              .toString()
                              .padStart(2, "0")}
                          </span>

                          <div className="catalogue-arrow">
                            <FiArrowUpRight />
                          </div>

                        </div>

                        <div className="catalogue-card-content">

                          <span>
                            {machine.category}
                          </span>

                          <h3>
                            {machine.name}
                          </h3>

                          <p>
                            {machine.description}
                          </p>

                          <div className="catalogue-card-bottom">

                            <span>
                              View Details
                            </span>

                            <FiArrowRight />

                          </div>

                        </div>

                      </Link>

                    )
                  )}

                </div>

              ) : (

                <div className="empty-results">

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
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All Machinery");
                    }}
                  >
                    Reset Catalogue
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* APPLICATIONS */}
      <section className="applications-section">

        <div className="machinery-container">

          <div className="applications-grid">

            <div className="applications-heading">

              <span className="machinery-kicker">
                APPLICATIONS
              </span>

              <h2>
                One fabrication
                <br />
                partner.
                <br />
                <em>Many applications.</em>
              </h2>

              <p>
                Agricultural processing is different for
                every operation. Our machinery range supports
                multiple crops and production environments.
              </p>

              <Link
                to="/industries"
                className="machinery-text-link"
              >
                Explore Industries
                <FiArrowUpRight />
              </Link>

            </div>

            <div className="applications-list">

              <div>
                <span>01</span>
                <strong>Coffee Processing</strong>
                <p>
                  Hulling and wet pulping solutions for
                  coffee processors.
                </p>
                <FiArrowUpRight />
              </div>

              <div>
                <span>02</span>
                <strong>Maize Processing</strong>
                <p>
                  Shelling, hulling and milling equipment
                  for maize processing.
                </p>
                <FiArrowUpRight />
              </div>

              <div>
                <span>03</span>
                <strong>Rice Processing</strong>
                <p>
                  Threshing and hulling machinery for rice
                  processors.
                </p>
                <FiArrowUpRight />
              </div>

              <div>
                <span>04</span>
                <strong>Cassava Processing</strong>
                <p>
                  Chipping and milling solutions for
                  cassava processing.
                </p>
                <FiArrowUpRight />
              </div>

              <div>
                <span>05</span>
                <strong>Animal Feed Production</strong>
                <p>
                  Mills, mixers, chaff cutters and silage
                  equipment.
                </p>
                <FiArrowUpRight />
              </div>

              <div>
                <span>06</span>
                <strong>Grain & Seed Processing</strong>
                <p>
                  Threshing, cleaning and milling machinery
                  for different grains.
                </p>
                <FiArrowUpRight />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FABRICATION CTA */}
      <section className="machinery-cta">

        <div className="machinery-container">

          <div className="machinery-cta-inner">

            <div className="cta-decoration">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="machinery-cta-content">

              <span className="machinery-kicker">
                CUSTOM FABRICATION
              </span>

              <h2>
                Don't see the machine
                <br />
                you need?
              </h2>

              <p>
                Agunity can discuss custom agricultural
                machinery requirements based on your crop,
                process, production capacity and operating
                environment.
              </p>

              <div className="machinery-cta-actions">

                <Link
                  to="/request-a-quote"
                  className="machinery-dark-button"
                >
                  Discuss Your Machine
                  <FiArrowRight />
                </Link>

                <Link
                  to="/about"
                  className="machinery-light-button"
                >
                  About Our Fabrication
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

            <div className="cta-engineering">

              <FiSettings />

              <span>AGUNITY</span>

              <strong>
                FABRICATION
                <br />
                ENGINEERING
              </strong>

              <small>
                KAMPALA / UGANDA
              </small>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Machinery;
