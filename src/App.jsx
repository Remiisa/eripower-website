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
  // DARK MODE
  const [dark, setDark] = useState(true);

  // MOBILE MENU
  const [open, setOpen] = useState(false);

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
      <nav className="flex justify-between items-center px-6 py-4 
      bg-white/80 dark:bg-black/80 backdrop-blur-md fixed w-full z-50">

        {/* LOGO */}
        <div className="flex flex-col leading-tight">
          <img src="/images/logo.png" className="h-10 object-contain" />
          <h1 className="text-xl font-bold">
            ERIPOW<span className="text-red-500">ER</span>
          </h1>
          <p className="text-[10px] tracking-[0.3em] text-gray-500 dark:text-gray-400">
            ENTERPRISE
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/about" className="hover:text-red-500">About</Link>
          <Link to="/services" className="hover:text-red-500">Services</Link>
          <Link to="/contact" className="hover:text-red-500">Contact</Link>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-16 left-0 w-full 
          bg-white dark:bg-black 
          flex flex-col items-center gap-5 py-6 md:hidden shadow-lg">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <button
              onClick={toggleDark}
              className="px-4 py-2 border rounded-lg"
            >
              {dark ? "Light" : "Dark"}
            </button>

            <Link to="/get-started">
              <button className="bg-gradient-to-r from-red-500 to-red-700
                text-white px-6 py-2 rounded-xl">
                Get Started
              </button>
            </Link>

          </div>
        )}
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