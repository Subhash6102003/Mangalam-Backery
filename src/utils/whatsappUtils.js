// WhatsApp Integration
export const generateWhatsAppMessage = (cartItems, total, deliveryDetails) => {
  const bakeryNumber = "09993228538";
  
  let message = "🎂 *Mangalam Bakery Order* 🎂\n\n";
  message += "📋 *Order Items:*\n";
  
  cartItems.forEach(item => {
    message += `• ${item.name} (${item.weight})\n`;
    message += `  Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}\n`;
  });
  
  message += `\n💰 *Total Amount:* ₹${total}\n`;
  message += `\n📍 *Delivery Details:*\n`;
  message += `Address: ${deliveryDetails.address}\n`;
  message += `Phone: ${deliveryDetails.phone}\n`;
  message += `Delivery Type: ${deliveryDetails.deliveryType}\n`;
  message += `Preferred Date: ${deliveryDetails.deliveryDate}\n`;
  message += `Time Slot: ${deliveryDetails.timeSlot}\n`;
  
  if (deliveryDetails.customMessage) {
    message += `\n✍️ *Custom Message on Cake:*\n${deliveryDetails.customMessage}\n`;
  }
  
  message += `\n\nThank you for ordering from Mangalam Bakery! ❤️`;
  
  return message;
};

export const openWhatsAppChat = (message) => {
  const bakeryNumber = "09993228538";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${bakeryNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
