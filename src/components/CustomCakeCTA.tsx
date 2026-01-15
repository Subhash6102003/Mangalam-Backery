import Link from 'next/link';
import { Palette, Upload, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

const CustomCakeCTA = () => {
  const features = [
    {
      icon: <Palette className="text-valentine-pink" size={24} />,
      title: 'Choose Your Design',
      description: 'Heart-shaped, photo cake, romantic themes'
    },
    {
      icon: <Upload className="text-valentine-pink" size={24} />,
      title: 'Upload Reference',
      description: 'Share your design inspiration or photos'
    },
    {
      icon: <MessageSquare className="text-valentine-pink" size={24} />,
      title: 'Add Your Message',
      description: 'Personalize with romantic messages'
    },
    {
      icon: <Calendar className="text-valentine-pink" size={24} />,
      title: 'Select Delivery',
      description: 'Same-day or midnight delivery in Bhopal'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-valentine-red via-valentine-pink to-valentine-dark text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🎨</div>
        <div className="absolute bottom-10 right-10 text-8xl">🎂</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">❤️</div>
        <div className="absolute top-1/4 right-1/4 text-6xl">✨</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="font-semibold">🎨 Most Popular Service</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Create Your Dream
              <br />
              <span className="text-valentine-gold">Custom Cake</span>
            </h2>

            <p className="text-lg text-white/90 leading-relaxed">
              Design a unique cake for your girlfriend, boyfriend, or loved one. Perfect for proposals, birthdays, anniversaries, and Valentine's Day celebrations in Bhopal.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Custom Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">2Hr</div>
                <div className="text-sm text-white/80">Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5★</div>
                <div className="text-sm text-white/80">Rated in Bhopal</div>
              </div>
            </div>

            <Link href="/custom-cakes-bhopal">
              <button className="bg-white text-valentine-red px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-all shadow-2xl group">
                Design Your Cake Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>

            <p className="text-sm text-white/70">
              💝 Special Valentine Offer: Get FREE photo printing + 15% OFF on custom cakes
            </p>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-heading font-bold mb-6">How It Works</h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-3">Popular Custom Cake Options in Bhopal:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Heart Shaped', 'Photo Cake', 'Number Cake', '2-Tier', 'Engagement', 'Anniversary'].map((tag) => (
                    <span key={tag} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-valentine-gold text-gray-900 rounded-xl p-4 text-center font-semibold animate-pulse">
              ⏰ Order before 6 PM for same-day delivery in Bhopal!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakeCTA;
