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
      <div className="cart-header" style={{ marginBottom: '80px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '40px' }}>
        <h1 className="text-massive" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}>
          Your <span className="text-gold">Cart</span>
        </h1>
        <p className="page-body-large" style={{ marginTop: '16px' }}>2 items in your order.</p>
      </div>

      <div className="cart-grid">
        <div className="cart-items">
          <div className="premium-cart-item">
            <div className="cart-item-img">
              <img src="/img2_necklace.png" alt="Sapphire Solstice Drop" />
            </div>
            <div className="cart-item-details">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="cart-item-sub">High Jewellery</div>
                  <h3 className="cart-item-title">Sapphire Solstice Drop</h3>
                  <p className="page-body" style={{ fontSize: '1rem', marginTop: '8px' }}>White Gold, Blue Sapphire, Diamonds</p>
                </div>
                <div className="cart-item-price" style={{ fontSize: '1.75rem' }}>$12,400</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
                <div className="qty-selector">
                  <span>QTY: 1</span>
                </div>
                <button className="cart-item-remove">Remove</button>
              </div>
            </div>
          </div>
          
          <div className="premium-cart-item">
            <div className="cart-item-img">
              <img src="/img1_ring.png" alt="Lumière Diamond Halo" />
            </div>
            <div className="cart-item-details">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="cart-item-sub">Bridal Collection</div>
                  <h3 className="cart-item-title">Lumière Diamond Halo</h3>
                  <p className="page-body" style={{ fontSize: '1rem', marginTop: '8px' }}>Platinum, 2.5ct Cushion Cut Diamond</p>
                </div>
                <div className="cart-item-price" style={{ fontSize: '1.75rem' }}>$8,200</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
                <div className="qty-selector">
                  <span>QTY: 1</span>
                </div>
                <button className="cart-item-remove">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '32px', color: 'var(--accent-dark)' }}>Order Summary</h2>
          <div className="summary-details" style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '32px', marginBottom: '32px' }}>
            <div className="summary-row">
              <span>Subtotal</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>$20,600</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Complimentary</span>
            </div>
            <div className="summary-row">
              <span>Estimated Taxes</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Calculated at checkout</span>
            </div>
          </div>
          
          <div className="summary-row total" style={{ fontSize: '2rem', border: 'none', padding: 0, marginTop: 0 }}>
            <span className="text-serif">Total</span>
            <span className="text-gold">$20,600</span>
          </div>
          
          <button className="btn-solid-dark" style={{ width: '100%', marginTop: '40px', padding: '24px', fontSize: '1.2rem' }}>
            Proceed to Checkout
          </button>
          
          <div className="cart-assurances" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '1.5rem' }}>🔒</span>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Checkout</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '1.5rem' }}>✨</span>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
