import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="pt-28 text-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6">Need help? Click below</p>

      <Link to="/contact-page">
        <button className="bg-gradient-to-r from-red-500 to-red-700
        text-white px-5 py-2 rounded-xl
        hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
        transition">
          Contact Now
        </button>
      </Link>
    </div>
  );
}