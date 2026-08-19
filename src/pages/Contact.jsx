import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  out: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } }
};

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1400);
  };

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
          Get In <span className="text-gold">Touch</span>
        </h1>
        <p className="page-body-large" style={{ maxWidth: '600px' }}>
          For bespoke inquiries, styling advice, or general questions, our concierge team is at your disposal.
        </p>
      </div>

      <div className="order-grid">
        {/* FORM SIDE */}
        <div className="order-form-wrapper">
          <h2 className="text-serif" style={{ fontSize: '2rem', marginBottom: '32px', color: 'var(--accent-dark)' }}>Send a Message</h2>
          <form onSubmit={handleSubmit} className="premium-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="How can we assist you today?" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn-solid-dark" disabled={status === 'sending' || status === 'sent'}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
            </button>
            
            {status === 'sent' && (
              <div className="success-msg">Thank you! We will get back to you within 24 hours.</div>
            )}
          </form>
        </div>

        {/* INFO SIDE (BENTO STYLE) */}
        <div className="order-info-wrapper">
          <div className="info-bento dark-bento">
            <h3 className="info-title text-gold">Direct Contact</h3>
            <p className="info-text">+91 800 123 4567<br/>hello@lumiere.in</p>
            <p className="info-text small">Client care available Mon – Sat, 10AM – 7PM IST</p>
          </div>

          <div className="info-bento">
            <h3 className="info-title">Flagship Boutiques</h3>
            <div className="store-list">
              <div className="store-item">
                <strong>Mumbai</strong><br/>42, Horniman Circle, Fort
              </div>
              <div className="store-item">
                <strong>Delhi</strong><br/>C-12, Connaught Place
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
