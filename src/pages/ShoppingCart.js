import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../utils/cartUtils";
import { generateWhatsAppMessage, openWhatsAppChat } from "../utils/whatsappUtils";
import { timeSlots, deliveryTypes } from "../data/businessInfo";
import "./ShoppingCart.css";

const ShoppingCart = ({ cartState, cartDispatch }) => {
  const navigate = useNavigate();
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    address: "",
    phone: "",
    deliveryType: "Home Delivery",
    deliveryDate: "",
    timeSlot: "",
    customMessage: "",
  });

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: id });
    } else {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, quantity: newQuantity },
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (!deliveryDetails.address || !deliveryDetails.phone || !deliveryDetails.deliveryDate || !deliveryDetails.timeSlot) {
      alert("Please fill all delivery details");
      return;
    }

    const message = generateWhatsAppMessage(
      cartState.items,
      getCartTotal(cartState.items),
      deliveryDetails
    );
    openWhatsAppChat(message);
    cartDispatch({ type: "CLEAR_CART" });
  };

  const total = getCartTotal(cartState.items);
  const deliveryFee = 0; // Free delivery
  const grandTotal = total + deliveryFee;

  if (cartState.items.length === 0 && !showDeliveryForm) {
    return (
      <div className="shopping-cart">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Add some delicious cakes to your cart!</p>
            <button 
              className="btn-primary"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="container">
        <h1>Your Sweet Selection</h1>
        <p className="subtitle">Review your handpicked treats and choose your delivery preference</p>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items-section">
            <h2>Order Items</h2>
            {cartState.items.length === 0 ? (
              <div className="empty-items">
                <p>No items in cart</p>
              </div>
            ) : (
              <div className="items-list">
                {cartState.items.map(item => (
                  <div key={item.id} className="cart-item">
                    <img 
                      src={`https://via.placeholder.com/80x80?text=${item.name}`}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-weight">{item.weight}</p>
                      {item.customMessage && (
                        <p className="custom-message">📝 {item.customMessage}</p>
                      )}
                    </div>
                    <div className="item-price">₹{item.price}</div>
                    <div className="quantity-control">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="qty-btn"
                      >
                        −
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                    <div className="item-total">₹{item.price * item.quantity}</div>
                    <button 
                      onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                      className="remove-btn"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary & Delivery */}
          <div className="order-summary-section">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal ({cartState.items.length} items)</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span className="free-delivery">FREE</span>
              </div>
              <div className="summary-row total-row">
                <span>Grand Total</span>
                <span className="grand-total">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Delivery Form */}
            {!showDeliveryForm ? (
              <button 
                className="btn-primary btn-large"
                onClick={() => setShowDeliveryForm(true)}
              >
                Proceed to Delivery
              </button>
            ) : (
              <div className="delivery-form">
                <h2>Delivery & Fulfillment</h2>
                
                <div className="form-group">
                  <label>Delivery Type</label>
                  <div className="delivery-types">
                    {deliveryTypes.map(type => (
                      <button
                        key={type}
                        className={`type-btn ${deliveryDetails.deliveryType === type ? "active" : ""}`}
                        onClick={() => setDeliveryDetails(prev => ({...prev, deliveryType: type}))}
                      >
                        {type === "Home Delivery" ? "🚚" : "📍"} {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Delivery Address in Bhopal</label>
                  <textarea
                    name="address"
                    value={deliveryDetails.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address..."
                    rows="3"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Recipient Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={deliveryDetails.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Delivery Date</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={deliveryDetails.deliveryDate}
                      onChange={handleInputChange}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="form-group">
                    <label>Time Slot</label>
                    <select
                      name="timeSlot"
                      value={deliveryDetails.timeSlot}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Custom Message on Cake (Optional)</label>
                  <textarea
                    name="customMessage"
                    value={deliveryDetails.customMessage}
                    onChange={handleInputChange}
                    placeholder="Enter message to be written on cake..."
                    rows="2"
                    className="form-input"
                  />
                </div>

                <div className="form-actions">
                  <button 
                    className="btn-secondary"
                    onClick={() => setShowDeliveryForm(false)}
                  >
                    Back
                  </button>
                  <button 
                    className="btn-primary"
                    onClick={handlePlaceOrder}
                  >
                    💬 Place Order on WhatsApp
                  </button>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="info-box">
              <h4>🎂 Bakery Notes</h4>
              <ul>
                <li>Order must be placed at least 24 hours in advance</li>
                <li>Store pickup available at Indrapuri, Bhopal outlet</li>
                <li>Handcrafted decorations may vary slightly from preview</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
