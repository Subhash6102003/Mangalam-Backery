'use client';

import { useState } from 'react';
import { Star, Heart, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'MP Nagar, Bhopal',
      rating: 5,
      image: '👩',
      message: 'Ordered a Valentine heart cake for my boyfriend. The design was perfect and tasted amazing! Best bakery in Bhopal. Midnight delivery was on time. Highly recommended! ❤️',
      occasion: 'Valentine\'s Day',
      product: 'Red Velvet Heart Cake'
    },
    {
      name: 'Rahul Verma',
      location: 'Arera Colony, Bhopal',
      rating: 5,
      image: '👨',
      message: 'Custom photo cake for my girlfriend\'s birthday was outstanding! Mangalam Bakeries made her day special. The quality and taste were top-notch. Will definitely order again!',
      occasion: 'Birthday',
      product: 'Photo Cake'
    },
    {
      name: 'Anjali Patel',
      location: 'Kolar Road, Bhopal',
      rating: 5,
      image: '👩',
      message: 'Best chocolate cake shop in Bhopal! Ordered a chocolate truffle cake for anniversary. Fresh, delicious, and beautifully decorated. Same-day delivery was prompt. 5 stars! 🎂',
      occasion: 'Anniversary',
      product: 'Chocolate Truffle Cake'
    },
    {
      name: 'Vikram Singh',
      location: 'BHEL, Bhopal',
      rating: 5,
      image: '👨',
      message: 'Surprised my wife with a midnight cake delivery. The cake was fresh and the delivery guy was professional. Mangalam Bakeries is the most reliable bakery in Bhopal!',
      occasion: 'Surprise',
      product: 'Strawberry Cake'
    },
    {
      name: 'Sneha Gupta',
      location: 'New Market, Bhopal',
      rating: 5,
      image: '👩',
      message: 'Valentine combo with cake and teddy was adorable! My boyfriend loved it. Great packaging, on-time delivery, and excellent customer service. Best gift shop in Bhopal! 💝',
      occasion: 'Valentine Week',
      product: 'Valentine Combo'
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-valentine-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-valentine-gold/20 px-4 py-2 rounded-full mb-4">
            <Heart className="text-valentine-red fill-valentine-red" size={20} />
            <span className="text-valentine-dark font-semibold">Love Stories from Bhopal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers in Bhopal. Join thousands of happy customers who made their celebrations special with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-valentine-light">
              <Quote size={80} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="text-valentine-gold fill-valentine-gold" size={24} />
              ))}
            </div>

            {/* Message */}
            <p className="text-xl text-gray-700 leading-relaxed mb-6 relative z-10">
              "{testimonials[activeIndex].message}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="text-5xl">
                {testimonials[activeIndex].image}
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-gray-500">
                  📍 {testimonials[activeIndex].location}
                </p>
              </div>
            </div>

            {/* Product & Occasion Tags */}
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="bg-valentine-pink/20 text-valentine-dark px-3 py-1 rounded-full text-sm font-semibold">
                {testimonials[activeIndex].occasion}
              </span>
              <span className="bg-valentine-light text-valentine-red px-3 py-1 rounded-full text-sm">
                {testimonials[activeIndex].product}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-8 justify-center">
              <button
                onClick={prevTestimonial}
                className="bg-valentine-red text-white p-3 rounded-full hover:bg-valentine-dark transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-valentine-red text-white p-3 rounded-full hover:bg-valentine-dark transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-xl transition-all ${
                index === activeIndex
                  ? 'bg-valentine-red text-white scale-105 shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-valentine-light'
              }`}
            >
              <div className="text-4xl mb-2">{testimonial.image}</div>
              <div className="text-xs font-semibold truncate">{testimonial.name}</div>
              <div className="flex gap-0.5 justify-center mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={10} className={index === activeIndex ? 'fill-white' : 'fill-valentine-gold text-valentine-gold'} />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '5★', label: 'Average Rating' },
            { number: '50+', label: 'Daily Orders' },
            { number: '100%', label: 'Fresh & Quality' },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-valentine-red mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Review CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Had an amazing experience? Share your love story!</p>
          <button className="bg-valentine-red text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg">
            Write a Review ⭐
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
