import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ cake, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(cake);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={cake.image} 
          alt={cake.name}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop`;
          }}
        />
        {cake.veg && (
          <span className="veg-badge">
            <span className="veg-dot"></span>
          </span>
        )}
        <button 
          className={`add-btn ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {isAdded ? "✓ Added" : "+ Add"}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{cake.name}</h3>
        <p className="product-weight">{cake.weight}</p>
        <div className="product-footer">
          <span className="product-price">₹{cake.price}</span>
          <span className="product-rating">⭐ 4.8</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
