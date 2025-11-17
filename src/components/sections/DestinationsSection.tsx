import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import "./destination.scss";

const destinations = [
  {
    id: 1,
    title: "Monumento de Berlin",
    location: "Berlin, Alemanha",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5fd7d029d5faaf47a3cc01ba4941b7a88a2a8aed?width=994",
  },
  {
    id: 2,
    title: "Millennium Bridge",
    location: "Londres, Reino Unido",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/d05d9fa5bc60d785fa9158905eb01f69001d9d83?width=994",
  },
  {
    id: 3,
    title: "Rialto Bridge",
    location: "Veneza, Italy",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8002a551e104e07d4dad77d8e122ce00e417ff6b?width=994",
  },
  {
    id: 4,
    title: "Sea of Orange Tiles",
    location: "Lisboa, Portugal",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c88bfd7cac22da6d34d63c80628af07a386890f4?width=994",
  },
];

export const DestinationsSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  const handleNext = () => {
    if (slideIndex < destinations.length - 1) setSlideIndex(slideIndex + 1);
  };

  return (
    <section className="destinations">
      <header className="destinations__header">
        <div className="destinations__heading">
          <h2 className="destinations__title">Destinos Populares</h2>
          <div className="destinations__line"></div>

          <p className="destinations__subtitle">
            Destinos mais populares ao redor do mundo, de patrimônios históricos
            a belezas naturais.
          </p>
        </div>

        <nav className="destinations__nav" aria-label="Navegação de destinos">
          <button
            type="button"
            aria-label="Anterior"
            onClick={handlePrev}
            disabled={slideIndex === 0}
            className="destinations__nav-btn destinations__nav-btn--dark"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            aria-label="Próximo"
            onClick={handleNext}
            disabled={slideIndex >= destinations.length - 3}
            className="destinations__nav-btn destinations__nav-btn--coral"
          >
            <FaChevronRight />
          </button>
        </nav>
      </header>

      <div className="destinations__grid">
        {destinations.map((destination) => (
          <article
            key={destination.id}
            className="destinations__card"
            style={{
              backgroundImage: `
                linear-gradient(0deg, rgba(255,119,87,0.10), rgba(255,119,87,0.10)),
                url(${destination.image})
              `,
            }}
          >
            <div className="destinations__card-content">
              <h3 className="destinations__card-title">{destination.title}</h3>

              <div className="destinations__location">
                <FaMapMarkerAlt className="destinations__location-icon" />
                <p className="destinations__location-text">
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

