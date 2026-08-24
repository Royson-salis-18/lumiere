import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in:      { opacity: 1, y: 0,  transition: { duration: 1,   ease: [0.16, 1, 0.3, 1] } },
  out:     { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } },
};

const STEPS = ['Order Placed', 'Processing', 'Quality Check', 'Shipped', 'Delivered'];

export default function OrderTracking() {
  const [trackId, setTrackId]     = useState('');
  const [trackInput, setTrackInput] = useState('');
  const [currentStep]             = useState(3); // 0-indexed: "Shipped"

  function handleTrack(e) {
    e.preventDefault();
    if (trackInput.trim()) setTrackId(trackInput.trim().toUpperCase());
  }

  return (
    <motion.main className="page-container" variants={pageVariants} initial="initial" animate="in" exit="out">
      <div style={{ marginBottom: '60px' }}>
        <span className="section-label">Order Management</span>
        <h1 className="text-serif" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, marginBottom: '16px' }}>
          Track Your <span className="text-gold">Order</span>
        </h1>
        <p className="page-body" style={{ maxWidth: '520px' }}>
          Enter your order ID or the email you used at checkout to get a live update on your piece.
        </p>
      </div>

      {/* SEARCH BAR */}
      <form className="track-search-form" onSubmit={handleTrack}>
        <input
          className="track-input"
          placeholder="Enter Order ID (e.g. LM-00412)"
          value={trackInput}
          onChange={e => setTrackInput(e.target.value)}
        />
        <button type="submit" className="btn-solid-dark" style={{ padding: '20px 48px', borderRadius: '16px', fontSize: '1rem', marginTop: 0 }}>Track</button>
      </form>

      {/* RESULT */}
      {trackId ? (
        <div className="track-result-card">
          <div className="track-result-header">
            <div>
              <div className="section-label" style={{ marginBottom: '4px' }}>Order #{trackId}</div>
              <h2 className="text-serif" style={{ fontSize: '2rem', color: 'var(--accent-dark)' }}>Sapphire Solstice Drop</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>Estimated Delivery: <strong>Aug 28, 2026</strong></p>
            </div>
            <div className="track-order-img"><img src="/img2_necklace.png" alt="Order Item" /></div>
          </div>

          {/* PROGRESS STEPPER */}
          <div className="track-stepper">
            {STEPS.map((step, i) => (
              <React.Fragment key={step}>
                <div className={`track-step ${i <= currentStep ? 'done' : ''} ${i === currentStep ? 'current' : ''}`}>
                  <div className="track-dot">{i <= currentStep ? '✓' : i + 1}</div>
                  <div className="track-step-label">{step}</div>
                </div>
                {i < STEPS.length - 1 && <div className={`track-line ${i < currentStep ? 'done' : ''}`} />}
              </React.Fragment>
            ))}
          </div>

          {/* TIMELINE */}
          <div className="track-timeline">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '20px', color: 'var(--accent-dark)' }}>Shipment Timeline</h3>
            {[
              { date: 'Aug 23, 2026 · 02:15 PM', event: 'Package dispatched from Lumière Mumbai Atelier', done: true  },
              { date: 'Aug 22, 2026 · 11:00 AM', event: 'Quality check passed — piece wrapped & sealed',  done: true  },
              { date: 'Aug 20, 2026 · 09:00 AM', event: 'Artisan finishing and hallmarking complete',       done: true  },
              { date: 'Aug 18, 2026 · 10:30 AM', event: 'Order confirmed and entered production queue',    done: true  },
            ].map((ev, i) => (
              <div className="timeline-row" key={i}>
                <div className={`timeline-dot ${ev.done ? 'done' : ''}`} />
                <div className="timeline-content">
                  <p className="timeline-event">{ev.event}</p>
                  <p className="timeline-date">{ev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '24px' }}>
          {[
            { icon: '🔒', title: 'Secure Packaging', desc: 'Every piece ships in a tamper-proof Lumière signature box with a certificate of authenticity.' },
            { icon: '✈️', title: 'Express Shipping',  desc: 'Complimentary insured express shipping on all orders. Delivered in 3–5 business days.' },
            { icon: '♻️', title: 'Easy Returns',      desc: '15-day hassle-free returns. We arrange pickup from your doorstep at no cost.' },
            { icon: '📞', title: '24/7 Concierge',    desc: 'Our dedicated concierge team is available round-the-clock for any assistance.' },
          ].map(card => (
            <div className="info-bento" key={card.title}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{card.icon}</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--accent-dark)' }}>{card.title}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      )}
    </motion.main>
  );
}
