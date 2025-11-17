import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/image-1.png";

import "./header.scss";

export const HeaderSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Destinos", href: "#destinos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
  ];

  const isActive = (href) => window.location.hash === href;

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <a href="#home" className="header__logo">
          <img src={logo} alt="Sorria Viagens Logo" />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="header__mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop navigation */}
        <nav className="header__nav">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              <span className={`nav-label ${isActive(item.href) ? "active" : ""}`}>
                {item.label}
              </span>

              {isActive(item.href) && <div className="nav-underline" />}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="header__actions">
          <a href="#login" className="login-btn">Login</a>
          <a href="#signup" className="signup-btn">
            Sign up
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-menu__item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-label">{item.label}</span>

                {isActive(item.href) && <div className="mobile-underline" />}
              </a>
            ))}

            <div className="mobile-auth">
              <a href="#login" className="mobile-login">Login</a>
              <a href="#signup" className="mobile-signup">Sign up</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

