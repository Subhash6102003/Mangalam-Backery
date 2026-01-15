'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Menu, X, Phone, MapPin } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cakes', href: '/cakes' },
    { name: 'Valentine Specials', href: '/valentine-cakes-bhopal' },
    { name: 'Chocolates', href: '/chocolates' },
    { name: 'Custom Cakes', href: '/custom-cakes-bhopal' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-3xl md:text-4xl font-heading font-bold">
              <span className="text-valentine-red">Mangalam</span>
              <span className="text-valentine-pink"> Bakeries</span>
            </div>
            <span className="text-2xl animate-float">🎂</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-valentine-red font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-valentine-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block relative p-2 hover:bg-valentine-light rounded-full transition-colors">
              <Heart className="text-valentine-red" size={24} />
              <span className="absolute -top-1 -right-1 bg-valentine-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <Link href="/cart" className="relative p-2 hover:bg-valentine-light rounded-full transition-colors">
              <ShoppingCart className="text-valentine-red" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-valentine-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 hover:bg-valentine-light rounded-full transition-colors"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-valentine-light animate-slide-up">
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-700 hover:text-valentine-red font-medium py-2 px-4 hover:bg-valentine-light rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
