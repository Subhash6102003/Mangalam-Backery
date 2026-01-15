'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { getHeroContentByTheme } from '@/data/festivalHeroContent';

const Hero = () => {
  const { theme, config } = useTheme();
  const heroContent = getHeroContentByTheme(theme);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date based on theme
    const targetDates: Record<string, string> = {
      valentine: '2026-02-14T00:00:00',
      holi: '2026-03-25T00:00:00',
      'raksha-bandhan': '2026-08-15T00:00:00',
      'bhai-dooj': '2026-11-02T00:00:00',
      diwali: '2026-10-31T00:00:00',
      christmas: '2026-12-25T00:00:00',
      newyear: '2026-01-01T00:00:00',
    };

    const targetDate = new Date(targetDates[theme] || '2026-02-14T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [theme]);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${config.colors.background} 0%, white 50%, ${config.colors.background} 100%)` 
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">{config.emoji}</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{animationDelay: '1s'}}>{config.emoji}</div>
        <div className="absolute bottom-40 left-20 text-7xl opacity-20 animate-float" style={{animationDelay: '2s'}}>🎂</div>
        <div className="absolute bottom-20 right-40 text-6xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}>🍫</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 animate-float" style={{animationDelay: '0.5s'}}>{config.emoji}</div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div 
              className="inline-block px-4 py-2 rounded-full"
              style={{ backgroundColor: `${config.colors.primary}20` }}
            >
              <span 
                className="font-semibold text-sm"
                style={{ color: config.colors.primary }}
              >
                {config.emoji} {config.name} Special Offer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              <span className="text-gray-900">{heroContent.title}</span>
              <br />
              <span 
                className="text-glow"
                style={{ color: config.colors.primary }}
              >
                {heroContent.subtitle}
              </span>
              <span className="inline-block ml-2 text-6xl animate-float">{heroContent.highlightText}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {heroContent.description}
            </p>

            {/* Festival Countdown */}
            {heroContent.countdownLabel && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2" style={{ borderColor: `${config.colors.secondary}50` }}>
                <div className="text-center mb-3">
                  <Clock className="inline mb-2" size={24} style={{ color: config.colors.primary }} />
                  <h3 className="text-lg font-semibold text-gray-800">{heroContent.countdownLabel}</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds }
                  ].map((item) => (
                    <div 
                      key={item.label} 
                      className="text-white rounded-xl p-3 text-center"
                      style={{ backgroundColor: config.colors.primary }}
                    >
                      <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
                      <div className="text-xs opacity-90">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href={heroContent.cta1Link}>
                <button 
                  className="text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 btn-glow hover:scale-105 transition-all"
                  style={{ 
                    background: `linear-gradient(90deg, ${config.colors.primary}, ${config.colors.secondary})` 
                  }}
                >
                  {heroContent.cta1Text}
                  <Heart className="fill-current" size={20} />
                </button>
              </Link>
              
              <Link href={heroContent.cta2Link}>
                <button 
                  className="bg-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 hover:text-white transition-all"
                  style={{ 
                    color: config.colors.primary,
                    borderColor: config.colors.primary
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = config.colors.primary}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  {heroContent.cta2Text}
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {heroContent.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div 
                    className="text-white p-2 rounded-full"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{feature}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { img: '🎂', title: 'Special Cakes', price: '₹299+' },
                { img: '🍫', title: 'Chocolate Hampers', price: '₹249+' },
                { img: '🧁', title: 'Designer Cupcakes', price: '₹199+' },
                { img: '🎁', title: 'Gift Combos', price: '₹499+' }
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{product.img}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{product.title}</h3>
                  <p className="font-bold text-lg" style={{ color: config.colors.primary }}>{product.price}</p>
                  <button 
                    className="mt-3 w-full py-2 rounded-lg hover:text-white transition-colors flex items-center justify-center gap-1 text-sm"
                    style={{ 
                      backgroundColor: `${config.colors.background}`,
                      color: config.colors.primary
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = config.colors.primary;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = config.colors.background;
                      e.currentTarget.style.color = config.colors.primary;
                    }}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Floating Offer Badge */}
            <div 
              className="absolute -top-4 -right-4 text-white px-6 py-3 rounded-full shadow-2xl animate-pulse premium-badge"
              style={{ backgroundColor: config.colors.accent }}
            >
              <div className="font-bold">20% OFF</div>
              <div className="text-xs">Limited Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
