'use client';

import { ShoppingCart, Trash2, Plus, Minus, Heart, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-valentine-light/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any delicious cakes yet. Start shopping now!
            </p>
            <Link href="/">
              <button className="bg-gradient-to-r from-valentine-red to-valentine-pink text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
                Browse Cakes & Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-valentine-light/30 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8 text-center">
          Your Shopping Cart 🛒
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-6">
                  {/* Product Image */}
                  <div className="text-6xl flex-shrink-0">
                    {item.image}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    {item.flavor && (
                      <p className="text-sm text-gray-600">Flavor: {item.flavor}</p>
                    )}
                    {item.weight && (
                      <p className="text-sm text-gray-600">Weight: {item.weight}</p>
                    )}
                    {item.eggless && (
                      <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
                        🥚 Eggless
                      </span>
                    )}
                  </div>

                  {/* Price & Quantity */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-valentine-red mb-3">
                      ₹{item.price * item.quantity}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-valentine-light rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="bg-white p-2 rounded hover:bg-valentine-red hover:text-white transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-white p-2 rounded hover:bg-valentine-red hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                    title="Remove from cart"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 size={18} />
              Clear All Items
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-4">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Charges</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Discount</span>
                  <span className="font-semibold text-green-600">-₹0</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Amount</span>
                    <span className="text-valentine-red">₹{getTotalPrice()}</span>
                  </div>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-valentine-red outline-none mb-2"
                />
                <button className="w-full bg-valentine-light text-valentine-red py-2 rounded-lg font-semibold hover:bg-valentine-red hover:text-white transition-colors">
                  Apply Coupon
                </button>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="w-full bg-gradient-to-r from-valentine-red to-valentine-pink text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 mb-4">
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>
              </Link>

              {/* Continue Shopping */}
              <Link href="/">
                <button className="w-full bg-white border-2 border-valentine-red text-valentine-red py-3 rounded-full font-semibold hover:bg-valentine-red hover:text-white transition-colors">
                  Continue Shopping
                </button>
              </Link>

              {/* Delivery Info */}
              <div className="mt-6 bg-valentine-light/50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🚚 Delivery Info</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Same-day delivery in Bhopal</li>
                  <li>✓ Midnight delivery available</li>
                  <li>✓ Free delivery on all orders</li>
                  <li>✓ 100% fresh guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
