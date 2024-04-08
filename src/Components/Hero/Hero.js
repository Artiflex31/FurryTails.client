import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import backgroundImage from "./herro-img.jpg";

export default function Hero() {
  // Capitalize function name
  const navigate = useNavigate(); // Move useNavigate outside of the return statement
  return (
    <div
      className="hero-section relative h-screen bg-cover bg-center flex items-center justify-center md:justify-end"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-40 "></div>
      <div className="text-center z-10 md:mr-16">
        <h1 className="text-4xl md:text-5xl text-white font-semibold mb-4">
          Only you can give them hope.
        </h1>
        <p className="text-lg text-white mb-8">
          Support our animal welfare initiatives.
        </p>
        <div className="App">
          <button
            className="bg-cta hover:bg-[#FF5722] text-white px-6 py-3 rounded-lg font-medium"
            onClick={() => navigate("/donate/donationplans")}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
