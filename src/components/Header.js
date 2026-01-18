import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCartItemsCount } from "../utils/cartUtils";
import "./Header.css";

const Header = ({ cartItems, selectedLocation }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const cakesMenu = {
    Cakes: ["Trending Cakes", "Eggless Cakes", "Photo Cakes", "Heart Shaped Cakes", "Half Kg / 1 Kg Cakes", "All Cakes"],
    "Theme Cakes": ["Kids Cakes", "Cartoon Cakes", "Superhero Cakes", "Sports Cakes", "Designer Cakes"],
    "By Relationship": ["Birthday", "Anniversary", "Occasions"],
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">🎂</span>
            <span className="logo-text">Mangalam Bakery</span>
          </Link>

          {/* Location Selector */}
          <div className="location-selector">
            <span className="location-icon">📍</span>
            <span>Delivering to: {selectedLocation}</span>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for cakes, flavours, occasions…" 
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon">
            <span>🛒</span>
            {getCartItemsCount(cartItems) > 0 && (
              <span className="cart-badge">{getCartItemsCount(cartItems)}</span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar ${showMobileMenu ? "mobile-open" : ""}`}>
        <div className="container">
          <div className="nav-items">
            <Link to="/products" className="nav-item">Cakes</Link>
            
            <div 
              className="nav-item mega-menu-trigger"
              onMouseEnter={() => setShowMegaMenu("cakes")}
              onMouseLeave={() => setShowMegaMenu(null)}
            >
              Theme Cakes
              {showMegaMenu === "cakes" && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-column">
                      <h4>Kids Cakes</h4>
                      <ul>
                        <li><a href="#cartoon">Cartoon Cakes</a></li>
                        <li><a href="#superhero">Superhero Cakes</a></li>
                        <li><a href="#sports">Sports Cakes</a></li>
                      </ul>
                    </div>
                    <div className="mega-menu-column">
                      <h4>Designer Cakes</h4>
                      <ul>
                        <li><a href="#designer">Designer Cakes</a></li>
                        <li><a href="#custom">Customized Cakes</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="nav-item mega-menu-trigger"
              onMouseEnter={() => setShowMegaMenu("occasions")}
              onMouseLeave={() => setShowMegaMenu(null)}
            >
              By Relationship
              {showMegaMenu === "occasions" && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-column">
                      <h4>Occasions</h4>
                      <ul>
                        <li><a href="#birthday">Birthday</a></li>
                        <li><a href="#anniversary">Anniversary</a></li>
                        <li><a href="#occasions">Other Occasions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#pastries" className="nav-item">Pastries</a>
            <a href="#gift-boxes" className="nav-item">Gift Boxes</a>
            <Link to="/custom-cake" className="nav-item highlight">
              Custom Cake Builder
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
