import React from "react";
import { BlogSection } from "../components/sections/BlogSection";
import { DestinationsSection } from "../components/sections/DestinationsSection";
import { FooterSection } from "../components/sections/FooterSection";
import { GallerySection } from "../components/sections/GallerySection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { HeroSection } from "../components/sections/HeroSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { TripPlannerSection } from "../components/sections/TripPlannerSection";
import image1 from "../assets/image-1.png";

const HomePage: React.FC = () => {
  return (
    // Note: The rigid min-width and min-height are from the Figma export.
    // For a responsive site, you'll want to adjust these styles.
    <div className="bg-white overflow-hidden w-full relative">
      <HeaderSection />
      <HeroSection />
      <DestinationsSection />
      <GallerySection />
      <TestimonialsSection />
      <TripPlannerSection />
      <BlogSection />
      <FooterSection />
      {/* This image was absolutely positioned. It might need adjustment. */}
      <img className="absolute top-0 left-[83px] w-[375px] h-[292px] object-cover" alt="Decorative" src={image1} />
    </div>
  );
};

export default HomePage;

