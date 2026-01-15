'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Cakes',
      emoji: '🎂',
      description: 'Birthday, Anniversary & Custom Cakes',
      link: '/cakes',
      gradient: 'from-pink-500 to-rose-500',
      keywords: 'cake shop bhopal'
    },
    {
      name: 'Pastries',
      emoji: '🥐',
      description: 'Fresh Pastries & Cupcakes',
      link: '/pastries',
      gradient: 'from-amber-500 to-orange-500',
      keywords: 'pastries bhopal'
    },
    {
      name: 'Chocolates',
      emoji: '🍫',
      description: 'Cadbury, Silk & Gift Packs',
      link: '/chocolates',
      gradient: 'from-amber-700 to-amber-900',
      keywords: 'chocolate shop bhopal'
    },
    {
      name: 'Brownies',
      emoji: '🍰',
      description: 'Fudgy Brownies & Desserts',
      link: '/brownies',
      gradient: 'from-purple-500 to-pink-500',
      keywords: 'brownies bhopal'
    },
    {
      name: 'Cookies',
      emoji: '🍪',
      description: 'Freshly Baked Cookies',
      link: '/cookies',
      gradient: 'from-yellow-500 to-orange-500',
      keywords: 'cookies bhopal'
    },
    {
      name: 'Gift Hampers',
      emoji: '🎁',
      description: 'Valentine Special Combos',
      link: '/gift-hampers',
      gradient: 'from-red-500 to-pink-500',
      keywords: 'valentine gifts bhopal'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-valentine-pink/10 px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="text-valentine-pink" size={20} />
            <span className="text-valentine-pink font-semibold">Shop by Category</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh bakery items made daily. Delivered across MP Nagar, Arera Colony, Kolar Road & all areas of Bhopal.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative bg-gradient-to-br from-white to-valentine-light rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Emoji Icon */}
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>

                {/* Category Name */}
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Keywords (SEO) */}
                <p className="text-xs text-gray-400 mb-4">
                  {category.keywords}
                </p>

                {/* CTA Button */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.gradient} text-white px-5 py-2 rounded-full font-semibold text-sm group-hover:scale-105 transition-transform`}>
                  Shop Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-valentine-gold/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-valentine-red via-valentine-pink to-valentine-gold rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-heading font-bold mb-2">
            🎉 Valentine Week Special: Get Flat 20% OFF on All Products!
          </h3>
          <p className="text-sm opacity-90 mb-4">
            Use code: <span className="bg-white text-valentine-red px-3 py-1 rounded font-bold">LOVE2026</span> at checkout
          </p>
          <Link href="/valentine-cakes-bhopal">
            <button className="bg-white text-valentine-red px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
              Shop Valentine Specials
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
