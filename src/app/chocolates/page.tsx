import type { Metadata } from 'next';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/schemas/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Chocolates in Bhopal | Cadbury, Silk & Gift Packs – Mangalam Bakeries',
  description: 'Premium chocolates in Bhopal - Cadbury, Silk, and custom hampers. Perfect for Valentine\'s Day, gifting, and celebrations. Same-day delivery across Bhopal.',
  keywords: ['chocolates in bhopal', 'cadbury chocolates bhopal', 'silk chocolates', 'chocolate hampers bhopal', 'valentine chocolates'],
  openGraph: {
    title: 'Chocolates in Bhopal | Premium Chocolate Gifts',
    description: 'Delicious chocolates & hampers - Cadbury, Silk & more. Perfect for gifting and celebrations in Bhopal.',
  }
};

export default function ChocolatesPage() {
  const chocolateProducts = [
    {
      id: 1,
      name: 'Cadbury Silk Hamper',
      category: 'premium',
      price: 349,
      originalPrice: 499,
      image: '🍫',
      description: 'Assorted premium Cadbury Silk chocolates in elegant packaging',
      features: ['Premium packaging', 'Assorted flavors', 'Perfect gift']
    },
    {
      id: 2,
      name: 'Dark Chocolate Box',
      category: 'dark',
      price: 299,
      originalPrice: 449,
      image: '🍫',
      description: 'Rich dark chocolate collection with premium quality',
      features: ['Rich & creamy', 'Premium quality', 'Multiple flavors']
    },
    {
      id: 3,
      name: 'Milk Chocolate Combo',
      category: 'milk',
      price: 249,
      originalPrice: 399,
      image: '🍫',
      description: 'Sweet milk chocolate collection perfect for celebrations',
      features: ['Sweet taste', 'Assorted box', 'Best seller']
    },
    {
      id: 4,
      name: 'Valentine Chocolate Box',
      category: 'valentine',
      price: 399,
      originalPrice: 599,
      image: '💝',
      description: 'Special valentine themed chocolate collection with heart-shaped box',
      features: ['Heart-shaped box', 'Romantic packaging', 'Perfect for couples']
    },
    {
      id: 5,
      name: 'Nuts & Dry Fruits',
      category: 'premium',
      price: 449,
      originalPrice: 699,
      image: '🥜',
      description: 'Chocolate with almonds, cashews and premium dry fruits',
      features: ['Nuts included', 'Premium quality', 'Healthy option']
    },
    {
      id: 6,
      name: 'Gift Hamper Supreme',
      category: 'hamper',
      price: 699,
      originalPrice: 999,
      image: '🎁',
      description: 'Premium chocolate hamper with cakes, cookies and chocolates',
      features: ['Multi-product', 'Luxury packaging', 'Perfect for gifting']
    },
  ];

  const categories = [
    {
      name: 'Premium Chocolates',
      emoji: '👑',
      description: 'Premium quality chocolate collections',
      brands: ['Cadbury Silk', 'Premium brands', 'Imported varieties']
    },
    {
      name: 'Dark Chocolate',
      emoji: '🍫',
      description: 'Rich and intense dark chocolate',
      brands: ['70% Cocoa', '85% Cocoa', 'Premium blend']
    },
    {
      name: 'Milk Chocolate',
      emoji: '🥛',
      description: 'Sweet and creamy milk chocolate',
      brands: ['Assorted flavors', 'Popular brands', 'Best sellers']
    },
    {
      name: 'Gift Hampers',
      emoji: '🎁',
      description: 'Special themed chocolate gift packs',
      brands: ['Valentine special', 'Premium hampers', 'Custom packs']
    },
  ];

  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Premium <span className="text-amber-700">Chocolates</span> in Bhopal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Delicious chocolate collections - Cadbury, Silk, premium brands & custom hampers. Perfect for Valentine's Day, gifting, and celebrations. Same-day delivery across Bhopal.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '⭐', title: '4.8/5 Rating', desc: '500+ Chocolate Orders' },
              { icon: '🚀', title: 'Same-Day Delivery', desc: 'Across all areas of Bhopal' },
              { icon: '💝', title: 'Premium Brands', desc: 'Cadbury, Silk & More' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chocolate Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Our Chocolate Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-amber-200">
                <div className="text-6xl mb-4">{category.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.brands.map((brand, idx) => (
                    <span key={idx} className="text-sm bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-semibold">
                      • {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Popular Chocolate Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chocolateProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1">
                {/* Product Image */}
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 h-48 flex items-center justify-center text-7xl">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{product.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-amber-100 text-amber-900 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-amber-700">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-all">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
              Why Choose Our Chocolates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  'Premium quality brands',
                  'Freshly stocked inventory',
                  'Attractive gift packaging',
                  'Affordable pricing',
                  'Customizable hampers',
                  'Fast delivery'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-700 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-semibold">{point}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  Perfect Gifts for Everyone
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether it's Valentine's Day, anniversaries, birthdays, or just to express your love, our premium chocolate collections are the perfect choice. Every bite is a celebration!
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">💝 Valentine Special</p>
                  <p className="text-sm text-gray-600">🎁 Premium Hampers</p>
                  <p className="text-sm text-gray-600">🎂 Pair with Cakes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Order Your Favorite Chocolates Today!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get premium chocolates delivered same-day to your doorstep. No minimum order required!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919993228538" className="bg-white text-amber-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
              📞 Order Now: +91-99932 28538
            </a>
            <Link href="/" className="bg-white/20 border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="text-sm text-gray-600">Contact Us</p>
                  <a href="tel:+919993228538" className="text-lg font-semibold text-amber-700 hover:underline">
                    +91-99932 28538
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">⏰</span>
                <div>
                  <p className="text-sm text-gray-600">Operating Hours</p>
                  <p className="text-lg font-semibold text-gray-900">11 AM to 3 AM (Next Day)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-lg font-semibold text-gray-900">BHEL, Bhopal, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
