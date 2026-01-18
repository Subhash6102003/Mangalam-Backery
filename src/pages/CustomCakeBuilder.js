import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cakeWeights, cakeShapes } from "../data/businessInfo";
import "./CustomCakeBuilder.css";

const CustomCakeBuilder = ({ cartDispatch }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [customCake, setCustomCake] = useState({
    name: "Custom Cake",
    flavor: "",
    weight: "500gm",
    shape: "Round",
    price: 500,
    customMessage: "",
    photoUpload: null,
  });

  const flavorOptions = [
    { name: "Belgian Chocolate", price: 425 },
    { name: "Red Velvet", price: 425 },
    { name: "Fresh Mango", price: 425 },
    { name: "Swiss Truffle", price: 425 },
    { name: "Rasmalai", price: 465 },
    { name: "Butterscotch", price: 340 },
    { name: "Black Forest", price: 340 },
    { name: "Dutch Almond", price: 425 },
  ];

  const weightPriceMap = {
    "500gm": 0,
    "1 Kg": 200,
    "2 Kg": 400,
  };

  const handleFlavorSelect = (flavor) => {
    setCustomCake(prev => ({
      ...prev,
      flavor: flavor.name,
      price: flavor.price + weightPriceMap[prev.weight],
    }));
  };

  const handleWeightSelect = (weight) => {
    const basePrice = customCake.price - weightPriceMap[customCake.weight];
    setCustomCake(prev => ({
      ...prev,
      weight,
      price: basePrice + weightPriceMap[weight],
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomCake(prev => ({
        ...prev,
        photoUpload: file.name,
      }));
    }
  };

  const handleAddToCart = () => {
    if (!customCake.flavor) {
      alert("Please select a flavor");
      return;
    }

    const cartItem = {
      id: Date.now(),
      name: `Custom ${customCake.flavor}`,
      weight: customCake.weight,
      shape: customCake.shape,
      price: customCake.price,
      customMessage: customCake.customMessage,
      photoUpload: customCake.photoUpload,
      veg: true,
    };

    cartDispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });

    alert("Custom cake added to cart!");
    navigate("/cart");
  };

  return (
    <div className="custom-cake-builder">
      <div className="container">
        <div className="builder-header">
          <h1>🎨 Build Your Custom Cake</h1>
          <p>Create your perfect cake with our interactive builder</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          {[1, 2, 3, 4].map(stepNum => (
            <div 
              key={stepNum}
              className={`progress-step ${step >= stepNum ? "active" : ""} ${step === stepNum ? "current" : ""}`}
              onClick={() => setStep(stepNum)}
            >
              <div className="step-number">{stepNum}</div>
              <div className="step-label">
                {stepNum === 1 && "Flavour"}
                {stepNum === 2 && "Weight & Shape"}
                {stepNum === 3 && "Personalize"}
                {stepNum === 4 && "Review"}
              </div>
            </div>
          ))}
        </div>

        <div className="builder-layout">
          {/* Left - Preview */}
          <div className="preview-section">
            <div className="cake-preview">
              <div className={`cake-visual ${customCake.shape.toLowerCase()}`}>
                <span className="cake-emoji">🎂</span>
                {customCake.flavor && (
                  <span className="flavor-name">{customCake.flavor}</span>
                )}
              </div>
              <div className="preview-details">
                <h3>Your Custom Cake</h3>
                {customCake.flavor && (
                  <>
                    <p><strong>Flavor:</strong> {customCake.flavor}</p>
                    <p><strong>Weight:</strong> {customCake.weight}</p>
                    <p><strong>Shape:</strong> {customCake.shape}</p>
                    {customCake.customMessage && (
                      <p><strong>Message:</strong> {customCake.customMessage}</p>
                    )}
                    {customCake.photoUpload && (
                      <p><strong>Photo:</strong> ✓ Uploaded</p>
                    )}
                    <p className="price-display">₹{customCake.price}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right - Builder Steps */}
          <div className="builder-section">
            {/* Step 1: Select Flavour */}
            {step === 1 && (
              <div className="builder-step">
                <h2>1. Select Your Flavour</h2>
                <p className="step-desc">Choose from our premium flavours</p>
                <div className="flavour-grid">
                  {flavorOptions.map((flavor, idx) => (
                    <div 
                      key={idx}
                      className={`flavour-card ${customCake.flavor === flavor.name ? "selected" : ""}`}
                      onClick={() => handleFlavorSelect(flavor)}
                    >
                      <div className="flavour-emoji">🍰</div>
                      <h3>{flavor.name}</h3>
                      <p className="flavour-price">+₹{flavor.price}</p>
                    </div>
                  ))}
                </div>
                <button 
                  className="btn-next"
                  onClick={() => setStep(2)}
                  disabled={!customCake.flavor}
                >
                  Next: Weight & Shape →
                </button>
              </div>
            )}

            {/* Step 2: Weight & Shape */}
            {step === 2 && (
              <div className="builder-step">
                <h2>2. Choose Weight & Shape</h2>
                
                <div className="option-group">
                  <h3>Weight</h3>
                  <div className="option-buttons">
                    {cakeWeights.map(weight => (
                      <button
                        key={weight}
                        className={`option-btn ${customCake.weight === weight ? "selected" : ""}`}
                        onClick={() => handleWeightSelect(weight)}
                      >
                        {weight}
                        <span className="price-diff">
                          {weightPriceMap[weight] > 0 && `+₹${weightPriceMap[weight]}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group">
                  <h3>Shape</h3>
                  <div className="shape-buttons">
                    {cakeShapes.map(shape => (
                      <button
                        key={shape}
                        className={`shape-btn ${customCake.shape === shape ? "selected" : ""}`}
                        onClick={() => setCustomCake(prev => ({...prev, shape}))}
                      >
                        <span className="shape-icon">
                          {shape === "Round" && "⭕"}
                          {shape === "Heart" && "❤️"}
                          {shape === "Square" && "⬜"}
                          {shape === "Rectangle" && "▭"}
                        </span>
                        <span>{shape}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="step-navigation">
                  <button className="btn-back" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button className="btn-next" onClick={() => setStep(3)}>
                    Next: Personalize →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personalize */}
            {step === 3 && (
              <div className="builder-step">
                <h2>3. Personalize Your Cake</h2>

                <div className="form-group">
                  <label>Custom Message on Cake</label>
                  <textarea
                    value={customCake.customMessage}
                    onChange={(e) => setCustomCake(prev => ({
                      ...prev,
                      customMessage: e.target.value
                    }))}
                    placeholder="Enter message for cake (e.g., 'Happy Birthday Sarah!')"
                    rows="3"
                    maxLength="50"
                    className="form-input"
                  />
                  <small>{customCake.customMessage.length}/50 characters</small>
                </div>

                <div className="form-group">
                  <label>Upload Photo for Photo Cake</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="photo"
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="file-input"
                    />
                    <label htmlFor="photo" className="file-label">
                      {customCake.photoUpload ? (
                        <>✓ {customCake.photoUpload} uploaded</>
                      ) : (
                        <>📷 Click to upload photo</>
                      )}
                    </label>
                  </div>
                  <small>Optional: Upload a photo to be printed on your cake</small>
                </div>

                <div className="step-navigation">
                  <button className="btn-back" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button className="btn-next" onClick={() => setStep(4)}>
                    Next: Review →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Add to Cart */}
            {step === 4 && (
              <div className="builder-step">
                <h2>4. Review Your Cake</h2>
                
                <div className="review-details">
                  <div className="review-item">
                    <span>Flavor:</span>
                    <strong>{customCake.flavor}</strong>
                  </div>
                  <div className="review-item">
                    <span>Weight:</span>
                    <strong>{customCake.weight}</strong>
                  </div>
                  <div className="review-item">
                    <span>Shape:</span>
                    <strong>{customCake.shape}</strong>
                  </div>
                  {customCake.customMessage && (
                    <div className="review-item">
                      <span>Message:</span>
                      <strong>{customCake.customMessage}</strong>
                    </div>
                  )}
                  {customCake.photoUpload && (
                    <div className="review-item">
                      <span>Photo Cake:</span>
                      <strong>✓ {customCake.photoUpload}</strong>
                    </div>
                  )}
                  <div className="review-item total">
                    <span>Total Price:</span>
                    <strong className="price">₹{customCake.price}</strong>
                  </div>
                </div>

                <div className="step-navigation">
                  <button className="btn-back" onClick={() => setStep(3)}>
                    ← Back
                  </button>
                  <button 
                    className="btn-primary btn-add"
                    onClick={handleAddToCart}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCakeBuilder;
