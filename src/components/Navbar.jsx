import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [machineryOpen, setMachineryOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setMachineryOpen(false);
  };

  return (
    <>
      <header className="site-navbar">
        <div className="navbar-inner">

          {/* BRAND */}
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <span className="brand-logo">
              <img
                src={logo}
                alt="Agunity Investment Ltd logo"
              />
            </span>

            <span className="brand-copy">
              <strong>AGUNITY</strong>
              <small>INVESTMENT LTD</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav">

            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            {/* MACHINERY DROPDOWN */}
            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setMachineryOpen(!machineryOpen)}
              >
                Machinery
                <FiChevronDown
                  className={machineryOpen ? "rotate-icon" : ""}
                />
              </button>

              <div className="nav-dropdown-menu">
                <Link to="/machinery">
                  All Machinery
                </Link>

                <Link to="/machinery?category=Coffee%20Processing">
                  Coffee Processing
                </Link>

                <Link to="/machinery?category=Maize%20Processing">
                  Maize Processing
                </Link>

                <Link to="/machinery?category=Rice%20Processing">
                  Rice Processing
                </Link>

                <Link to="/machinery?category=Cassava%20Processing">
                  Cassava Processing
                </Link>

                <Link to="/machinery?category=Animal%20Feed">
                  Animal Feed
                </Link>

                <Link
                  to="/machinery"
                  className="dropdown-catalogue-link"
                >
                  View Complete Catalogue
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>

            <NavLink to="/industries">
              Industries
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

            <Link
              to="/request-a-quote"
              className="nav-quote"
            >
              Request a Quote
              <FiArrowUpRight />
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-menu">

          <div className="mobile-menu-header">
            <Link
              to="/"
              className="navbar-brand"
              onClick={closeMenu}
            >
              <span className="brand-logo">
                <img
                  src={logo}
                  alt="Agunity Investment Ltd logo"
                />
              </span>

              <span className="brand-copy">
                <strong>AGUNITY</strong>
                <small>INVESTMENT LTD</small>
              </span>
            </Link>

            <button
              type="button"
              className="mobile-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          <nav className="mobile-nav">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>

            {/* MOBILE MACHINERY */}
            <button
              type="button"
              className="mobile-dropdown-button"
              onClick={() => setMachineryOpen(!machineryOpen)}
            >
              <span>Machinery</span>

              <FiChevronDown
                className={machineryOpen ? "rotate-icon" : ""}
              />
            </button>

            {machineryOpen && (
              <div className="mobile-submenu">

                <Link
                  to="/machinery"
                  onClick={closeMenu}
                >
                  All Machinery
                </Link>

                <Link
                  to="/machinery?category=Coffee%20Processing"
                  onClick={closeMenu}
                >
                  Coffee Processing
                </Link>

                <Link
                  to="/machinery?category=Maize%20Processing"
                  onClick={closeMenu}
                >
                  Maize Processing
                </Link>

                <Link
                  to="/machinery?category=Rice%20Processing"
                  onClick={closeMenu}
                >
                  Rice Processing
                </Link>

                <Link
                  to="/machinery?category=Cassava%20Processing"
                  onClick={closeMenu}
                >
                  Cassava Processing
                </Link>

                <Link
                  to="/machinery?category=Animal%20Feed"
                  onClick={closeMenu}
                >
                  Animal Feed
                </Link>
              </div>
            )}

            <NavLink
              to="/industries"
              onClick={closeMenu}
            >
              Industries
            </NavLink>

            <NavLink
              to="/projects"
              onClick={closeMenu}
            >
              Projects
            </NavLink>

            <NavLink
              to="/why-agunity"
              onClick={closeMenu}
            >
              Why Agunity
            </NavLink>

            <NavLink
              to="/faq"
              onClick={closeMenu}
            >
              FAQs
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            <Link
              to="/request-a-quote"
              className="mobile-quote"
              onClick={closeMenu}
            >
              Request a Quote
              <FiArrowUpRight />
            </Link>

          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;