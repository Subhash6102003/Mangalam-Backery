import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Best Bakery in Bhopal', href: '/best-bakery-in-bhopal' },
    { name: 'Cake Shop Bhopal', href: '/cake-shop-bhopal' },
    { name: 'Custom Cakes', href: '/custom-cakes-bhopal' },
    { name: 'Valentine Cakes', href: '/valentine-cakes-bhopal' },
    { name: 'Midnight Delivery', href: '/midnight-cake-delivery-bhopal' },
  ];

  const serviceAreas = [
    'MP Nagar', 'Arera Colony', 'Kolar Road', 'New Market',
    'BHEL', 'TT Nagar', 'Habibganj', 'Berasia Road'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-valentine-pink">
              Mangalam Bakeries
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The most loved bakery in Bhopal, serving fresh cakes, pastries, chocolates, and custom-made designer cakes since 2015. Making celebrations sweeter across Bhopal.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-valentine-red/20 p-2 rounded-full hover:bg-valentine-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-valentine-pink/20 p-2 rounded-full hover:bg-valentine-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-blue-500/20 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-valentine-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-valentine-pink transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-valentine-gold">We Deliver To</h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-xs bg-valentine-red/20 px-3 py-1 rounded-full text-gray-200">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Serving all major areas of Bhopal with fast delivery
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-valentine-gold">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919993228538" className="flex items-start gap-2 text-sm text-gray-300 hover:text-valentine-pink transition-colors">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+91-99932 28538</span>
              </a>
              <a href="mailto:orders@mangalambakeries.com" className="flex items-start gap-2 text-sm text-gray-300 hover:text-valentine-pink transition-colors">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>orders@mangalambakeries.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>MP Nagar, Bhopal,<br />Madhya Pradesh 462011</span>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-4">
              <iframe
                src="https://maps.google.com/maps?q=MP+Nagar+Bhopal&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mangalam Bakeries Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Mangalam Bakeries. All rights reserved. Made with{' '}
              <Heart className="inline text-valentine-red" size={14} /> in Bhopal.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-valentine-pink transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-valentine-pink transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/refund" className="hover:text-valentine-pink transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
