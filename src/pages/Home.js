import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const bestSellers = [
    {
      id: 1,
      name: "White Forest",
      price: 850,
      weight: "500g",
      image: "/images/white forest.jpeg",
      badge: "BESTSELLER",
      veg: true,
      description: "Light sponge, fresh cream, white chocolate curls, and handpicked cherries."
    },
    {
      id: 2,
      name: "Swiss Truffle",
      price: 850,
      weight: "500g",
      image: "/images/Swiss Truffle.jpeg",
      badge: "VEG",
      veg: true,
      description: "Deep, dark, and decadently smooth Swiss chocolate ganache with moist sponge."
    },
    {
      id: 3,
      name: "Red Velvet",
      price: 900,
      weight: "500g",
      image: "/images/red velvet.jpeg",
      badge: "VEG",
      veg: true,
      description: "Classic favorite with silky smooth cream cheese frosting and rich velvet texture."
    }
  ];

  const categories = [
    { name: "All Collections", active: true },
    { name: "Eggless Specials" },
    { name: "Birthday Cakes" },
    { name: "Tea Cakes" },
    { name: "Gluten-Free" },
    { name: "Sugar Free" }
  ];

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <span className="hero-badge">ESTABLISHED 2015 · BHOPAL</span>
              <h1 className="hero-title">
                Baking <span className="hero-italic">Memories</span>,<br />
                One Slice at a Time.
              </h1>
              <p className="hero-description">
                Experience Bhopal's finest artisanal cakes and pastries. Crafted with premium ingredients and delivered fresh to your doorstep today.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn-hero-primary">Order Now</Link>
                <Link to="/custom-cake" className="btn-hero-secondary">Custom Cakes</Link>
              </div>
            </div>
          </div>
          <div className="hero-badges">
            <div className="hero-badge-item">
              <span className="badge-icon">🎂</span>
              <span className="badge-text">Same Day<br/>Delivery Bhopal</span>
            </div>
            <div className="hero-badge-item">
              <span className="badge-icon">🌱</span>
              <span className="badge-text">100% Veg<br/>Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="category-tabs">
        <div className="container">
          <div className="tabs-wrapper">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`tab-button ${category.active ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">CURATED SELECTION</span>
              <h2 className="section-title">Our Best Sellers</h2>
            </div>
            <Link to="/products" className="view-gallery-link">
              View Gallery →
            </Link>
          </div>

          <div className="products-grid-home">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-card-home">
                <div className="product-image-wrapper">
                  {product.badge && (
                    <span className={`product-badge ${product.badge === 'BESTSELLER' ? 'bestseller' : 'veg-badge-top'}`}>
                      {product.badge}
                    </span>
                  )}
                  {product.veg && (
                    <span className="veg-indicator">
                      <span className="veg-dot"></span>
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="product-image-home" />
                  <button className="quick-view-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
                <div className="product-info-home">
                  <h3 className="product-name-home">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer-home">
                    <div className="product-pricing">
                      <span className="product-weight">{product.weight}</span>
                      <span className="product-price-home">₹{product.price}</span>
                    </div>
                    <button className="add-to-cart-btn">+ Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="cta-sections">
        <div className="container">
          <div className="cta-grid">
            {/* Celebration CTA */}
            <div className="cta-card cta-celebration">
              <div className="cta-content">
                <h3 className="cta-title">Celebration Coming Up?</h3>
                <p className="cta-text">Get custom-designed cakes for birthdays, weddings, or anniversaries. Consult our master chefs.</p>
                <button className="cta-button">Enquire Now</button>
              </div>
              <div className="cta-decoration">🎂</div>
            </div>

            {/* Corporate CTA */}
            <div className="cta-card cta-corporate">
              <div className="cta-content">
                <h3 className="cta-title-dark">Corporate Gifting</h3>
                <p className="cta-text-dark">Festive hampers and premium cookie boxes tailored for your business partners in Bhopal.</p>
                <button className="cta-button-dark">Explore Hampers</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
