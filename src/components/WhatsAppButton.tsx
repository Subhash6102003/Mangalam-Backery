'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || '+919876543210';
  
  const quickMessages = [
    "I want to order a Valentine cake 🎂❤️",
    "Show me custom cake options 🎨",
    "Midnight delivery available? 🌙",
    "Check chocolate gift hampers 🍫"
  ];

  const handleQuickMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowPopup(false);
  };

  return (
    <>
      {/* WhatsApp Popup */}
      {showPopup && (
        <div className="fixed bottom-24 right-4 md:right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 w-80 animate-slide-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Quick Order via WhatsApp</h3>
            <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-gray-700" aria-label="Close WhatsApp popup">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-2">
            {quickMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => handleQuickMessage(message)}
                className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg text-sm transition-colors border border-green-200"
              >
                {message}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-500 text-center">
            Or chat with us directly
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="fixed bottom-6 right-4 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp Order"
      >
        <MessageCircle size={28} className="group-hover:animate-pulse" />
        <span className="absolute -top-2 -right-2 bg-valentine-red text-white text-xs px-2 py-1 rounded-full animate-pulse">
          Order Now
        </span>
      </button>
    </>
  );
};

export default WhatsAppButton;
