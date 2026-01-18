import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import CustomCakeBuilder from "./pages/CustomCakeBuilder";
import ShoppingCart from "./pages/ShoppingCart";
import { cartReducer } from "./utils/cartUtils";
import "./App.css";

function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });
  const [selectedLocation, setSelectedLocation] = useState("Bhopal");

  return (
    <Router>
      <div className="App">
        <Header 
          cartItems={cartState.items} 
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/products" 
              element={<ProductListing cartDispatch={cartDispatch} />} 
            />
            <Route 
              path="/custom-cake" 
              element={<CustomCakeBuilder cartDispatch={cartDispatch} />} 
            />
            <Route 
              path="/cart" 
              element={<ShoppingCart cartState={cartState} cartDispatch={cartDispatch} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
