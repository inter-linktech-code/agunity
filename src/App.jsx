import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Machinery from "./pages/Machinery";
import MachineryDetails from "./pages/MachineryDetails";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import WhyAgunity from "./pages/WhyAgunity";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/machinery/:machineId" element={<MachineryDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/why-agunity" element={<WhyAgunity />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-a-quote" element={<Quote />} />

          <Route
            path="*"
            element={
              <div
                style={{
                  minHeight: "70vh",
                  display: "grid",
                  placeItems: "center",
                  background: "#080907",
                  color: "#efede3",
                }}
              >
                <h1>Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
