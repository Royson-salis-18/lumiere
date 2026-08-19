import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  out: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } }
};

export default function Contact() {
  const { openModal } = useModal();
  return (
    <motion.main 
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="order-header" style={{ textAlign: 'center', marginBottom: '100px', position: 'relative' }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(198, 159, 54, 0.12) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: 'url(/filigree.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Boutique Experience</span>
          <h1 className="text-massive">Contact &<br/>Concierge</h1>
          <p className="page-body-large" style={{ maxWidth: '600px', margin: '40px auto 0 auto' }}>
            Connect with our master jewelers or schedule a private viewing at one of our flagship boutiques.
          </p>
        </div>
      </div>

      <div className="order-grid" style={{ marginBottom: '100px' }}>
        <div className="order-form-wrapper">
          <h2 className="text-serif" style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--accent-dark)' }}>Private Appointment</h2>
          <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Jane" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="jane@example.com" />
            </div>
            <div className="form-group">
              <label>Boutique Location</label>
              <select>
                <option>Paris Flagship (Place Vendôme)</option>
                <option>New York (Fifth Avenue)</option>
                <option>London (Bond Street)</option>
                <option>Tokyo (Ginza)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Inquiry</label>
              <textarea rows="4" placeholder="How may we assist you?"></textarea>
            </div>
            <button className="btn-solid-dark" style={{ marginTop: '24px' }}>Request Appointment</button>
          </form>
        </div>

        <div className="order-info-wrapper">
          <div className="info-bento dark-bento" style={{ padding: '40px' }}>
            <h3 className="info-title text-gold" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Global Concierge</h3>
            <div className="info-text" style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px' }}>+33 1 40 20 53 17</div>
            <div className="info-text small" style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)' }}>concierge@lumiere.paris</div>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Available Monday through Saturday, 10:00 AM to 7:00 PM CET to assist with private sales, bespoke commissions, and product inquiries.
            </p>
          </div>
          
          <div className="info-bento image-bento" style={{ height: '350px' }}>
            <img src="/img2_necklace.png" alt="Boutique" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* ATELIER HIGHLIGHTS GRID (Replaced Flagships) */}
      <h2 className="text-serif" style={{ fontSize: '3.5rem', marginBottom: '60px', textAlign: 'center' }}>Atelier Highlights</h2>
      <div className="structured-grid">
        {[
          { name: 'Solitaire Halo', desc: 'Diamond Collection', img: '/img1_ring.png', price: '$8,200' },
          { name: 'Sapphire Drop', desc: 'High Jewellery', img: '/img2_necklace.png', price: '$12,400' },
          { name: 'Ruby Cascades', desc: 'Heritage Collection', img: '/img3_earrings.png', price: '$14,000' },
          { name: 'Vintage Pearl', desc: 'Classic Edit', img: '/img5_pearls.png', price: '$6,900' }
        ].map((item, i) => (
          <div key={i} className="grid-product-card" onClick={() => openModal(item)} style={{ cursor: 'pointer' }}>
            <div className="product-img-wrap" style={{ aspectRatio: '1/1', marginBottom: '24px' }}>
              <img src={item.img} alt={item.name} />
              <button className="btn-wishlist" onClick={(e) => e.stopPropagation()}>♡</button>
            </div>
            <h3 className="product-name text-serif" style={{ fontSize: '1.5rem' }}>{item.name}</h3>
            <p className="page-body" style={{ fontSize: '1rem', marginBottom: '8px' }}>{item.desc}</p>
            <div className="text-gold" style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.price}</div>
          </div>
        ))}
      </div>
    </motion.main>
  );
}
