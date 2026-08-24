import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const pageVariants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  in: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut' } },
  out: { opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8, ease: 'easeIn' } }
};

export default function Home() {
  const heroRef = useRef(null);
  const { openModal } = useModal();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <motion.main 
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* MASSIVE HERO WITH INSET BORDER & BENTOS */}
      <section ref={heroRef} className="hero-dribbble">
        <motion.div className="hero-bg" style={{ y: heroY, scale: heroScale }}>
          <img src="/hero.png" alt="Luxury Jewelry" />
        </motion.div>
        
        {/* INSET CONTAINER */}
        <div className="hero-inset">
          
          {/* Main Hero Text (Right Aligned) */}
          <div className="hero-text-container">
            <h1 className="text-massive text-serif" style={{ lineHeight: '0.9', marginBottom: '32px' }}>
              Luxury<br/>Jewelry
            </h1>
            <div className="hero-text-actions">
              <button className="btn-pill-white">
                Contact Us 
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Bottom Right Bento Card (Moved to right) */}
          <div className="bento-container bento-desktop-right">
            {/* Socials Box */}
            <div className="bento-socials">
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </div>
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
            </div>

            {/* Main Info Bento */}
            <div className="bento-card main-bento">
              <div className="bento-img-wrap">
                <img src="/img4_vintage.png" alt="Bracelet" />
              </div>
              <div className="bento-content">
                <h3 className="bento-title">Unlock Your<br/>Potential Your<br/>Journey</h3>
                <a href="/collections" className="bento-link">Shop Now</a>
              </div>
            </div>
            
            {/* Secondary Stat Bento */}
            <div className="bento-card stat-bento">
              <div className="stat-val">24K</div>
              <div className="stat-label">Pure Gold</div>
            </div>
          </div>

          {/* Bottom Left KPI Stats */}
          <div className="hero-paragraph paragraph-desktop-left">
            <div style={{
              display: 'flex', gap: '0', alignItems: 'stretch',
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '20px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', lineHeight: 1, color: '#fff', marginBottom: '6px' }}>100+</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Years Heritage</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ padding: '20px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', lineHeight: 1, color: '#fff', marginBottom: '6px' }}>50k+</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Clients Served</div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.12)' }} />
              <div style={{ padding: '20px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', lineHeight: 1, color: 'var(--accent-gold)', marginBottom: '6px' }}>GIA</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Certified</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-container">
        <div className="marquee-content">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text">Redefining Elegance • </span>
          ))}
        </div>
      </section>

      {/* EDITORIAL ASYMMETRICAL GRID */}
      <section className="editorial-section">
        <div className="editorial-header">
          <h2 className="editorial-title text-serif">Curated<br/><span className="text-gold">Masterpieces</span></h2>
          <p className="collection-header-desc">
            "Each piece is an exploration of form and light, meticulously crafted by our master artisans to transcend the ordinary."
          </p>
        </div>

        <div className="editorial-grid">
          <motion.div 
            className="editorial-item item-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openModal({ name: "Eternal Bloom", img: "/img1_ring.png", price: "$4,200", desc: "A masterpiece of brilliant cuts." })}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img1_ring.png" alt="Ring" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '2.5rem' }}>Eternal Bloom</h3>
              <p className="text-gold">Quick View</p>
            </div>
          </motion.div>

          <motion.div 
            className="editorial-item item-2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openModal({ name: "Aura Cascade", img: "/img3_earrings.png", price: "$14,000", desc: "Cascading rubies set in rose gold." })}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img3_earrings.png" alt="Earrings" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '2rem' }}>Aura Cascade</h3>
              <p className="text-gold">Quick View</p>
            </div>
          </motion.div>

          <motion.div 
            className="editorial-item item-3"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openModal({ name: "Velvet Tear", img: "/img2_necklace.png", price: "$12,400", desc: "A stunning deep blue sapphire pendant." })}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img2_necklace.png" alt="Necklace" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '2rem' }}>Velvet Tear</h3>
              <p className="text-gold">Quick View</p>
            </div>
          </motion.div>

          <motion.div 
            className="editorial-item item-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openModal({ name: "Lumière Signature", img: "/img5_pearls.png", price: "$6,900", desc: "Classic elegance." })}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img5_pearls.png" alt="Bridal" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '3rem' }}>Lumière Signature</h3>
              <p className="text-gold">Quick View</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
