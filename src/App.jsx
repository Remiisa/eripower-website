import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// IMPORT PAGES
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ContactPage from "./pages/ContactPage";
import GetStarted from "./pages/GetStarted";

export default function App() {
  // 🔥 START DARK MODE
  const [dark, setDark] = useState(true);

  // 🔥 APPLY DARK CLASS
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div className="font-sans min-h-screen bg-white text-black dark:bg-black dark:text-white transition duration-500">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 
      bg-white/80 dark:bg-black/80 backdrop-blur-md fixed w-full z-50">

        {/* LOGO */}
      <div className="flex flex-col items-center leading-tight">
        {/* LOGO ATAS */}
          <img src="/images/logo.png" className="h-12 object-contain"
           />
        {/* ERIPOWER */}
          <h1 className="text-2xl font-bold">
          ERIPOW<span className="text-red-500">ER</span>
          </h1>
        {/* ENTERPRISE */}
          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400">ENTERPRISE
          </p>
        </div>

        {/* MENU */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>

        {/* BUTTON */}
        <div className="flex items-center gap-4">

          <button
            onClick={toggleDark}
            className="px-3 py-1 border border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? "Light" : "Dark"}
          </button>

          <Link to="/get-started">
           <button className="bg-gradient-to-r from-red-500 to-red-700
            text-white px-5 py-2 rounded-xl
            hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition">
              Get Started
            </button>
          </Link>

        </div>
      </nav>

      {/* CONTENT */}
      <div className="pt-24 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>

    </div>
  );
}