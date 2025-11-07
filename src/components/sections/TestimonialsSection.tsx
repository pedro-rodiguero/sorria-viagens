import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // react-icons

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      avatar: "/avatar.png",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
      rating: "/rating-2.svg",
      name: "John Doe",
      title: "Accountant",
    },
    {
      id: 2,
      avatar: "/image.png",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
      rating: "/rating-3.svg",
      name: "John Smith",
      title: "Journalist, HWO News",
    },
    {
      id: 3,
      avatar: "/avatar-2.png",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
      rating: "/rating-4.svg",
      name: "Tamara Bellis",
      title: "Managing Director, JTH",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1920px] items-end justify-center gap-40 pt-[140px] pb-60 px-[182px] relative">
      <header className="flex flex-col items-start self-stretch gap-8 relative">
        <div className="flex flex-col items-start gap-5 relative w-full">
          <h2 className="text-[64px] font-normal text-[#172432] leading-[normal] font-playfair">
            Traveler&apos;s Experiences
          </h2>
          <div className="w-[347px] h-[3px] bg-gray-300" />
        </div>

        <p className="text-2xl font-normal text-[#767e86] leading-[normal] font-rubik">
          Here some awesome feedback from our travelers
        </p>
      </header>

      <div className="flex items-center gap-8 w-full">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.id}
            className={`flex flex-col w-[663px] items-start gap-5 pt-[60px] pb-10 px-10 relative bg-[#f5f6f7] rounded-xl ${
              index === 2 ? "mr-[-497px]" : ""
            }`}
          >
            <div
              className="absolute top-[-65px] left-10 w-[100px] h-[100px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${testimonial.avatar})` }}
              role="img"
              aria-label={`${testimonial.name} avatar`}
            />

            <p className="text-lg font-normal text-[#767e86] leading-[23px] font-rubik">
              {testimonial.text}
            </p>

            <img
              className="flex-[0_0_auto]"
              alt={`Rating for ${testimonial.name}`}
              src={testimonial.rating}
            />

            <div className="flex flex-col items-start gap-1">
              <div className="text-2xl font-normal text-[#767e86] font-playfair">
                {testimonial.name}
              </div>
              <div className="text-lg font-normal text-[#767e86] font-rubik whitespace-nowrap">
                {testimonial.title}
              </div>
            </div>
          </article>
        ))}
      </div>

      <nav className="flex items-start gap-10">
        <button
          className="flex items-center justify-center p-4 bg-[#172432] rounded-xl rotate-90"
          aria-label="Previous testimonial"
        >
          <FiArrowLeft className="text-white w-6 h-6 rotate-[-90deg]" />
        </button>

        <button
          className="flex items-center justify-center p-4 bg-[#ff7757] rounded-xl -rotate-90"
          aria-label="Next testimonial"
        >
          <FiArrowRight className="text-white w-6 h-6 rotate-90" />
        </button>
      </nav>
    </section>
  );
};
