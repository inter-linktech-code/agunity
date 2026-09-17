import React, { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiClock,
  FiCpu,
  FiEdit3,
  FiHelpCircle,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSearch,
  FiSettings,
  FiTool,
  FiTruck,
  FiUser,
  FiX,
} from "react-icons/fi";

import machineryData from "../data/machineryData";

import coffeeHuller from "../assets/coffee-huller.jpg";
import coffeeWetPulper from "../assets/coffee-wet-pulper.jpg";
import maizeHullerMill from "../assets/maize-huller-mill.jpg";
import maizeSheller from "../assets/maize-sheller.jpg";
import multipleThresher from "../assets/multiple-thresher.jpg";
import sorghumThresher from "../assets/sorghum-thresher.jpg";
import groundnutThresher from "../assets/groundnut-thresher.jpg";
import riceThresher from "../assets/rice-thresher.jpg";
import riceHuller from "../assets/rice-huller.jpg";
import cassavaChipper from "../assets/cassava-chipper.jpg";
import cassavaMill from "../assets/cassava-mill.jpg";
import milletMill from "../assets/millet-mill.jpg";
import animalFeedMixer from "../assets/animal-feed-mixer.jpg";
import animalFeedMill from "../assets/animal-feed-mill.jpg";
import crusherMachine from "../assets/crusher-machine.jpg";
import brokenMaizeMachine from "../assets/broken-maize-machine.jpg";
import seedCleaner from "../assets/seed-cleaner.jpg";
import bucketElevator from "../assets/bucket-elevator.jpg";
import screwConveyor from "../assets/screw-conveyor.jpg";
import briquetteMachine from "../assets/briquette-machine.jpg";
import silageMachine from "../assets/silage-machine.jpg";
import chaffCutter from "../assets/chaff-cutter.jpg";
import blockMachine from "../assets/block-machine.jpg";

import "./Quote.css";

const WHATSAPP_NUMBER = "256789409761";

const machineImages = {
  "coffee-huller": coffeeHuller,
  "coffee-wet-pulper": coffeeWetPulper,
  "maize-huller-mill": maizeHullerMill,
  "maize-sheller": maizeSheller,
  "multiple-thresher": multipleThresher,
  "sorghum-thresher": sorghumThresher,
  "gnuts-thresher": groundnutThresher,
  "rice-thresher": riceThresher,
  "rice-huller": riceHuller,
  "cassava-chipper": cassavaChipper,
  "cassava-mill": cassavaMill,
  "millet-mill": milletMill,
  "animal-feed-mixer": animalFeedMixer,
  "animal-feed-mill": animalFeedMill,
  "crusher-machine": crusherMachine,
  "broken-maize-machine": brokenMaizeMachine,
  "seed-cleaner": seedCleaner,
  "bucket-elevator": bucketElevator,
  "screw-conveyor": screwConveyor,
  "briquette-machine": briquetteMachine,
  "silage-machine": silageMachine,
  "chaff-cutter": chaffCutter,
  "block-machine": blockMachine,
};

const categories = [
  "All Machinery",
  ...Array.from(
    new Set(machineryData.map((machine) => machine.category))
  ),
];

const capacityOptions = [
  "I am not sure",
  "Below 100 kg/hour",
  "100 – 250 kg/hour",
  "250 – 500 kg/hour",
  "500 – 1,000 kg/hour",
  "1 – 2 tonnes/hour",
  "Above 2 tonnes/hour",
  "Other / Custom",
];

const projectTypes = [
  "New machine purchase",
  "Machine replacement",
  "Business expansion",
  "New processing plant",
  "Custom fabrication",
  "Machine modification",
  "Complete processing line",
  "I need help deciding",
];

function getMachineImage(machine) {
  return (
    machineImages[machine.id] ||
    machine.image ||
    machine.images?.[0] ||
    machine.photo ||
    machine.imageUrl ||
    ""
  );
}

function Quote() {
  const [step, setStep] = useState(1);

  const [selectedMachines, setSelectedMachines] = useState([]);

  const [machineSearch, setMachineSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All Machinery");

  const [showAllMachines, setShowAllMachines] =
    useState(false);

  const [showMachineSelector, setShowMachineSelector] =
    useState(false);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    country: "Uganda",

    projectType: "",
    processingMaterial: "",
    capacity: "",
    quantity: "1",

    powerPreference: "",
    installationRequired: "",
    timeline: "",

    additionalInformation: "",
  });

  const filteredMachines = useMemo(() => {
    return machineryData.filter((machine) => {
      const matchesCategory =
        activeCategory === "All Machinery" ||
        machine.category === activeCategory;

      const searchText = machineSearch.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        machine.name.toLowerCase().includes(searchText) ||
        machine.category.toLowerCase().includes(searchText) ||
        machine.description
          ?.toLowerCase()
          .includes(searchText) ||
        machine.keywords
          ?.toLowerCase()
          .includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, machineSearch]);

  const visibleMachines = showAllMachines
    ? filteredMachines
    : filteredMachines.slice(0, 8);

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleMachine = (machine) => {
    setSelectedMachines((current) => {
      const exists = current.some(
        (item) => item.id === machine.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== machine.id
        );
      }

      return [...current, machine];
    });
  };

  const isSelected = (machineId) =>
    selectedMachines.some(
      (machine) => machine.id === machineId
    );

  const removeMachine = (machineId) => {
    setSelectedMachines((current) =>
      current.filter(
        (machine) => machine.id !== machineId
      )
    );
  };

  const goToStep = (nextStep) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setStep(nextStep);
  };

  const handleNextFromDetails = (event) => {
    event.preventDefault();

    if (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.location.trim()
    ) {
      return;
    }

    goToStep(2);
  };

  const handleNextFromRequirement = (event) => {
    event.preventDefault();

    if (
      !form.projectType ||
      !form.processingMaterial.trim()
    ) {
      return;
    }

    goToStep(3);
  };

  const buildWhatsAppMessage = () => {
    const machinesText =
      selectedMachines.length > 0
        ? selectedMachines
            .map(
              (machine, index) =>
                `${index + 1}. ${machine.name} (${machine.category})`
            )
            .join("\n")
        : "Customer has not selected a specific machine.";

    return `Hello Agunity Investment Ltd,

I would like to request a machinery quotation / consultation.

CUSTOMER DETAILS
Name: ${form.fullName}
Company / Organisation: ${
      form.company || "Not provided"
    }
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Location: ${form.location}
Country: ${form.country}

PROJECT REQUIREMENT
Project Type: ${form.projectType}
Processing Material: ${form.processingMaterial}
Required Capacity: ${form.capacity || "Not specified"}
Quantity: ${form.quantity || "1"}

MACHINERY OF INTEREST
${machinesText}

ADDITIONAL REQUIREMENTS
Power Preference: ${
      form.powerPreference || "Not specified"
    }
Installation Required: ${
      form.installationRequired || "Not specified"
    }
Expected Timeline: ${
      form.timeline || "Not specified"
    }

ADDITIONAL INFORMATION
${
  form.additionalInformation ||
  "No additional information provided."
}

Please advise on the suitable machine, specifications, pricing and delivery options.

Thank you.`;
  };

  const sendToWhatsApp = () => {
    const message = buildWhatsAppMessage();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="quote-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="quote-hero">
        <div className="quote-hero-grid" />

        <div className="quote-container quote-hero-inner">

          <div className="quote-hero-content">

            <div className="quote-eyebrow">
              <span />
              MACHINERY CONSULTATION
            </div>

            <h1>
              Tell us what
              <span>you need to build.</span>
            </h1>

            <p>
              Select the machinery you are interested in,
              describe your processing requirement and send
              your request directly to the Agunity team.
            </p>

            <div className="quote-hero-actions">
              <button
                type="button"
                className="quote-primary-button"
                onClick={() => goToStep(1)}
              >
                Start Your Request
                <FiArrowRight />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="quote-whatsapp-button"
              >
                <FiMessageCircle />
                Chat on WhatsApp
              </a>
            </div>

          </div>

          <div className="quote-hero-panel">

            <div className="quote-hero-panel-top">
              <span>AGUNITY / QUOTE DESK</span>
              <span>01 — 03</span>
            </div>

            <div className="quote-hero-machine-icon">
              <FiSettings />
            </div>

            <div className="quote-hero-panel-bottom">
              <strong>
                Machinery
                <br />
                consultation
              </strong>

              <span>
                Uganda · East Africa
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <section className="quote-progress-section">
        <div className="quote-container">

          <div className="quote-progress">

            <button
              type="button"
              className={
                step >= 1
                  ? "quote-progress-item active"
                  : "quote-progress-item"
              }
              onClick={() => goToStep(1)}
            >
              <span>01</span>
              <div>
                <strong>Your details</strong>
                <small>Tell us about you</small>
              </div>
            </button>

            <div className="quote-progress-line" />

            <button
              type="button"
              className={
                step >= 2
                  ? "quote-progress-item active"
                  : "quote-progress-item"
              }
              onClick={() =>
                step >= 2 && goToStep(2)
              }
            >
              <span>02</span>
              <div>
                <strong>Requirement</strong>
                <small>What do you need?</small>
              </div>
            </button>

            <div className="quote-progress-line" />

            <button
              type="button"
              className={
                step >= 3
                  ? "quote-progress-item active"
                  : "quote-progress-item"
              }
              onClick={() =>
                step >= 3 && goToStep(3)
              }
            >
              <span>03</span>
              <div>
                <strong>Review & send</strong>
                <small>Check your request</small>
              </div>
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN FORM
      ===================================================== */}

      <main className="quote-main">
        <div className="quote-container quote-main-grid">

          <div className="quote-form-area">

            {/* =================================================
                STEP 1
            ================================================= */}

            {step === 1 && (
              <form
                className="quote-form"
                onSubmit={handleNextFromDetails}
              >

                <div className="quote-section-heading">
                  <span>01 / CUSTOMER</span>

                  <h2>
                    Let's start with
                    <span>your details.</span>
                  </h2>

                  <p>
                    These details allow our team to
                    understand who we are preparing the
                    quotation for and where the equipment
                    will be used.
                  </p>
                </div>

                <div className="quote-field-grid">

                  <label className="quote-field">
                    <span>
                      Full Name
                      <em>*</em>
                    </span>

                    <div className="quote-input-wrap">
                      <FiUser />

                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(event) =>
                          updateForm(
                            "fullName",
                            event.target.value
                          )
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </label>

                  <label className="quote-field">
                    <span>
                      Company / Organisation
                    </span>

                    <div className="quote-input-wrap">
                      <FiTool />

                      <input
                        type="text"
                        value={form.company}
                        onChange={(event) =>
                          updateForm(
                            "company",
                            event.target.value
                          )
                        }
                        placeholder="Company or organisation"
                      />
                    </div>
                  </label>

                  <label className="quote-field">
                    <span>
                      Phone Number
                      <em>*</em>
                    </span>

                    <div className="quote-input-wrap">
                      <FiPhone />

                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(event) =>
                          updateForm(
                            "phone",
                            event.target.value
                          )
                        }
                        placeholder="+256..."
                        required
                      />
                    </div>
                  </label>

                  <label className="quote-field">
                    <span>
                      Email Address
                    </span>

                    <div className="quote-input-wrap">
                      <FiMessageCircle />

                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          updateForm(
                            "email",
                            event.target.value
                          )
                        }
                        placeholder="you@company.com"
                      />
                    </div>
                  </label>

                  <label className="quote-field quote-field-wide">
                    <span>
                      Project / Equipment Location
                      <em>*</em>
                    </span>

                    <div className="quote-input-wrap">
                      <FiMapPin />

                      <input
                        type="text"
                        value={form.location}
                        onChange={(event) =>
                          updateForm(
                            "location",
                            event.target.value
                          )
                        }
                        placeholder="District, town or project location"
                        required
                      />
                    </div>
                  </label>

                  <label className="quote-field">
                    <span>Country</span>

                    <div className="quote-input-wrap">
                      <FiMapPin />

                      <select
                        value={form.country}
                        onChange={(event) =>
                          updateForm(
                            "country",
                            event.target.value
                          )
                        }
                      >
                        <option>Uganda</option>
                        <option>Kenya</option>
                        <option>Tanzania</option>
                        <option>Rwanda</option>
                        <option>Burundi</option>
                        <option>South Sudan</option>
                        <option>Democratic Republic of Congo</option>
                        <option>Other</option>
                      </select>

                      <FiChevronDown className="select-icon" />
                    </div>
                  </label>

                </div>

                <div className="quote-form-footer">
                  <span>
                    <FiCheckCircle />
                    Your information is used only to
                    respond to this enquiry.
                  </span>

                  <button
                    type="submit"
                    className="quote-next-button"
                  >
                    Continue
                    <FiArrowRight />
                  </button>
                </div>

              </form>
            )}

            {/* =================================================
                STEP 2
            ================================================= */}

            {step === 2 && (
              <form
                className="quote-form"
                onSubmit={handleNextFromRequirement}
              >

                <div className="quote-section-heading">
                  <span>02 / REQUIREMENT</span>

                  <h2>
                    What are you
                    <span>looking to build?</span>
                  </h2>

                  <p>
                    Select the equipment you are interested
                    in or let us know if you need help choosing
                    the right machine.
                  </p>
                </div>

                {/* MACHINE SELECTOR */}

                <div className="quote-machine-selector">

                  <div className="quote-machine-selector-header">

                    <div>
                      <span>SELECT EQUIPMENT</span>

                      <h3>
                        Which machine are you
                        interested in?
                      </h3>
                    </div>

                    <div className="quote-selected-count">
                      <strong>
                        {selectedMachines.length}
                      </strong>

                      <span>
                        selected
                      </span>
                    </div>

                  </div>

                  {selectedMachines.length > 0 && (
                    <div className="quote-selected-machines">

                      {selectedMachines.map((machine) => (
                        <div
                          className="quote-selected-machine"
                          key={machine.id}
                        >
                          <img
                            src={getMachineImage(machine)}
                            alt={machine.name}
                          />

                          <div>
                            <strong>
                              {machine.name}
                            </strong>

                            <small>
                              {machine.category}
                            </small>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeMachine(machine.id)
                            }
                            aria-label={`Remove ${machine.name}`}
                          >
                            <FiX />
                          </button>
                        </div>
                      ))}

                    </div>
                  )}

                  <div className="quote-machine-toolbar">

                    <div className="quote-machine-search">
                      <FiSearch />

                      <input
                        type="text"
                        value={machineSearch}
                        onChange={(event) =>
                          setMachineSearch(
                            event.target.value
                          )
                        }
                        placeholder="Search machines..."
                      />
                    </div>

                    <button
                      type="button"
                      className="quote-machine-mobile-filter"
                      onClick={() =>
                        setShowMachineSelector(
                          !showMachineSelector
                        )
                      }
                    >
                      Categories
                      {showMachineSelector ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>

                  </div>

                  <div
                    className={
                      showMachineSelector
                        ? "quote-machine-categories open"
                        : "quote-machine-categories"
                    }
                  >
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
                          setShowMachineSelector(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="quote-machinery-grid">

                    {visibleMachines.map((machine) => {
                      const selected = isSelected(
                        machine.id
                      );

                      const image =
                        getMachineImage(machine);

                      return (
                        <button
                          type="button"
                          key={machine.id}
                          className={
                            selected
                              ? "quote-machine-card selected"
                              : "quote-machine-card"
                          }
                          onClick={() =>
                            toggleMachine(machine)
                          }
                        >

                          <div className="quote-machine-image">

                            {image ? (
                              <img
                                src={image}
                                alt={`${machine.name} - Agunity agricultural machinery`}
                              />
                            ) : (
                              <div className="quote-machine-fallback">
                                <FiSettings />
                              </div>
                            )}

                            <div className="quote-machine-overlay" />

                            <div className="quote-machine-check">
                              {selected ? (
                                <FiCheck />
                              ) : (
                                <span />
                              )}
                            </div>

                            <span className="quote-machine-category">
                              {machine.category}
                            </span>

                          </div>

                          <div className="quote-machine-content">

                            <h4>
                              {machine.name}
                            </h4>

                            <span>
                              Select machine
                              <FiArrowUpRight />
                            </span>

                          </div>

                        </button>
                      );
                    })}

                  </div>

                  {filteredMachines.length > 8 && (
                    <button
                      type="button"
                      className="quote-show-more"
                      onClick={() =>
                        setShowAllMachines(
                          !showAllMachines
                        )
                      }
                    >
                      {showAllMachines
                        ? "Show fewer machines"
                        : `View all ${filteredMachines.length} machines`}
                      {showAllMachines ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>
                  )}

                  {filteredMachines.length === 0 && (
                    <div className="quote-no-machines">
                      <FiSearch />

                      <strong>
                        No machinery found
                      </strong>

                      <p>
                        Try another search or choose
                        a different category.
                      </p>
                    </div>
                  )}

                </div>

                {/* PROJECT TYPE */}

                <div className="quote-requirement-block">

                  <div className="quote-mini-heading">
                    <span>PROJECT TYPE</span>

                    <h3>
                      What are you planning?
                    </h3>
                  </div>

                  <div className="quote-choice-grid">

                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        className={
                          form.projectType === type
                            ? "quote-choice active"
                            : "quote-choice"
                        }
                        onClick={() =>
                          updateForm(
                            "projectType",
                            type
                          )
                        }
                      >
                        <span>
                          {form.projectType ===
                          type ? (
                            <FiCheck />
                          ) : null}
                        </span>

                        {type}
                      </button>
                    ))}

                  </div>

                </div>

                {/* TECHNICAL REQUIREMENTS */}

                <div className="quote-requirement-block">

                  <div className="quote-mini-heading">
                    <span>PROCESSING REQUIREMENT</span>

                    <h3>
                      Tell us about the application.
                    </h3>
                  </div>

                  <div className="quote-field-grid">

                    <label className="quote-field">
                      <span>
                        Processing Material
                        <em>*</em>
                      </span>

                      <div className="quote-input-wrap">
                        <FiCpu />

                        <input
                          type="text"
                          value={
                            form.processingMaterial
                          }
                          onChange={(event) =>
                            updateForm(
                              "processingMaterial",
                              event.target.value
                            )
                          }
                          placeholder="Coffee, maize, cassava, rice..."
                          required
                        />
                      </div>
                    </label>

                    <label className="quote-field">
                      <span>
                        Desired Capacity
                      </span>

                      <div className="quote-input-wrap">
                        <FiSettings />

                        <select
                          value={form.capacity}
                          onChange={(event) =>
                            updateForm(
                              "capacity",
                              event.target.value
                            )
                          }
                        >
                          <option value="">
                            Select capacity
                          </option>

                          {capacityOptions.map(
                            (capacity) => (
                              <option
                                key={capacity}
                              >
                                {capacity}
                              </option>
                            )
                          )}
                        </select>

                        <FiChevronDown className="select-icon" />
                      </div>
                    </label>

                    <label className="quote-field">
                      <span>
                        Quantity Required
                      </span>

                      <div className="quote-input-wrap">
                        <FiTool />

                        <input
                          type="number"
                          min="1"
                          value={form.quantity}
                          onChange={(event) =>
                            updateForm(
                              "quantity",
                              event.target.value
                            )
                          }
                        />
                      </div>
                    </label>

                    <label className="quote-field">
                      <span>
                        Expected Timeline
                      </span>

                      <div className="quote-input-wrap">
                        <FiClock />

                        <select
                          value={form.timeline}
                          onChange={(event) =>
                            updateForm(
                              "timeline",
                              event.target.value
                            )
                          }
                        >
                          <option value="">
                            Select timeline
                          </option>
                          <option>
                            As soon as possible
                          </option>
                          <option>
                            Within 1 month
                          </option>
                          <option>
                            1 – 3 months
                          </option>
                          <option>
                            3 – 6 months
                          </option>
                          <option>
                            Planning stage
                          </option>
                        </select>

                        <FiChevronDown className="select-icon" />
                      </div>
                    </label>

                  </div>

                </div>

                {/* ADDITIONAL DETAILS */}

                <div className="quote-field quote-message-field">

                  <span>
                    Additional Information
                  </span>

                  <div className="quote-textarea-wrap">
                    <FiEdit3 />

                    <textarea
                      rows="7"
                      value={
                        form.additionalInformation
                      }
                      onChange={(event) =>
                        updateForm(
                          "additionalInformation",
                          event.target.value
                        )
                      }
                      placeholder="Tell us about your current setup, production target, existing equipment, power availability, or anything else that may help our engineers understand the requirement..."
                    />
                  </div>

                </div>

                <div className="quote-form-footer quote-form-footer-between">

                  <button
                    type="button"
                    className="quote-back-button"
                    onClick={() => goToStep(1)}
                  >
                    <FiArrowLeft />
                    Back
                  </button>

                  <button
                    type="submit"
                    className="quote-next-button"
                  >
                    Review Request
                    <FiArrowRight />
                  </button>

                </div>

              </form>
            )}

            {/* =================================================
                STEP 3
            ================================================= */}

            {step === 3 && (
              <div className="quote-review">

                <div className="quote-section-heading">
                  <span>03 / REVIEW</span>

                  <h2>
                    Your request is
                    <span>almost ready.</span>
                  </h2>

                  <p>
                    Review the information below before
                    sending your enquiry to our team on
                    WhatsApp.
                  </p>
                </div>

                {/* CUSTOMER SUMMARY */}

                <section className="quote-review-card">

                  <div className="quote-review-card-heading">

                    <div>
                      <span>01</span>

                      <h3>
                        Customer details
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                    >
                      Edit
                      <FiEdit3 />
                    </button>

                  </div>

                  <div className="quote-review-grid">

                    <div>
                      <small>Name</small>
                      <strong>
                        {form.fullName}
                      </strong>
                    </div>

                    <div>
                      <small>Company</small>
                      <strong>
                        {form.company ||
                          "Not provided"}
                      </strong>
                    </div>

                    <div>
                      <small>Phone</small>
                      <strong>
                        {form.phone}
                      </strong>
                    </div>

                    <div>
                      <small>Email</small>
                      <strong>
                        {form.email ||
                          "Not provided"}
                      </strong>
                    </div>

                    <div>
                      <small>Location</small>
                      <strong>
                        {form.location}
                      </strong>
                    </div>

                    <div>
                      <small>Country</small>
                      <strong>
                        {form.country}
                      </strong>
                    </div>

                  </div>

                </section>

                {/* MACHINERY SUMMARY */}

                <section className="quote-review-card">

                  <div className="quote-review-card-heading">

                    <div>
                      <span>02</span>

                      <h3>
                        Machinery requirement
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                    >
                      Edit
                      <FiEdit3 />
                    </button>

                  </div>

                  <div className="quote-review-machine-list">

                    {selectedMachines.length > 0 ? (
                      selectedMachines.map(
                        (machine) => (
                          <div
                            className="quote-review-machine"
                            key={machine.id}
                          >
                            <img
                              src={getMachineImage(
                                machine
                              )}
                              alt={machine.name}
                            />

                            <div>
                              <strong>
                                {machine.name}
                              </strong>

                              <span>
                                {machine.category}
                              </span>
                            </div>
                          </div>
                        )
                      )
                    ) : (
                      <div className="quote-review-no-machine">
                        <FiHelpCircle />

                        <div>
                          <strong>
                            No specific machine selected
                          </strong>

                          <span>
                            Please help me choose the
                            right equipment.
                          </span>
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="quote-review-requirements">

                    <div>
                      <small>Project</small>
                      <strong>
                        {form.projectType}
                      </strong>
                    </div>

                    <div>
                      <small>Material</small>
                      <strong>
                        {form.processingMaterial}
                      </strong>
                    </div>

                    <div>
                      <small>Capacity</small>
                      <strong>
                        {form.capacity ||
                          "Not specified"}
                      </strong>
                    </div>

                    <div>
                      <small>Quantity</small>
                      <strong>
                        {form.quantity}
                      </strong>
                    </div>

                    <div>
                      <small>Timeline</small>
                      <strong>
                        {form.timeline ||
                          "Not specified"}
                      </strong>
                    </div>

                  </div>

                </section>

                {/* MESSAGE PREVIEW */}

                <section className="quote-message-preview">

                  <div className="quote-message-preview-icon">
                    <FiMessageCircle />
                  </div>

                  <div>

                    <span>
                      READY TO SEND
                    </span>

                    <h3>
                      Send your request directly
                      to Agunity.
                    </h3>

                    <p>
                      When you click the button below,
                      WhatsApp will open with your
                      completed enquiry. You can review
                      it once more before sending it.
                    </p>

                  </div>

                </section>

                <div className="quote-review-actions">

                  <button
                    type="button"
                    className="quote-back-button"
                    onClick={() => goToStep(2)}
                  >
                    <FiArrowLeft />
                    Edit Request
                  </button>

                  <button
                    type="button"
                    className="quote-whatsapp-submit"
                    onClick={sendToWhatsApp}
                  >
                    <FiMessageCircle />
                    Send Request on WhatsApp
                    <FiArrowUpRight />
                  </button>

                </div>

              </div>
            )}

          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="quote-sidebar">

            <div className="quote-sidebar-card">

              <div className="quote-sidebar-icon">
                <FiSettings />
              </div>

              <span>
                AGUNITY MACHINERY
              </span>

              <h3>
                Not sure which
                machine you need?
              </h3>

              <p>
                That's completely fine. Tell us what
                you want to process, your expected
                production capacity and where you are
                located. Our team can help identify a
                suitable machine or processing solution.
              </p>

              <button
                type="button"
                onClick={() => {
                  updateForm(
                    "projectType",
                    "I need help deciding"
                  );

                  goToStep(2);
                }}
              >
                Help Me Choose
                <FiArrowRight />
              </button>

            </div>

            <div className="quote-sidebar-contact">

              <div className="quote-sidebar-contact-heading">
                <FiMessageCircle />

                <span>
                  TALK TO OUR TEAM
                </span>
              </div>

              <h4>
                Prefer a direct
                conversation?
              </h4>

              <p>
                Speak with Agunity directly about your
                machinery requirement.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="quote-sidebar-whatsapp"
              >
                <FiMessageCircle />
                WhatsApp Agunity
              </a>

              <a
                href="tel:+256789409761"
                className="quote-sidebar-phone"
              >
                <FiPhone />
                +256 789 409761
              </a>

            </div>

            <div className="quote-sidebar-note">

              <FiCheckCircle />

              <div>
                <strong>
                  What happens next?
                </strong>

                <p>
                  Your enquiry is reviewed by the
                  Agunity team so we can discuss suitable
                  equipment, specifications, pricing and
                  delivery.
                </p>
              </div>

            </div>

          </aside>

        </div>
      </main>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="quote-bottom">

        <div className="quote-container">

          <div className="quote-bottom-inner">

            <div>
              <span>
                AGUNITY INVESTMENT LTD
              </span>

              <h2>
                From requirement
                <span>to working machine.</span>
              </h2>
            </div>

            <div className="quote-bottom-location">
              <FiMapPin />

              <div>
                <strong>
                  Gayaza Road
                </strong>

                <span>
                  Kampala, Uganda
                </span>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Quote;