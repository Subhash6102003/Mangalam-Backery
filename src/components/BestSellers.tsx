'use client';

import { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { getProductsByTheme } from '@/data/festivalProducts';

const BestSellers = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { theme } = useTheme();
  
  // Get products based on current theme
  const products = getProductsByTheme(theme);

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'valentine', label: 'Valentine Specials' },
    { id: 'cake', label: 'Cakes' },
    { id: 'chocolate', label: 'Chocolates' },
    { id: 'custom', label: 'Custom Cakes' },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="py-16 bg-gradient-to-b from-valentine-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-valentine-gold/20 px-4 py-2 rounded-full mb-4">
            <Star className="text-valentine-gold fill-valentine-gold" size={20} />
            <span className="text-valentine-dark font-semibold">Most Loved in Bhopal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Best Sellers & Trending Gifts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that our Bhopal customers love. Perfect for birthdays, Valentine's Day, and celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-valentine-red text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-valentine-light border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden product-card"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-valentine-gold text-white px-3 py-1 rounded-full text-xs font-bold z-10 premium-badge">
                  {product.badge}
                </div>
              )}

              {/* Wishlist & Quick View */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-valentine-red hover:text-white transition-colors">
                  <Heart size={18} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-valentine-red hover:text-white transition-colors">
                  <Eye size={18} />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-valentine-light to-white flex items-center justify-center overflow-hidden">
                <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category & Eggless Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-valentine-pink/20 text-valentine-dark px-2 py-1 rounded">
                    {product.category}
                  </span>
                  {product.eggless && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      🥚 Eggless
                    </span>
                  )}
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="text-valentine-gold fill-valentine-gold" size={16} />
                    <span className="font-semibold text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-valentine-red">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-valentine-red to-valentine-pink text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-valentine-red text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-lg">
            View All Products in Bhopal →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
