import React from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    title: "Monumento de Berlin",
    location: "Berlin, Alemanha",
  },
  {
    id: 2,
    title: "Millennium Bridge",
    location: "Londres, Reino Unido",
  },
  {
    id: 3,
    title: "Rialto Bridge",
    location: "Veneza, Italy",
  },
  {
    id: 4,
    title: "Sea of Orange Tiles",
    location: "Lisboa, Portugal",
  },
];

export const DestinationsSection = () => {
  return (
    // SUGGESTION: Using absolute positioning with large pixel values can make the layout brittle and not responsive.
    // Consider using a more flexible layout system to ensure it looks good on different screen sizes.
    <section className="flex flex-col w-[1920px] items-start justify-center gap-[100px] pl-[182px] pr-0 py-[140px] absolute top-[1194px] left-0">
      <header className="flex items-end pl-0 pr-[182px] py-0 self-stretch w-full flex-[0_0_auto] gap-8 relative">
        <div className="flex flex-col items-start flex-1 grow gap-8 relative">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#172432] text-[64px] tracking-[0] leading-[normal]">
              Destinos Populares
            </h2>

            {/* Replacing the line SVG with a styled div for consistency */}
            <div className="w-[365px] h-[3px] bg-[#ff7757]" role="presentation" />
          </div>

          <p className="relative self-stretch [font-family:'Rubik-Regular',Helvetica] font-normal text-[#767e86] text-2xl tracking-[0] leading-[normal]">
            Destinos mais populares ao redor do mundo, de patrimônios históricos
            a belezas naturais.
          </p>
        </div>

        <nav
          className="inline-flex items-start gap-10 relative flex-[0_0_auto]"
          aria-label="Navegação de destinos"
        >
          <button
            type="button"
            aria-label="Anterior"
            className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Próximo"
            className="p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {destinations.map((destination, index) => (
          <article
            key={destination.id}
            className={`${index === 3 ? "mr-[-346.00px]" : ""} w-[497px] h-[661px] justify-end px-6 py-10 rounded-[26px] bg-[linear-gradient(0deg,rgba(255,119,87,0.1)_0%,rgba(255,119,87,0.1)_100%)] flex flex-col items-start relative`}
          >
            <div className="flex flex-col items-start gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
              <h3
                className={`relative ${index === 2 || index === 3 ? "w-fit" : "self-stretch"} mt-[-1.00px] [font-family:'Playfair_Display-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]`}
              >
                {destination.title}
              </h3>

              <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <FaMapMarkerAlt className="text-white w-6 h-6" aria-hidden="true" />

                <p className="relative flex-1 mt-[-1.00px] [font-family:'Rubik-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                  {destination.location}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
