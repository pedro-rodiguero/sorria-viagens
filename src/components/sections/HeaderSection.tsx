import React from "react";
import logo from "../../assets/image-1.png"; // Using the consistent site logo

export const HeaderSection = () => {
  const navigationItems = [
    { label: "Home", href: "#home", isActive: true },
    { label: "Destinos", href: "#destinos", isActive: false },
    { label: "Depoimentos", href: "#depoimentos", isActive: false },
    { label: "Blog", href: "#blog", isActive: false },
  ];

  return (
    // Removed absolute positioning and fixed width for better responsiveness.
    // Using responsive padding (px-4 sm:px-8 md:px-20 lg:px-40)
    <header className="flex w-full items-center justify-between px-4 sm:px-8 md:px-20 lg:px-40 py-8 absolute top-0 left-0 z-10 bg-transparent">
      <a href="#home" aria-label="Homepage">
        <img className="h-12 w-auto" alt="Sorria Viagens Logo" src={logo} />
      </a>

      <nav
        className="hidden md:flex items-center justify-center gap-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <a
              href={item.href}
              // Simplified conditional styling for font weight
              className={`text-xl text-white whitespace-nowrap transition-colors hover:text-white/80 ${
                item.isActive ? "font-medium" : "font-normal"
              }`}
            >
              {item.label}
            </a>

            {/* Replaced SVG with a styled div for the underline */}
            {item.isActive && (
              <div className="self-stretch w-full h-[3px] bg-[#ff7757]" />
            )}
          </div>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-9">
        <a
          href="#login"
          className="font-normal text-white text-xl whitespace-nowrap transition-colors hover:text-white/80"
        >
          Login
        </a>

        <button
          type="button"
          className="px-8 py-4 bg-[#ff7757] rounded-xl text-white text-xl font-normal whitespace-nowrap transition-transform hover:scale-105"
          aria-label="Sign up"
        >
          Sign up
        </button>
      </div>
      {/* TODO: Add a mobile menu button (hamburger icon) for smaller screens */}
    </header>
  );
};
