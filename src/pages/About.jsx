import { useState } from "react";

export default function About() {
  const [showProject, setShowProject] = useState(false);

  const projects = [
    { img: "/images/project1.png", title: "PPD KOTA SETAR" },
    { img: "/images/project2.png", title: "MAAHAD TAHFIZ" },
    { img: "/images/project3.png", title: "GIATMARA JERLUN" },
    { img: "/images/project4.png", title: "UNIKL,KULIM" },
    { img: "/images/project5.png", title: "SMK MERGUNG" },
    { img: "/images/project6.png", title: "MRSM KUBANG PASU" },
  ];

  return (
    <div className="pt-28 text-center min-h-screen px-6">

      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="max-w-4xl mx-auto mb-8">
        Eripower Enterprise is a trusted electrical contractor dedicated to delivering reliable and 
        high-quality electrical solutions. We specialize in electrical installation, maintenance, and 
        troubleshooting services for residential, commercial, and industrial projects.
        With a focus on safety, efficiency, and professionalism, our team ensures that every project 
        is completed to the highest standards. We are committed to providing practical solutions 
        tailored to our clients’ needs while maintaining strong attention to detail and workmanship.
        At Eripower Enterprise, we believe in building long-term relationships with our clients through
         trust, consistency, and excellent service.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => setShowProject(!showProject)}
        className="bg-gradient-to-r from-red-500 to-red-700
  text-white px-5 py-2 rounded-xl
  hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
  transition"
      >
        Our Project
      </button>

      {/* 🔥 GRID PROJECT */}
      {showProject && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((item, i) => (
            <div
              key={i}
              className="
                bg-white dark:bg-gray-900 
                rounded-xl shadow-lg 
                overflow-hidden
                transition duration-300
                hover:scale-105 
                hover:shadow-2xl 
                hover:shadow-yellow-400/40
                cursor-pointer
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 font-semibold">
                {item.title}
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}