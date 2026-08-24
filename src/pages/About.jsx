import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  out: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } }
};

export default function About() {
  return (
    <motion.main 
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* ATELIER HERO */}
      <section className="atelier-hero">
        <div className="atelier-hero-text">
          <span className="section-label">Our Heritage</span>
          <h1 className="text-massive" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', marginBottom: '40px' }}>
            A Century of<br/><span className="text-gold">Artisan Mastery</span>
          </h1>
          <p className="page-body-large">
            Lumière was born from a single belief: that jewellery is not an accessory, but a testament to the human spirit. Since 1924, our artisans have carried forward a tradition of unparalleled craftsmanship — shaping gold, setting diamonds, and coaxing colour from the rarest gemstones on earth.
          </p>
        </div>
        <div className="atelier-hero-img">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=90&auto=format&fit=crop" alt="Heritage Craftsmanship" />
        </div>
      </section>

      {/* STATS BENTO */}
      <section className="stats-grid">
        <div className="stat-box">
          <div className="stat-number text-serif">100+</div>
          <div className="stat-text">Years of Heritage</div>
        </div>
        <div className="stat-box">
          <div className="stat-number text-serif">500+</div>
          <div className="stat-text">Unique Designs</div>
        </div>
        <div className="stat-box">
          <div className="stat-number text-serif">50k+</div>
          <div className="stat-text">Clients Worldwide</div>
        </div>
        <div className="stat-box">
          <div className="stat-number text-serif">22</div>
          <div className="stat-text">Award Wins</div>
        </div>
      </section>

      {/* STORY STRIP & CRAFTSMANSHIP BENTO */}
      <section style={{ padding: '100px 5vw' }}>
        <div className="philosophy-layout">
          <div>
            <span className="section-label" style={{ marginBottom: '24px', display: 'inline-block' }}>Our Philosophy</span>
            <h2 className="text-serif text-gold" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '32px' }}>
              Made with Intent.<br/>Worn with Pride.
            </h2>
            <div style={{ width: '80px', height: '2px', background: 'var(--accent-gold)', marginBottom: '24px' }}></div>
          </div>
          <div>
            <p className="page-body-large" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '32px' }}>
              Every Lumière piece begins as a conversation between our designers and the materials themselves. We use only BIS 916 Hallmarked gold, GIA-certified conflict-free diamonds, and ethically sourced gemstones — because the story of a jewel matters as much as its beauty.
            </p>
            <div style={{ paddingLeft: '32px', borderLeft: '3px solid var(--accent-gold)', background: 'linear-gradient(90deg, rgba(198,159,54,0.05) 0%, transparent 100%)', padding: '24px 24px 24px 32px', borderRadius: '0 16px 16px 0' }}>
              <p className="text-serif" style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontSize: '1.4rem', lineHeight: 1.6, margin: 0 }}>
                "Our craftspeople spend up to 300 hours on a single bridal set. That is not production. That is devotion."
              </p>
            </div>
          </div>
        </div>
        
        <div className="craftsmanship-bento-grid">
          <div className="craft-bento-large">
            <img src="/img1_ring.png" alt="Diamond Setting" />
            <div className="craft-overlay">
              <h3 className="text-serif" style={{ fontSize: '2rem' }}>Precision Setting</h3>
              <p>Micro-pavé diamonds set by master jewelers under 40x magnification.</p>
            </div>
          </div>
          <div className="craft-bento-stack">
            <div className="craft-bento-small">
              <img src="/img4_vintage.png" alt="Gold Polishing" />
            </div>
            <div className="craft-bento-small">
              <img src="/img5_pearls.png" alt="Pearl Selection" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section" style={{ padding: '100px 5vw', clear: 'both', position: 'relative', zIndex: 10 }}>
        <div className="values-header">
          <h2 className="text-serif" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>Our Commitments<br/>to You</h2>
          <Link to="/order" className="bento-link">Book Consultation &rarr;</Link>
        </div>
        
        <div className="values-grid">
          <div className="value-bento">
            <div className="value-num text-gold text-serif">01</div>
            <h3 className="value-title">BIS 916 Hallmarked Gold</h3>
            <p className="value-desc">Every piece is certified for purity under India's Bureau of Indian Standards. We use only 22K (916) and 18K gold — never an ounce less.</p>
          </div>
          <div className="value-bento">
            <div className="value-num text-gold text-serif">02</div>
            <h3 className="value-title">Conflict-Free Diamonds</h3>
            <p className="value-desc">All our diamonds are GIA-certified and sourced under the Kimberley Process. Brilliance with a clear conscience — always.</p>
          </div>
          <div className="value-bento">
            <div className="value-num text-gold text-serif">03</div>
            <h3 className="value-title">Lifetime Exchange</h3>
            <p className="value-desc">Your legacy shouldn't be locked away. We offer 100% exchange value on gold and 90% on diamonds, at any point in the future.</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
