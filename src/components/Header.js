import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCartItemsCount } from "../utils/cartUtils";
import "./Header.css";

const Header = ({ cartItems, selectedLocation }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-text">
              <h1>Mangalam Bakery</h1>
            </div>
          </Link>

          {/* Location Selector */}
          <div className="location-selector">
            <svg className="location-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Delivering to: {selectedLocation}</span>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for cakes, flavours, occasions…" 
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
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
            <Link to="/products" className="nav-item">All Cakes</Link>
            
            <Link to="/products?category=designer" className="nav-item">
              Theme Cakes
            </Link>

            <Link to="/products?category=premium" className="nav-item">
              Premium Cakes
            </Link>

            <Link to="/products?category=chocolate" className="nav-item">Chocolate Cakes</Link>
            <Link to="/products?category=fusion" className="nav-item">Fusion Cakes</Link>
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
