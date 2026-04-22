import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>

      {/* 🔥 HERO VIDEO */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/electric.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute w-full h-full bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Electrical Contractor
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto">
            Reliable installation, maintenance and troubleshooting 
            for residential, commercial and industrial projects.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link to="/about">
              <button className="
                bg-white text-black 
                px-6 py-3 rounded-xl
                hover:scale-105 hover:bg-gray-200
                transition">
                  Explore More
              </button>
            </Link>

            <Link to="/get-started">
              <button className="
                bg-gradient-to-r from-red-500 to-red-700 
                text-white px-6 py-3 rounded-xl 
                hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition">
                  Get Quote
              </button>
            </Link>

          </div>

        </div>
      </section>

      {/* 🔥 SERVICES PREVIEW */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-6 shadow rounded-xl hover:scale-105 transition">
            ⚡ Electrical Installation
          </div>

          <div className="p-6 shadow rounded-xl hover:scale-105 transition">
            🛠 Electrical Maintenance
          </div>

          <div className="p-6 shadow rounded-xl hover:scale-105 transition">
            🔧 Troubleshooting
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <Link to="/services">
            <button className="
              bg-gradient-to-r from-red-500 to-red-700
              text-white px-5 py-2 rounded-xl
              hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
              transition">
                More Details
            </button>
          </Link>
        </div>

      </section>

      {/* 🔥 CONTACT CTA */}
      <section className="py-20 text-center bg-gray-900 text-white">

        <h2 className="text-3xl font-bold mb-6">
          Need Electrical Service?
        </h2>

        <p className="mb-8">
          Contact us today for fast and reliable service.
        </p>

        <Link to="/contact">
          <button className="
            bg-gradient-to-r from-red-500 to-red-700
            text-white px-5 py-2 rounded-xl
            hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
            transition
            ">
              Contact Us
          </button>
        </Link>

      </section>

    </div>
  );
}