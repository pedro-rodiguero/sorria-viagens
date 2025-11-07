import React, { useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import heroBg from "../../assets/hero-background.jpg"; // Example background image

export const HeroSection = () => {
  const [destination, setDestination] = useState("Dubai");
  const [persons, setPersons] = useState(2);
  // Using a more standard date format for state
  const [checkIn, setCheckIn] = useState("2024-09-17");
  const [checkOut, setCheckOut] = useState("2024-10-17");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(
      `Booking for ${persons} person(s) in ${destination} from ${checkIn} to ${checkOut}`
    );
  };

  return (
    // --- Responsive Hero Section ---
    // Replaced absolute positioning with a responsive, full-screen hero.
    // Added a background image with a dark overlay for better text contrast.
    <section
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-white bg-cover bg-center px-4 sm:px-8 py-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl gap-16 text-center">
        <header className="flex flex-col items-center gap-4">
          {/* Removed hardcoded font styles for cleaner, theme-based styling */}
          <h1 className="text-5xl md:text-7xl font-playfair font-normal leading-tight">
            Sua Lua de Mel dos sonhos
            <br />
            começa aqui!
          </h1>
          <p className="max-w-3xl text-lg md:text-xl font-rubik font-normal">
            Consultoria personalizada para criar viagens românticas e
            inesquecíveis. Deixe a organização conosco e foque no que realmente
            importa: celebrar o amor!
          </p>
        </header>

        {/* --- Responsive Form --- */}
        {/* Replaced fixed-width form with a responsive, centered form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-lg text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:p-8 flex-1">
            {/* Destination Input */}
            <div className="flex flex-col justify-end gap-2">
              <label
                htmlFor="destination"
                className="font-rubik text-sm font-normal text-gray-500"
              >
                DESTINATION
              </label>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full font-playfair text-lg text-gray-800 bg-transparent border-none outline-none"
                  aria-label="Destination"
                />
              </div>
            </div>

            {/* Persons Select */}
            <div className="flex flex-col justify-end gap-2">
              <label
                htmlFor="person"
                className="font-rubik text-sm font-normal text-gray-500"
              >
                PERSON
              </label>
              <div className="relative border-b border-gray-300 pb-2 flex items-center">
                <FaUser className="text-gray-400 mr-2" />
                <select
                  id="person"
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  className="w-full font-playfair text-lg text-gray-800 bg-transparent border-none outline-none appearance-none cursor-pointer"
                  aria-label="Number of persons"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <FaChevronDown
                  className="absolute right-0 text-gray-500 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div className="flex flex-col justify-end gap-2">
              <label
                htmlFor="check-in"
                className="font-rubik text-sm font-normal text-gray-500"
              >
                CHECK IN
              </label>
              <div className="relative border-b border-gray-300 pb-2 flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <input
                  type="date" // Using type="date" for better UX
                  id="check-in"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full font-playfair text-lg text-gray-800 bg-transparent border-none outline-none"
                  aria-label="Check in date"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="flex flex-col justify-end gap-2">
              <label
                htmlFor="check-out"
                className="font-rubik text-sm font-normal text-gray-500"
              >
                CHECK OUT
              </label>
              <div className="relative border-b border-gray-300 pb-2 flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <input
                  type="date" // Using type="date" for better UX
                  id="check-out"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full font-playfair text-lg text-gray-800 bg-transparent border-none outline-none"
                  aria-label="Check out date"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-3 p-6 lg:w-48 bg-[#ff7757] text-white rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl transition-colors hover:bg-[#ff6647]"
            aria-label="Book now"
          >
            <span className="font-playfair text-2xl lg:text-3xl">Book Now</span>
            <FaArrowRight className="hidden lg:block" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};
