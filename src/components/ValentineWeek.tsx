'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';

const ValentineWeek = () => {
  const valentineDays = [
    { day: 'Rose Day', date: 'Feb 7', emoji: '🌹', color: 'from-red-500 to-pink-500', gift: 'Red Velvet Cake' },
    { day: 'Propose Day', date: 'Feb 8', emoji: '💍', color: 'from-purple-500 to-pink-500', gift: 'Heart-Shaped Cake' },
    { day: 'Chocolate Day', date: 'Feb 9', emoji: '🍫', color: 'from-amber-700 to-amber-500', gift: 'Chocolate Truffle Cake' },
    { day: 'Teddy Day', date: 'Feb 10', emoji: '🧸', color: 'from-pink-400 to-pink-300', gift: 'Teddy + Cake Combo' },
    { day: 'Promise Day', date: 'Feb 11', emoji: '🤝', color: 'from-blue-500 to-cyan-500', gift: 'Photo Cake' },
    { day: 'Hug Day', date: 'Feb 12', emoji: '🤗', color: 'from-green-500 to-teal-500', gift: 'Chocolate Hamper' },
    { day: 'Kiss Day', date: 'Feb 13', emoji: '💋', color: 'from-rose-500 to-pink-600', gift: 'Strawberry Cake' },
    { day: 'Valentine\'s Day', date: 'Feb 14', emoji: '❤️', color: 'from-valentine-red to-valentine-pink', gift: 'Premium Love Cake', featured: true },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-valentine-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-valentine-red/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="text-valentine-red" size={20} />
            <span className="text-valentine-red font-semibold">Valentine Week 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Celebrate Every Day of Love
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make every moment special with our Valentine Week collection. Perfect gifts for your girlfriend, boyfriend, or loved ones in Bhopal.
          </p>
        </div>

        {/* Valentine Days Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valentineDays.map((item, index) => (
            <Link
              key={index}
              href="/valentine-cakes-bhopal"
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 ${
                item.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-3 right-3 bg-valentine-gold text-white px-3 py-1 rounded-full text-xs font-semibold premium-badge z-10">
                  ⭐ Most Popular
                </div>
              )}

              <div className="relative p-6">
                {/* Emoji & Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-5xl ${item.featured ? 'text-6xl' : ''} group-hover:scale-110 transition-transform`}>
                    {item.emoji}
                  </div>
                  <div className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {item.date}
                  </div>
                </div>

                {/* Day Name */}
                <h3 className={`font-heading font-bold text-gray-900 mb-2 ${item.featured ? 'text-3xl' : 'text-2xl'}`}>
                  {item.day}
                </h3>

                {/* Gift Suggestion */}
                <p className="text-gray-600 mb-4 text-sm">
                  Perfect Gift: <span className="font-semibold text-valentine-red">{item.gift}</span>
                </p>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all shadow-md`}>
                  Shop Now →
                </button>

                {/* Featured Extra Info */}
                {item.featured && (
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      ✓ Same-Day Delivery
                    </span>
                    <span className="flex items-center gap-1">
                      ✓ Midnight Available
                    </span>
                  </div>
                )}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-valentine-red rounded-2xl transition-colors`}></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-valentine-red to-valentine-pink text-white py-6 px-8 rounded-2xl inline-block shadow-xl">
            <p className="text-lg font-semibold mb-2">🎁 Special Combo Offers Available!</p>
            <p className="text-sm opacity-90">Order for all 7 days and get 30% OFF + Free Delivery across Bhopal</p>
            <Link href="/valentine-cakes-bhopal">
              <button className="mt-4 bg-white text-valentine-red px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
                View All Combos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValentineWeek;
