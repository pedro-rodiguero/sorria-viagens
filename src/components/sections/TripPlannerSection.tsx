import React from "react";
import { FaStar } from "react-icons/fa";
import "./tripplanner.scss";

const StarRating = ({ rating }) => (
  <div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className={i < rating ? "filled" : "empty"} />
    ))}
  </div>
);

const tripPlanners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=800",
    tourType: "TOUR GUIADO",
    price: "€120/Day",
    title: "Rome City Tour",
    rating: 5,
    duration: "7 Days tour",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760c0341?w=800",
    tourType: "TOUR GUIADO",
    price: "€99/Day",
    title: "Paris City Tour",
    rating: 4,
    duration: "5 Days tour",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800",
    tourType: "SELF-GUIDED",
    price: "€85/Day",
    title: "London Highlights",
    rating: 5,
    duration: "6 Days tour",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1523731407960-e1e93b53e438?w=800",
    tourType: "TOUR GUIADO",
    price: "€110/Day",
    title: "Venice Canals",
    rating: 5,
    duration: "4 Days tour",
  },
];

export const TripPlannerSection = () => {
  return (
    <section className="trip-section">
      <div className="trip-header">
        <h2>Trip Planners</h2>
        <div className="divider"></div>
        <p>
          O mundo é pequeno para você, viajante. Descubra sua próxima aventura
          com a Sorria Viagens!
        </p>
        <button>Ver todas opções</button>
      </div>

      <div className="trip-cards">
        {tripPlanners.map((item) => (
          <article key={item.id} className="trip-card">
            <img src={item.image} alt={item.title} />

            <div className="trip-info">
              <div className="top-row">
                <span>{item.tourType}</span>
                <span>{item.price}</span>
              </div>

              <h3>{item.title}</h3>

              <div className="bottom-row">
                <StarRating rating={item.rating} />
                <span>{item.duration}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
