import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Placeholder images for the gallery. You can replace these with your actual images.
const galleryImages = [
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800",
  "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800",
  "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
];

export const GallerySection = () => {
  return (
    // SUGGESTION: Using absolute positioning with large pixel values can make the layout brittle and not responsive.
    <section className="flex flex-col w-[1920px] items-start justify-center gap-[100px] px-[182px] py-[140px] absolute top-[4647px] left-[-5px]">
      <header className="flex items-end self-stretch w-full flex-[0_0_auto] gap-8 relative">
        <div className="flex flex-col items-start flex-1 grow gap-8 relative">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#172432] text-[64px] tracking-[0] leading-[normal]">
              Galeria de fotos
            </h2>

            {/* Replacing the line SVG with a styled div */}
            <div className="w-[283px] h-[3px] bg-[#ff7757]" role="presentation" />
          </div>

          <p className="relative self-stretch [font-family:'Rubik-Regular',Helvetica] font-normal text-[#767e86] text-2xl tracking-[0] leading-[normal]">
            Nossas fotos de viagens
          </p>
        </div>

        <nav
          className="inline-flex items-start gap-10 relative flex-[0_0_auto]"
          aria-label="Gallery navigation"
        >
          <button
            className="p-4 bg-[#172432] text-white rounded-xl cursor-pointer border-0"
            aria-label="Previous gallery image"
            type="button"
          >
            <FaChevronLeft size={22} />
          </button>

          <button
            className="p-4 bg-[#ff7757] text-white rounded-xl cursor-pointer border-0"
            aria-label="Next gallery image"
            type="button"
          >
            <FaChevronRight size={22} />
          </button>
        </nav>
      </header>

      {/* Replacing the single content SVG with a grid of images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {galleryImages.map((imgSrc, index) => (
          <div key={index} className="w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

