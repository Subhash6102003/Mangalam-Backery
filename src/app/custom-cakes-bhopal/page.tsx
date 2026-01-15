import type { Metadata } from 'next';
import CustomCakeForm from '@/components/CustomCakeForm';
import LocalBusinessSchema from '@/components/schemas/LocalBusinessSchema';

export const metadata: Metadata = {
  title: 'Custom Cake in Bhopal | Photo & Designer Cakes – Mangalam Bakeries',
  description: 'Get custom-made cakes in Bhopal with your photo, message & design. Perfect for birthdays, proposals & Valentine\'s Day. Same-day delivery available.',
  keywords: ['custom cake bhopal', 'photo cake bhopal', 'designer cake bhopal', 'personalized cake bhopal'],
  openGraph: {
    title: 'Custom Cake in Bhopal | Design Your Dream Cake',
    description: 'Create personalized cakes with photos, messages & unique designs. Perfect for special occasions in Bhopal.',
  }
};

export default function CustomCakesPage() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-valentine-light via-white to-valentine-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Design Your <span className="text-valentine-red">Dream Cake</span> in Bhopal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Create personalized custom cakes with photos, romantic messages, and unique designs. Perfect for birthdays, proposals, anniversaries, and Valentine's Day celebrations.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: '🎨', title: 'Any Design', desc: 'Heart-shaped, photo, number cakes' },
              { icon: '📸', title: 'Photo Printing', desc: 'High-quality edible prints' },
              { icon: '💝', title: 'Love Messages', desc: 'Personalized romantic text' },
              { icon: '🚀', title: 'Fast Delivery', desc: 'Same-day & midnight available' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cake Form */}
      <CustomCakeForm />

      {/* Popular Designs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Popular Custom Cake Designs in Bhopal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Heart-Shaped Cake', emoji: '❤️', popular: 'Valentine\'s Day' },
              { name: 'Photo Cake', emoji: '📸', popular: 'Birthdays' },
              { name: 'Number Cake', emoji: '🔢', popular: 'Anniversaries' },
              { name: '2-Tier Cake', emoji: '🎂', popular: 'Weddings' },
              { name: 'Engagement Cake', emoji: '💍', popular: 'Proposals' },
              { name: 'Cartoon Cake', emoji: '🦸', popular: 'Kids Birthday' },
              { name: 'Floral Cake', emoji: '🌸', popular: 'Elegant Events' },
              { name: 'Sports Cake', emoji: '⚽', popular: 'Celebrations' },
            ].map((design, index) => (
              <div key={index} className="bg-valentine-light/50 rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer group">
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{design.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{design.name}</h3>
                <p className="text-xs text-gray-600">Popular for: {design.popular}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-valentine-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Custom Cakes in Bhopal – Personalized Designer Cakes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Looking for <strong>custom cake in Bhopal</strong>? Mangalam Bakeries specializes in creating personalized designer cakes tailored to your unique requirements. Whether you want a <strong>photo cake for your girlfriend</strong>, a <strong>heart-shaped Valentine cake</strong>, or a <strong>2-tier wedding cake</strong>, our expert bakers bring your vision to life.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our custom cake service includes: <strong>photo printing on cakes, personalized messages, unique shapes (heart, number, cartoon), color customization, flavor selection (chocolate, vanilla, strawberry, red velvet), and size options</strong> from 0.5 kg to 5 kg. All cakes can be made <strong>eggless</strong> on request.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We deliver custom cakes across <strong>MP Nagar, Arera Colony, Kolar Road, BHEL, and all areas of Bhopal</strong> with <strong>same-day and midnight delivery service</strong>. Order your dream cake today and make your celebration unforgettable!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
