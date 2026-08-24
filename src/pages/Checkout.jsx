import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in:      { opacity: 1, y: 0,  transition: { duration: 1,   ease: [0.16, 1, 0.3, 1] } },
  out:     { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } },
};

const CART_ITEMS = [
  { name: 'Sapphire Solstice Drop', sub: 'High Jewellery', price: 12400, img: '/img2_necklace.png' },
  { name: 'Diamond Halo Ring',      sub: 'Bridal Collection', price: 8200,  img: '/img1_ring.png'    },
];

export default function Checkout() {
  const [step, setStep]       = useState(1); // 1=Info 2=Shipping 3=Payment 4=Confirm
  const [saved, setSaved]     = useState(false);

  const subtotal = CART_ITEMS.reduce((s, i) => s + i.price, 0);

  function next() { setStep(s => Math.min(s + 1, 4)); }
  function handleSubmit(e) { e.preventDefault(); next(); }

  const STEPS = ['Information', 'Shipping', 'Payment', 'Confirmation'];

  return (
    <motion.main className="page-container" variants={pageVariants} initial="initial" animate="in" exit="out">
      <div style={{ marginBottom: '48px' }}>
        <h1 className="text-serif" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1, marginBottom: '32px' }}>
          Secure <span className="text-gold">Checkout</span>
        </h1>
        {/* STEPPER */}
        <div className="checkout-stepper">
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`checkout-step ${step > i ? 'done' : ''} ${step === i + 1 ? 'active' : ''}`}>
                <div className="checkout-step-dot">{step > i + 1 ? '✓' : i + 1}</div>
                <span className="checkout-step-label">{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`checkout-step-line ${step > i + 1 ? 'done' : ''}`} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {step < 4 ? (
        <div className="checkout-layout">
          {/* FORM AREA */}
          <div className="checkout-form-area">
            {step === 1 && (
              <form className="settings-form-card" onSubmit={handleSubmit}>
                <h2 className="settings-section-title" style={{ fontSize: '1.3rem', marginBottom: '24px' }}>Contact & Delivery Information</h2>
                <div className="premium-form">
                  <div className="form-row">
                    <div className="form-group"><label>First Name</label><input required placeholder="Aditi" /></div>
                    <div className="form-group"><label>Last Name</label><input required placeholder="Sharma" /></div>
                  </div>
                  <div className="form-group"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
                  <div className="form-group"><label>Phone</label><input type="tel" required placeholder="+91 98765 43210" /></div>
                  <div className="form-group"><label>Address Line 1</label><input required placeholder="Building, Street" /></div>
                  <div className="form-group"><label>Address Line 2 (optional)</label><input placeholder="Apt, Suite, etc." /></div>
                  <div className="form-row">
                    <div className="form-group"><label>City</label><input required placeholder="Bengaluru" /></div>
                    <div className="form-group"><label>PIN Code</label><input required placeholder="560034" /></div>
                  </div>
                  <div className="form-group"><label>State</label>
                    <select required>
                      <option value="">Select State</option>
                      {['Karnataka','Maharashtra','Tamil Nadu','Delhi','Goa','Rajasthan'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Special Instructions <span style={{ fontWeight: 400, textTransform: 'none', color: 'var(--text-muted)', fontSize: '0.8rem' }}>(optional)</span></label>
                    <textarea rows={3} placeholder="Gift wrapping, engraving requests, etc." style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-solid-dark" style={{ borderRadius: '50px', padding: '18px', fontSize: '1rem' }}>Continue to Shipping →</button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form className="settings-form-card" onSubmit={handleSubmit}>
                <h2 className="settings-section-title" style={{ fontSize: '1.3rem', marginBottom: '24px' }}>Shipping Method</h2>
                <div className="shipping-options">
                  {[
                    { id: 'express', label: 'Lumière Express', sub: '3–5 Business Days', price: 'Complimentary', badge: 'RECOMMENDED' },
                    { id: 'white',   label: 'White Glove Delivery', sub: '1–2 Business Days · Personal Concierge', price: '$49', badge: 'PREMIUM' },
                    { id: 'pickup',  label: 'Boutique Pickup',     sub: 'Ready in 24 hrs · Mumbai & Bengaluru', price: 'Free', badge: null },
                  ].map(opt => (
                    <label key={opt.id} className="shipping-option-card">
                      <input type="radio" name="shipping" value={opt.id} defaultChecked={opt.id === 'express'} />
                      <div className="shipping-option-info">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                          <span style={{ fontWeight: 700 }}>{opt.label}</span>
                          {opt.badge && <span className="shipping-badge">{opt.badge}</span>}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{opt.sub}</span>
                      </div>
                      <div style={{ fontWeight: 700, color: 'var(--accent-dark)', whiteSpace: 'nowrap' }}>{opt.price}</div>
                    </label>
                  ))}
                </div>
                <button type="submit" className="btn-solid-dark" style={{ borderRadius: '50px', padding: '18px', fontSize: '1rem', marginTop: '24px' }}>Continue to Payment →</button>
              </form>
            )}

            {step === 3 && (
              <form className="settings-form-card" onSubmit={handleSubmit}>
                <h2 className="settings-section-title" style={{ fontSize: '1.3rem', marginBottom: '24px' }}>Payment Details</h2>
                <div className="payment-methods">
                  {['💳 Credit / Debit Card','🏦 Net Banking','📱 UPI','💰 EMI Options'].map(m => (
                    <label key={m} className="shipping-option-card" style={{ padding: '16px 20px' }}>
                      <input type="radio" name="payment" defaultChecked={m.includes('Credit')} />
                      <span style={{ fontWeight: 600 }}>{m}</span>
                    </label>
                  ))}
                </div>
                <div className="premium-form" style={{ marginTop: '24px' }}>
                  <div className="form-group"><label>Card Number</label><input placeholder="1234 5678 9012 3456" /></div>
                  <div className="form-row">
                    <div className="form-group"><label>Expiry</label><input placeholder="MM / YY" /></div>
                    <div className="form-group"><label>CVV</label><input placeholder="•••" /></div>
                  </div>
                  <div className="form-group"><label>Name on Card</label><input placeholder="ADITI SHARMA" /></div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '14px 16px', background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(22,163,74,0.2)', borderRadius: '12px', fontSize: '0.9rem', color: '#16a34a' }}>
                    🔒 Your payment is secured with 256-bit SSL encryption and Lumière Secure Pay.
                  </div>
                </div>
                <button type="submit" className="btn-solid-dark" style={{ borderRadius: '50px', padding: '18px', fontSize: '1rem', marginTop: '24px' }}>Place Order →</button>
              </form>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="cart-summary">
            <h2 className="text-serif" style={{ fontSize: '1.8rem', marginBottom: '28px', color: 'var(--accent-dark)' }}>Order Summary</h2>
            {CART_ITEMS.map(item => (
              <div key={item.name} style={{ display: 'flex', gap: '16px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, marginBottom: '2px' }}>{item.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                </div>
                <div style={{ fontWeight: 700 }}>${item.price.toLocaleString()}</div>
              </div>
            ))}
            <div className="summary-details" style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '24px', marginBottom: '24px' }}>
              <div className="summary-row"><span>Subtotal</span><span style={{ fontWeight: 600 }}>${subtotal.toLocaleString()}</span></div>
              <div className="summary-row"><span>Shipping</span><span style={{ fontWeight: 600, color: '#16a34a' }}>Complimentary</span></div>
              <div className="summary-row"><span>Taxes</span><span style={{ fontWeight: 600 }}>At checkout</span></div>
            </div>
            <div className="summary-row total" style={{ fontSize: '1.8rem', border: 'none', padding: 0, margin: 0 }}>
              <span className="text-serif">Total</span>
              <span className="text-gold">${subtotal.toLocaleString()}</span>
            </div>
            <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(198,159,54,0.08)', border: '1px solid rgba(198,159,54,0.25)', borderRadius: '12px', fontSize: '0.85rem', color: 'var(--accent-dark)', lineHeight: 1.6 }}>
              ✦ Gold Members earn <strong>2,060 points</strong> on this order.
            </div>
          </div>
        </div>
      ) : (
        /* CONFIRMATION */
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: '5rem', marginBottom: '24px' }}>✨</div>
          <h2 className="text-serif" style={{ fontSize: 'clamp(2rem,5vw,4rem)', marginBottom: '16px' }}>
            Order <span className="text-gold">Confirmed</span>
          </h2>
          <p className="page-body" style={{ maxWidth: '520px', margin: '0 auto 12px' }}>
            Thank you for your order. Your piece is now with our master artisans undergoing final quality checks.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '48px' }}>
            Order <strong>#LM-00421</strong> · A confirmation has been sent to your email.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/profile" className="btn-solid-dark" style={{ padding: '16px 40px', borderRadius: '50px', display: 'inline-block', fontSize: '1rem' }}>View Order</a>
            <a href="/collections" style={{ padding: '16px 40px', borderRadius: '50px', border: '1px solid var(--border-subtle)', display: 'inline-block', fontSize: '1rem', fontWeight: 600 }}>Continue Shopping</a>
          </div>
        </div>
      )}
    </motion.main>
  );
}
