import type { Metadata } from 'next';
import BestSellers from '@/components/BestSellers';
import LocalBusinessSchema from '@/components/schemas/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Cakes in Bhopal | Birthday, Custom & Designer Cakes – Mangalam Bakeries',
  description: 'Freshly baked cakes in Bhopal - Birthday cakes, custom designer cakes, eggless options. Same-day delivery to MP Nagar, Arera Colony, BHEL & across Bhopal.',
  keywords: ['cakes in bhopal', 'birthday cake bhopal', 'custom cake bhopal', 'fresh cakes bhopal', 'eggless cake bhopal', 'designer cake bhopal'],
  openGraph: {
    title: 'Cakes in Bhopal | Fresh & Delicious',
    description: 'Wide variety of cakes - birthday, anniversary, custom designer cakes. Fresh & delivered same-day across Bhopal.',
  }
};

export default function CakesPage() {
  const cakeTypes = [
    {
      icon: '🎂',
      title: 'Birthday Cakes',
      description: 'Celebrate with our fresh, delicious birthday cakes. Available in multiple flavors and sizes.',
      features: ['Custom designs', 'Photo printing', 'Special messages']
    },
    {
      icon: '❤️',
      title: 'Valentine Cakes',
      description: 'Express your love with heart-shaped and romantic themed cakes. Perfect for Valentine\'s Day.',
      features: ['Heart-shaped', 'Romantic designs', 'Special flavors']
    },
    {
      icon: '💍',
      title: 'Wedding & Anniversary',
      description: 'Elegant cakes for engagements, weddings, and anniversaries. Multi-tier options available.',
      features: ['Multi-tier', 'Elegant designs', 'Premium flavors']
    },
    {
      icon: '🥐',
      title: 'Eggless Cakes',
      description: 'All our cakes can be made eggless without compromising taste or quality.',
      features: ['100% Eggless', 'No taste compromise', 'All flavors']
    }
  ];

  const flavors = [
    { name: 'Chocolate Truffle', emoji: '🍫', price: '₹249+' },
    { name: 'Red Velvet', emoji: '❤️', price: '₹279+' },
    { name: 'Vanilla Cream', emoji: '🍦', price: '₹199+' },
    { name: 'Strawberry Fresh', emoji: '🍓', price: '₹229+' },
    { name: 'Black Forest', emoji: '🌲', price: '₹249+' },
    { name: 'Butterscotch', emoji: '🍯', price: '₹219+' },
    { name: 'Pineapple', emoji: '🍍', price: '₹199+' },
    { name: 'Mango Delight', emoji: '🥭', price: '₹249+' },
  ];

  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-valentine-light via-white to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Fresh & Delicious <span className="text-valentine-red">Cakes</span> in Bhopal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our wide variety of freshly baked cakes - from classic birthday cakes to custom designer cakes. Available in multiple flavors with same-day delivery across Bhopal.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '⭐', title: '4.9/5 Rating', desc: '1500+ Happy Customers' },
              { icon: '🚀', title: 'Same-Day Delivery', desc: 'Across all areas of Bhopal' },
              { icon: '🍰', title: '8+ Flavors', desc: 'With Eggless Options' },
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

      {/* Cake Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Our Cake Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cakeTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-valentine-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-valentine-pink/20">
                <div className="text-6xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature, idx) => (
                    <span key={idx} className="text-sm bg-valentine-red/10 text-valentine-dark px-3 py-1 rounded-full font-semibold">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Flavors */}
      <section className="py-16 bg-valentine-light/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Popular Flavors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {flavors.map((flavor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-5xl mb-3">{flavor.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{flavor.name}</h3>
                <p className="text-valentine-red font-semibold">{flavor.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-4">
            Our Best Sellers
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Most loved cakes by our customers</p>
          <BestSellers />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-valentine-red to-valentine-pink py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Design your own custom cake with your favorite flavors, designs, and messages. Call us now!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919993228538" className="bg-white text-valentine-red px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
              📞 Call: +91-99932 28538
            </a>
            <a href="/custom-cakes-bhopal" className="bg-white/20 border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
              🎨 Design Custom Cake
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Mangalam Bakeries?</h3>
              <ul className="space-y-3">
                {[
                  'Fresh baked daily in-house',
                  'Premium quality ingredients',
                  'Eggless options available',
                  'Same-day & midnight delivery',
                  'Fast & reliable service',
                  'Affordable pricing',
                  'Custom designs possible',
                  'Trusted by 1500+ customers'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-valentine-red text-xl flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Service Areas</p>
                  <p className="font-semibold text-gray-900">MP Nagar, Arera Colony, Kolar Road, BHEL, TT Nagar & all areas of Bhopal</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Delivery Hours</p>
                  <p className="font-semibold text-gray-900">11 AM to 3 AM (Next Day)</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Contact Us</p>
                  <p className="font-semibold text-gray-900">+91-99932 28538</p>
                </div>
                <div className="bg-valentine-light p-4 rounded-lg">
                  <p className="text-valentine-dark font-semibold">📍 Location: BHEL, Bhopal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
