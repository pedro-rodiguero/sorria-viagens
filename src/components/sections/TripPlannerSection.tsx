import React from "react";
import { FaStar } from "react-icons/fa";

// A reusable component for displaying star ratings
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 text-yellow-500">
    {Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? "opacity-100" : "opacity-30"} />
    ))}
  </div>
);

const tripPlanners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=800",
    tourType: "TOUR GUIADO",
    price: "€120/Day",
    title: "Rome City Tour",
    rating: 5,
    duration: "7 Days tour",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760c0341?w=800",
    tourType: "TOUR GUIADO",
    price: "€99/Day",
    title: "Paris City Tour",
    rating: 4,
    duration: "5 Days tour",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800",
    tourType: "SELF-GUIDED",
    price: "€85/Day",
    title: "London Highlights",
    rating: 5,
    duration: "6 Days tour",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523731407960-e1e93b53e438?w=800",
    tourType: "TOUR GUIADO",
    price: "€110/Day",
    title: "Venice Canals",
    rating: 5,
    duration: "4 Days tour",
  },
];

export const TripPlannerSection = () => {
  return (
    // --- Responsive Trip Planner Section ---
    <section className="flex flex-col lg:flex-row w-full items-center gap-12 py-20 px-4 sm:px-8 overflow-hidden">
      {/* Left Side: Title and CTA */}
      <div className="flex-shrink-0 lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <h2 className="text-4xl md:text-5xl font-playfair font-normal text-gray-800">
            Trip Planners
          </h2>
          <div className="w-40 h-1 bg-[#ff7757]" role="presentation" />
        </div>
        <p className="max-w-xs font-rubik font-normal text-gray-600 text-lg">
          O mundo é pequeno para você, viajante. Descubra sua próxima aventura
          com a Sorria Viagens!
        </p>
        <button className="px-6 py-3 bg-[#ff7757] text-white font-rubik text-lg rounded-xl transition-transform hover:scale-105">
          Ver todas opções
        </button>
      </div>

      {/* Right Side: Horizontally Scrolling Cards */}
      <div className="flex-1 flex items-center gap-8 overflow-x-auto pb-4 -mb-4">
        {tripPlanners.map((trip) => (
          <article
            key={trip.id}
            className="flex-shrink-0 w-72 md:w-80 flex flex-col items-start"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-96 object-cover rounded-2xl"
            />

            <div className="flex flex-col items-start gap-2 py-4 w-full">
              <div className="flex items-center justify-between w-full">
                <span className="font-rubik font-normal text-gray-800 text-base">
                  {trip.tourType}
                </span>
                <span className="font-rubik font-normal text-gray-800 text-base">
                  {trip.price}
                </span>
              </div>

              <h3 className="font-playfair font-semibold text-gray-800 text-2xl">
                {trip.title}
              </h3>

              <div className="flex items-center justify-between w-full">
                <StarRating rating={trip.rating} />
                <span className="font-rubik font-normal text-gray-800 text-base">
                  {trip.duration}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
