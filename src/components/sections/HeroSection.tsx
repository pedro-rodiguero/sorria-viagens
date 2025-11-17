import React, { useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

import heroBackground from "url:../../assets/hero-background.jpg";

import "./hero.scss"; // <-- IMPORTANT

export const HeroSection = () => {
  const [destination, setDestination] = useState("Dubai");
  const [persons, setPersons] = useState(2);
  const [checkIn, setCheckIn] = useState("2024-09-17");
  const [checkOut, setCheckOut] = useState("2024-10-17");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking for ${persons} person(s) in ${destination} from ${checkIn} to ${checkOut}`
    );
  };

  return (
    <section id="home" className="hero">
      <img src={heroBackground} alt="Background" className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>
          Sua Lua de Mel dos <br /> sonhos começa aqui!
        </h1>

        <p>
          Consultoria personalizada para criar viagens românticas e
          inesquecíveis. Deixe a organização conosco e foque no que realmente
          importa: celebrar o amor!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="hero__form">
        <div className="form__inputs">
          {/* Destination */}
          <div className="input-group">
            <label>DESTINATION</label>
            <div className="input-line">
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          {/* Persons */}
          <div className="input-group">
            <label>PERSON</label>
            <div className="input-line icon-input">
              <FaUser className="icon-left" />
              <select
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
              <FaChevronDown className="icon-right" />
            </div>
          </div>

          {/* Check-in */}
          <div className="input-group">
            <label>CHECK IN</label>
            <div className="input-line icon-input">
              <FaCalendarAlt className="icon-left" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="input-group">
            <label>CHECK OUT</label>
            <div className="input-line icon-input">
              <FaCalendarAlt className="icon-left" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="form__submit">
          <span>Book Now</span>
          <FaArrowRight />
        </button>
      </form>
    </section>
  );
};

