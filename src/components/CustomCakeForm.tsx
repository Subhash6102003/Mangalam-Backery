'use client';

import { useState } from 'react';
import { Upload, Calendar, MessageSquare, Package, MapPin } from 'lucide-react';

const CustomCakeForm = () => {
  const [formData, setFormData] = useState({
    flavor: '',
    weight: '',
    shape: '',
    theme: '',
    message: '',
    deliveryDate: '',
    deliveryTime: '',
    address: '',
    phone: '',
    image: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  if (submitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-valentine-red to-valentine-pink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-slide-up">
            <div className="text-7xl mb-6">🎉</div>
            <h2 className="text-4xl font-heading font-bold mb-4">Order Received!</h2>
            <p className="text-xl mb-6">
              Thank you for your custom cake order. Our team will contact you within 15 minutes to confirm the design and delivery details.
            </p>
            <div className="bg-white/20 rounded-xl p-4 mb-6">
              <p className="font-semibold">📞 Need urgent assistance?</p>
              <a href="tel:+919993228538" className="text-valentine-gold text-xl font-bold">
                Call +91-99932 28538
              </a>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-white text-valentine-red px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all"
            >
              Design Another Cake
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-valentine-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              Design Your Custom Cake 🎨
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Flavor Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Choose Flavor *
                </label>
                <select
                  required
                  value={formData.flavor}
                  onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                >
                  <option value="">Select flavor...</option>
                  <option value="chocolate">Chocolate Truffle</option>
                  <option value="vanilla">Vanilla Cream</option>
                  <option value="red-velvet">Red Velvet</option>
                  <option value="strawberry">Strawberry Fresh</option>
                  <option value="black-forest">Black Forest</option>
                  <option value="butterscotch">Butterscotch</option>
                  <option value="pineapple">Pineapple</option>
                  <option value="mango">Mango Delight</option>
                </select>
              </div>

              {/* Weight Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Cake Weight *
                </label>
                <select
                  required
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                >
                  <option value="">Select weight...</option>
                  <option value="0.5kg">0.5 Kg - ₹199</option>
                  <option value="1kg">1 Kg - ₹349</option>
                  <option value="1.5kg">1.5 Kg - ₹499</option>
                  <option value="2kg">2 Kg - ₹649</option>
                  <option value="3kg">3 Kg - ₹899</option>
                  <option value="5kg">5 Kg - ₹999+</option>
                </select>
              </div>

              {/* Shape Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Cake Shape *
                </label>
                <select
                  required
                  value={formData.shape}
                  onChange={(e) => setFormData({ ...formData, shape: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                >
                  <option value="">Select shape...</option>
                  <option value="round">Round (Classic)</option>
                  <option value="square">Square</option>
                  <option value="heart">Heart-Shaped (Valentine Special)</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="number">Number Shaped</option>
                  <option value="custom">Custom Shape</option>
                </select>
              </div>

              {/* Theme Selection */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Cake Theme *
                </label>
                <select
                  required
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                >
                  <option value="">Select theme...</option>
                  <option value="romantic">Romantic / Valentine</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="wedding">Wedding / Engagement</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="photo">Photo Cake</option>
                  <option value="cartoon">Cartoon / Kids</option>
                  <option value="floral">Floral Elegant</option>
                  <option value="sports">Sports Theme</option>
                </select>
              </div>
            </div>

            {/* Personalized Message */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-valentine-red" />
                Your Message on Cake
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="E.g., 'Happy Birthday My Love', 'Will You Marry Me?', 'Best Girlfriend Ever'"
                rows={3}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">Max 100 characters. We'll write it beautifully on your cake.</p>
            </div>

            {/* Image Upload */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Upload size={20} className="text-valentine-red" />
                Upload Reference Image or Photo
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-valentine-red transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="cursor-pointer">
                  {formData.image ? (
                    <div>
                      <p className="text-green-600 font-semibold mb-2">✓ Image Uploaded</p>
                      <p className="text-sm text-gray-600">{formData.image.name}</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="mx-auto text-gray-400 mb-3" size={40} />
                      <p className="text-gray-600 mb-1">Click to upload your photo or design reference</p>
                      <p className="text-xs text-gray-400">JPG, PNG, max 5MB</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Calendar size={20} className="text-valentine-red" />
                  Delivery Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Delivery Time Slot *
                </label>
                <select
                  required
                  value={formData.deliveryTime}
                  onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
                >
                  <option value="">Select time...</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                  <option value="night">Night (8 PM - 11 PM)</option>
                  <option value="midnight">Midnight (11 PM - 1 AM) +₹100</option>
                </select>
              </div>
            </div>

            {/* Address & Phone */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <MapPin size={20} className="text-valentine-red" />
                Delivery Address in Bhopal *
              </label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Full address with landmark (e.g., House no., Street, MP Nagar, Bhopal)"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none resize-none"
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none"
              />
            </div>

            {/* Special Instructions */}
            <div className="mt-6 bg-valentine-light/50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">💡 Customization Options:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-valentine-red" />
                  Eggless Cake
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-valentine-red" />
                  Sugar-Free
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-valentine-red" />
                  Add Candles
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-valentine-red" />
                  Greeting Card
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-valentine-red to-valentine-pink text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Package size={24} />
              Place Custom Cake Order
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              🔒 Your order details are 100% secure. We'll call you to confirm within 15 minutes.
            </p>
          </form>

          {/* Pricing Info */}
          <div className="mt-8 bg-valentine-gold/20 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">💰 Custom Cake Pricing</h3>
            <p className="text-sm text-gray-700">
              Starting from ₹499 • Photo Printing: +₹150 • Midnight Delivery: +₹100 • 2-Tier: +₹500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakeForm;
