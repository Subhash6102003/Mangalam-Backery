import type { Metadata } from 'next';
import LocalBusinessSchema from '@/components/schemas/LocalBusinessSchema';
import BestSellers from '@/components/BestSellers';

export const metadata: Metadata = {
  title: 'Best Bakery in Bhopal – Fresh Cakes, Pastries & Chocolates | Mangalam Bakeries',
  description: 'Discover why Mangalam Bakeries is rated as the best bakery in Bhopal. Fresh cakes, pastries, chocolates delivered daily. Serving MP Nagar, Arera Colony & all areas.',
  keywords: ['best bakery in bhopal', 'top bakery bhopal', 'fresh bakery bhopal'],
};

export default function BestBakeryPage() {
  return (
    <>
      <LocalBusinessSchema />
      
      <section className="py-16 bg-gradient-to-b from-valentine-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6 text-center">
              Best Bakery in Bhopal
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              Mangalam Bakeries has been serving fresh, premium-quality cakes, pastries, and baked goods to Bhopal since 2015. Our commitment to quality, taste, and customer satisfaction makes us the most trusted bakery in Bhopal.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '⭐', title: '5-Star Rated', desc: '10,000+ happy customers' },
                { icon: '🎂', title: 'Fresh Daily', desc: 'Baked fresh every morning' },
                { icon: '🚚', title: 'Fast Delivery', desc: 'All areas of Bhopal' },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-5xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Why Mangalam Bakeries is the Best Bakery in Bhopal
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Mangalam Bakeries</strong> stands out as the <strong>best bakery in Bhopal</strong> for several reasons. We use only the finest ingredients, ensuring every cake, pastry, and dessert is fresh, delicious, and made with love. Our expert bakers have years of experience creating stunning designs for birthdays, weddings, anniversaries, and special occasions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We serve all major areas of Bhopal including <strong>MP Nagar, Arera Colony, Kolar Road, BHEL, New Market, TT Nagar, Habibganj</strong>, and more with <strong>same-day and midnight delivery service</strong>. Whether you need a last-minute birthday cake or a custom designer cake for a proposal, we've got you covered.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From <strong>eggless cakes to sugar-free options, photo cakes to multi-tier wedding cakes</strong>, Mangalam Bakeries offers the widest variety in Bhopal. Visit us today or order online to experience why thousands of customers trust us for their celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BestSellers />
    </>
  );
}
