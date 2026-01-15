import type { Metadata } from 'next';
import ValentineWeek from '@/components/ValentineWeek';
import LocalBusinessSchema from '@/components/schemas/LocalBusinessSchema';
import FAQSchema from '@/components/schemas/FAQSchema';

export const metadata: Metadata = {
  title: 'Valentine Cakes in Bhopal ❤️ Surprise Your Girlfriend | Mangalam Bakeries',
  description: 'Romantic Valentine cakes & chocolate gifts in Bhopal. Midnight delivery, heart-shaped cakes & custom love messages available. Perfect gift for your girlfriend.',
  keywords: ['valentine cake bhopal', 'valentine gifts bhopal', 'cake for girlfriend bhopal', 'romantic cake bhopal', 'heart shaped cake bhopal'],
};

export default function ValentineCakesPage() {
  const faqs = [
    {
      question: "What are the best Valentine cakes in Bhopal?",
      answer: "Mangalam Bakeries offers heart-shaped red velvet cakes, chocolate truffle cakes, strawberry cream cakes, and custom photo cakes perfect for Valentine's Day celebrations in Bhopal."
    },
    {
      question: "Do you deliver Valentine cakes at midnight in Bhopal?",
      answer: "Yes! We provide midnight Valentine cake delivery service across all areas of Bhopal including MP Nagar, Arera Colony, and Kolar Road to surprise your loved ones."
    },
    {
      question: "Can I add a romantic message on Valentine cake?",
      answer: "Absolutely! You can personalize your Valentine cake with romantic messages, names, and even photos. Perfect for expressing your love."
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-valentine-red via-valentine-pink to-valentine-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-9xl animate-float">❤️</div>
          <div className="absolute bottom-20 right-20 text-8xl animate-float" style={{animationDelay: '1s'}}>💕</div>
          <div className="absolute top-1/2 left-1/4 text-7xl animate-float" style={{animationDelay: '2s'}}>🌹</div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow">
            Valentine Cakes in Bhopal
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Make this Valentine Week 2026 unforgettable with romantic cakes, chocolates & surprise gifts delivered across Bhopal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#valentine-week">
              <button className="bg-white text-valentine-red px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Shop Valentine Collection
              </button>
            </a>
            <a href="tel:+919876543210">
              <button className="bg-valentine-gold text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Order via Call
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Valentine Week Section */}
      <div id="valentine-week">
        <ValentineWeek />
      </div>

      {/* Featured Valentine Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Romantic Cakes for Your Girlfriend ❤️
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Red Velvet Heart Cake',
                price: '₹799',
                features: ['Heart-shaped design', 'Rich red velvet', 'Love message included'],
                emoji: '❤️🎂'
              },
              {
                name: 'Chocolate Romance Cake',
                price: '₹899',
                features: ['Premium chocolate', 'Edible roses', 'Personalized message'],
                emoji: '🍫💕'
              },
              {
                name: 'Photo Valentine Cake',
                price: '₹999',
                features: ['Your couple photo', 'Romantic design', 'Eggless available'],
                emoji: '📸❤️'
              },
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-valentine-light to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl text-center mb-4">{product.emoji}</div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
                <div className="text-3xl font-bold text-valentine-red text-center mb-4">{product.price}</div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-valentine-red to-valentine-pink text-white py-3 rounded-full font-semibold hover:scale-105 transition-all">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valentine Gift Combos */}
      <section className="py-16 bg-valentine-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Valentine Gift Combos in Bhopal 🎁
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Love Deluxe Combo',
                items: ['1 Kg Heart Cake', 'Red Roses Bouquet', 'Teddy Bear', 'Greeting Card'],
                price: '₹1,599',
                originalPrice: '₹1,999',
                badge: 'Best Seller'
              },
              {
                name: 'Sweet Romance Combo',
                items: ['Chocolate Cake 1 Kg', 'Cadbury Hamper', 'Personalized Mug', 'Love Card'],
                price: '₹1,399',
                originalPrice: '₹1,799',
                badge: 'Popular'
              },
            ].map((combo, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-valentine-gold text-white px-3 py-1 rounded-full text-sm font-bold premium-badge">
                  {combo.badge}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{combo.name}</h3>
                <div className="space-y-2 mb-6">
                  {combo.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-valentine-red">❤️</span> {item}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-valentine-red">{combo.price}</span>
                  <span className="text-gray-400 line-through">{combo.originalPrice}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">
                    Save ₹{parseInt(combo.originalPrice.replace(/[^0-9]/g, '')) - parseInt(combo.price.replace(/[^0-9]/g, ''))}
                  </span>
                </div>
                <button className="w-full bg-valentine-red text-white py-3 rounded-full font-semibold hover:scale-105 transition-all">
                  Order Combo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Valentine Cakes & Gifts Delivery in Bhopal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Looking for the perfect <strong>Valentine gift in Bhopal</strong>? Mangalam Bakeries offers romantic <strong>heart-shaped cakes, chocolate hampers, red velvet cakes, strawberry cakes</strong>, and <strong>surprise cake delivery for couples</strong>. Our Valentine cakes are designed to express love and create unforgettable moments for your girlfriend, boyfriend, or special someone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Make this <strong>Valentine Week 2026</strong> special with our themed cakes for <strong>Rose Day, Propose Day, Chocolate Day, Teddy Day, Promise Day, Hug Day, Kiss Day</strong>, and <strong>Valentine's Day</strong>. We deliver fresh Valentine cakes across <strong>MP Nagar, Arera Colony, Kolar Road, BHEL, and all areas of Bhopal</strong> with <strong>same-day and midnight delivery service</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Order your romantic Valentine cake online and surprise your loved one with <strong>personalized messages, photo printing, and beautiful packaging</strong>. Best bakery for Valentine cakes in Bhopal!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
