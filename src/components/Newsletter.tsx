'use client';

import { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-valentine-red via-valentine-pink to-valentine-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Gift className="text-white" size={40} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get Exclusive Valentine Offers 💝
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 15% OFF on your first order, plus early access to Valentine Week specials, new cake launches, and surprise gifts!
          </p>

          {/* Subscription Form */}
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-white/30 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-valentine-gold text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-white/70 mt-3">
                🎁 Get instant 15% OFF coupon code after subscription
              </p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-xl mx-auto animate-slide-up">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-2xl font-bold mb-2">Welcome to Mangalam Family!</h3>
              <p className="text-white/90">
                Check your email for your exclusive 15% OFF coupon code
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: '💰', title: '15% OFF Coupon', desc: 'On first order' },
              { icon: '🎂', title: 'New Launches', desc: 'Be the first to know' },
              { icon: '🎁', title: 'Birthday Surprise', desc: 'Free cake on your birthday' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                <p className="text-sm text-white/80">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-white/80 text-sm">
            <p>🌟 Join 10,000+ subscribers from Bhopal getting exclusive offers every week</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
