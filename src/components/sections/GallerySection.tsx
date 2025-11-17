import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./gallery.scss";

const galleryImages = [
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800",
  "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800",
  "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
];

export const GallerySection = () => {
  return (
    <section className="gallery-section">
      <header className="gallery-header">
        <div className="header-left">
          <h2>Galeria de fotos</h2>
          <div className="underline" />
          <p>Nossas fotos de viagens</p>
        </div>

        <nav className="gallery-nav" aria-label="Gallery navigation">
          <button aria-label="Previous gallery image" type="button">
            <FaChevronLeft size={22} />
          </button>

          <button aria-label="Next gallery image" type="button">
            <FaChevronRight size={22} />
          </button>
        </nav>
      </header>

      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div key={i} className="gallery-card">
            <img src={img} alt={`Gallery image ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

