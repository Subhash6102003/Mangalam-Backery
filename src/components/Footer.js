import React from "react";
import { businessInfo } from "../data/businessInfo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Mangalam Bakery</h3>
            <p className="tagline">Redefining the art of baking in Bhopal since the finest bakery experience.</p>
            <div className="social-icons">
              <a href="#facebook" title="Facebook">📘</a>
              <a href="#instagram" title="Instagram">📷</a>
              <a href="#twitter" title="Twitter">𝕏</a>
              <a href="#youtube" title="YouTube">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><a href="/">Our Story</a></li>
              <li><a href="#bestsellers">Best Sellers</a></li>
              <li><a href="#cakes">All Cakes</a></li>
              <li><a href="#locations">Store Locator</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#orders">Track Order</a></li>
              <li><a href="#shipping">Shipping Policy</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Store Info */}
          <div className="footer-section">
            <h4>Store Info</h4>
            <div className="store-info">
              <p>
                <strong>📍 Address:</strong><br />
                {businessInfo.address}
              </p>
              <p>
                <strong>📞 Phone:</strong><br />
                <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
              </p>
              <p>
                <strong>⏰ Hours:</strong><br />
                {businessInfo.hours}
              </p>
              <p>
                <strong>🚚 Delivery Area:</strong><br />
                {businessInfo.deliveryArea}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 Mangalam Bakery. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
