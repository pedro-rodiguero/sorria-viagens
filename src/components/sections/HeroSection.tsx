import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaCalendarAlt, FaUser } from "react-icons/fa";
import heroBackground from "url:../../assets/hero-background.jpg";

export const HeroSection = () => {
  const [destination, setDestination] = useState("Dubai");
  const [persons, setPersons] = useState(2);
  const [checkIn, setCheckIn] = useState("2024-09-17");
  const [checkOut, setCheckOut] = useState("2024-10-17");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Booking for ${persons} person(s) in ${destination} from ${checkIn} to ${checkOut}`
    );
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-start justify-center w-full min-h-[1194px] gap-[170px] py-[100px] overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroBackground}
        alt="Paisagem romântica de viagem"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-start justify-center gap-4 px-[182px] w-full text-white">
        <h1 className="text-[84px] leading-none font-playfair">
          Sua Lua de Mel dos<br />sonhos começa aqui!
        </h1>
        <p className="text-[24px] font-rubik max-w-[1200px]">
          Consultoria personalizada para criar viagens românticas e inesquecíveis.
          Deixe a organização conosco e foque no que realmente importa: celebrar o amor!
        </p>
      </div>

      {/* Booking form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex items-center bg-white rounded-r-[20px] shadow-lg w-[1473px] pl-[182px] gap-[100px]"
      >
        {/* Input columns */}
        <div className="flex flex-1 items-start gap-[40px] py-[40px]">
          {/* Destination */}
          <div className="flex flex-col gap-3 flex-1">
            <span className="text-[16px] text-[#767e86] font-rubik">DESTINATION</span>
            <div className="border-b border-black pb-[10px]">
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-[20px] text-[#172432] font-playfair bg-transparent border-none outline-none"
              />
            </div>
          </div>

          {/* Persons */}
          <div className="flex flex-col gap-3 flex-1">
            <span className="text-[16px] text-[#767e86] font-rubik">PERSON</span>
            <div className="relative border-b border-black pb-[10px] flex items-center justify-between">
              <FaUser className="text-[#767e86]" />
              <select
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
                className="w-full pl-2 text-[20px] text-[#172432] font-playfair bg-transparent border-none outline-none appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <FaChevronDown className="text-[#172432] absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* Check-in */}
          <div className="flex flex-col gap-3 flex-1">
            <span className="text-[16px] text-[#767e86] font-rubik">CHECK IN</span>
            <div className="border-b border-black pb-[10px] flex items-center">
              <FaCalendarAlt className="text-[#767e86] mr-2" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-[18px] text-[#172432] font-playfair bg-transparent border-none outline-none"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-3 flex-1">
            <span className="text-[16px] text-[#767e86] font-rubik">CHECK OUT</span>
            <div className="border-b border-black pb-[10px] flex items-center">
              <FaCalendarAlt className="text-[#767e86] mr-2" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-[18px] text-[#172432] font-playfair bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-3 w-[170px] py-[60px] px-[20px] bg-[#ff7757] rounded-r-[20px] transition-colors hover:bg-[#ff6442] active:bg-[#e65640]"
        >
          <span className="text-[36px] font-playfair text-white">Book Now</span>
          <FaArrowRight className="text-white" />
        </button>
      </form>
    </section>
  );
};
