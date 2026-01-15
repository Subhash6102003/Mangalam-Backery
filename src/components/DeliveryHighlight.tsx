import { Truck, Clock, MapPin, Shield } from 'lucide-react';

const DeliveryHighlight = () => {
  const deliveryFeatures = [
    {
      icon: <Truck size={40} />,
      title: 'Same-Day Delivery',
      description: 'Order before 6 PM, get it delivered the same day across all areas of Bhopal',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Clock size={40} />,
      title: 'Midnight Delivery',
      description: 'Surprise your loved ones with midnight cake delivery in Bhopal. Available 24/7',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin size={40} />,
      title: 'All Areas Covered',
      description: 'MP Nagar, Arera Colony, Kolar Road, BHEL, New Market - We deliver everywhere in Bhopal',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Shield size={40} />,
      title: '100% Safe Delivery',
      description: 'Hygienically packed, contactless delivery with freshness guaranteed',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Fast & Reliable Delivery in Bhopal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh cakes delivered to your doorstep. From MP Nagar to Kolar Road, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-valentine-light rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon with Gradient Background */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-valentine-red rounded-2xl transition-colors`}></div>
            </div>
          ))}
        </div>

        {/* Delivery Area Banner */}
        <div className="mt-12 bg-gradient-to-r from-valentine-light to-white rounded-2xl p-8 border-2 border-valentine-pink/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                📍 Check Delivery Availability
              </h3>
              <p className="text-gray-600 mb-4">
                Enter your pincode or area name to check if we deliver to your location in Bhopal.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter pincode or area (e.g., MP Nagar)"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                />
                <button className="bg-valentine-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-valentine-dark transition-colors">
                  Check
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Popular Delivery Areas:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  'MP Nagar', 'Arera Colony', 'Kolar Road', 'New Market',
                  'BHEL', 'TT Nagar', 'Habibganj', 'Berasia Road',
                  'Shahpura', 'Awadhpuri', 'Bairagarh', 'Katara Hills'
                ].map((area) => (
                  <div key={area} className="flex items-center gap-1 text-gray-700">
                    <span className="text-green-500">✓</span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Order CTA */}
        <div className="mt-8 bg-valentine-red text-white rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-heading font-bold mb-2">
            Need Urgent Delivery in Bhopal? 🚀
          </h3>
          <p className="mb-4">Call us now for express 2-hour delivery service</p>
          <a href="tel:+919876543210">
            <button className="bg-white text-valentine-red px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              📞 Call +91-9876543210
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHighlight;
