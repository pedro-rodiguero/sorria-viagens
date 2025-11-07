import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/image-1.png"; // Assuming this is your logo

export const FooterSection = () => {
  // Data for links and contact info is well-organized.
  const menuLinks = [
    { label: "Home", href: "#home" },
    { label: "Explore", href: "#explore" },
    { label: "Travel", href: "#travel" },
    { label: "Blog", href: "#blog" },
    { label: "Pricing", href: "#pricing" },
  ];

  const informationLinks = [
    { label: "Destinations", href: "#destinations" },
    { label: "Supports", href: "#supports" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
  ];

  const contactInfo = [
    { type: "phone", value: "+123 456 789", href: "tel:+123456789" },
    {
      type: "email",
      value: "info@travellian.com",
      href: "mailto:info@travellian.com",
    },
    { type: "address", value: "1245, New Yourk, USA", href: undefined },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  return (
    // SUGGESTION: Using absolute positioning with large pixel values can make the layout brittle and not responsive.
    <footer className="flex w-[1920px] items-center gap-1 pt-60 pb-[140px] px-[182px] absolute top-[7072px] left-[-5px] bg-[#172432]">
      <div className="flex items-start justify-between relative flex-1 grow">
        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <img src={logo} alt="Sorria Viagens Logo" className="w-[234px]" />
          </div>

          <p className="relative w-fit [font-family:'Rubik-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>

        <nav
          className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"
          aria-label="Main Menu"
        >
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Menu
          </h2>

          <ul className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto] list-none p-0 m-0">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="[font-family:'Rubik-Regular',Helvetica] font-normal text-lg text-white tracking-[0] leading-[normal] whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"
          aria-label="Information"
        >
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Information
          </h2>

          <ul className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto] list-none p-0 m-0">
            {informationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="[font-family:'Rubik-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto] not-italic">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Contact Info
          </h2>

          <ul className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto] list-none p-0 m-0">
            {contactInfo.map((info, index) => (
              <li key={index}>
                {info.href ? (
                  <a
                    href={info.href}
                    className="[font-family:'Rubik-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap no-underline hover:opacity-80 transition-opacity"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="[font-family:'Rubik-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                    {info.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </address>

        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Follow us on
          </h2>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-[#ff7757] transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
