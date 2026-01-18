import React, { useState } from "react";
import { cakes } from "../data/cakes";
import ProductCard from "../components/ProductCard";
import "./ProductListing.css";

const ProductListing = ({ cartDispatch }) => {
  const [filteredCakes, setFilteredCakes] = useState(cakes);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("trending");

  const filters = [
    { id: "all", label: "All Cakes", count: cakes.length },
    { id: "veg", label: "Veg Cakes", count: cakes.filter(c => c.veg).length },
    { id: "trending", label: "Trending", count: 8 },
    { id: "underPrice", label: "Under ₹400", count: cakes.filter(c => c.price < 400).length },
  ];

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
    let filtered = cakes;

    if (filterId === "veg") {
      filtered = cakes.filter(c => c.veg);
    } else if (filterId === "underPrice") {
      filtered = cakes.filter(c => c.price < 400);
    }

    setFilteredCakes(filtered);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    let sorted = [...filteredCakes];

    if (sortType === "price-low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortType === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredCakes(sorted);
  };

  const handleAddToCart = (cake) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: cake,
    });
  };

  return (
    <div className="product-listing">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Artisanal Cakes</h1>
          <p>Hand-crafted with premium ingredients, delivered fresh to your doorstep in Bhopal</p>
        </div>

        <div className="listing-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h3>Categories</h3>
              {filters.map(filter => (
                <label key={filter.id} className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedFilter === filter.id}
                    onChange={() => handleFilterChange(filter.id)}
                  />
                  <span className="filter-label">
                    {filter.label}
                    <span className="filter-count">({filter.count})</span>
                  </span>
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h3>Weight</h3>
              <label className="filter-checkbox">
                <input type="checkbox" />
                <span>500 gm</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" />
                <span>1 Kg</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" />
                <span>2 Kg</span>
              </label>
            </div>

            <div className="filter-group">
              <h3>Price Range</h3>
              <input type="range" min="300" max="1000" className="price-slider" />
              <div className="price-display">₹300 - ₹1000</div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-section">
            {/* Sort Bar */}
            <div className="sort-bar">
              <span>Showing {filteredCakes.length} products</span>
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="trending">Best Selling</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredCakes.map(cake => (
                <ProductCard
                  key={cake.id}
                  cake={cake}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
