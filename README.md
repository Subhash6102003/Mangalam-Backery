# 🎂 Mangalam Bakery - Premium E-Commerce Website

A modern, fully responsive React-based e-commerce website for **Mangalam Bakery**, a premium cake shop in Bhopal, India.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse 27+ premium cake varieties
- **Custom Cake Builder**: Interactive step-by-step customization (flavour, weight, shape, photo, message)
- **Shopping Cart**: Complete cart management
- **WhatsApp Integration**: Direct order placement via WhatsApp
- **Delivery Management**: Address, delivery type, time slots

### Technical
- React with React Router for navigation
- Component-based architecture
- Responsive design (mobile-first)
- Smooth animations and transitions
- No external styling libraries (custom CSS)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Footer.js & Footer.css
│   └── ProductCard.js & ProductCard.css
├── pages/
│   ├── Home.js & Home.css
│   ├── ProductListing.js & ProductListing.css
│   ├── CustomCakeBuilder.js & CustomCakeBuilder.css
│   └── ShoppingCart.js & ShoppingCart.css
├── data/
│   ├── cakes.js (27 cake products)
│   └── businessInfo.js
├── utils/
│   ├── cartUtils.js
│   └── whatsappUtils.js
└── App.js & App.css
```

## 🛠️ Installation & Usage

### Installation
```bash
cd mangalam-bakery
npm install
```

### Run Development Server
```bash
npm start
```
Opens at `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 📦 Dependencies

- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `react-scripts` - CRA build tools

## 🎨 Business Details

**Mangalam Bakery**
- 📍 Indrapuri, Bhopal (Outlet Location)
- 🚚 Delivery: All of Bhopal city
- 📞 +91 999 3228538
- ⏰ Open till 12:00 AM daily

## 🎂 Available Cakes (27 Varieties)

- White Forest (₹340)
- Swiss Truffle (₹425)
- Red Velvet (₹425)
- Rasmalai (₹465)
- And 23+ more!

All with multiple weight options available.

## 🛒 How It Works

1. **Browse Products** - Explore our cake collection
2. **Build Custom Cake** - Use the interactive builder or select pre-made cakes
3. **Add to Cart** - Customize quantity and preferences
4. **Checkout** - Provide delivery details
5. **WhatsApp Order** - Send order directly to +91 999 3228538

## 🎨 Color Scheme

- Primary: #c41e3a (Red)
- Secondary: #a01830 (Dark Red)
- Background: #fafafa (Light Gray)
- Text: #333333 (Dark Gray)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
