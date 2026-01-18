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
          src={`https://via.placeholder.com/250x200?text=${cake.name}`} 
          alt={cake.name}
        />
        {cake.veg && <span className="veg-badge">VEG</span>}
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
