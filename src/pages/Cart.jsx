import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  out: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } }
};

export default function Cart() {
  return (
    <motion.main 
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="order-header">
        <h1 className="text-massive" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', marginBottom: '24px' }}>
          Your <span className="text-gold">Cart</span>
        </h1>
      </div>

      <div className="cart-grid">
        {/* ITEMS LIST */}
        <div className="cart-items">
          <div className="cart-item">
            <div className="cart-item-img">
              <img src="/hero.png" alt="Product" />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-sub">Earrings</div>
              <h3 className="cart-item-title">Sapphire Solstice Drop</h3>
              <div className="cart-item-price">$12,400</div>
            </div>
            <button className="cart-item-remove">Remove</button>
          </div>
          
          <div className="cart-item">
            <div className="cart-item-img">
              <img src="https://images.unsplash.com/photo-1599643478514-4a4e06d528c8?w=800&q=85&auto=format&fit=crop" alt="Product" />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-sub">Ring</div>
              <h3 className="cart-item-title">Lumière Diamond Halo</h3>
              <div className="cart-item-price">$8,200</div>
            </div>
            <button className="cart-item-remove">Remove</button>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$20,600</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Complimentary</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>$20,600</span>
          </div>
          <button className="btn-solid-dark" style={{ width: '100%', marginTop: '32px' }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </motion.main>
  );
}
