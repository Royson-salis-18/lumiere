import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  in: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut' } },
  out: { opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8, ease: 'easeIn' } }
};

export default function Home() {
  const heroRef = useRef(null);
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

          {/* Bottom Left Bento Card */}
          <div className="bento-container">
            {/* Socials Box */}
            <div className="bento-socials">
              <div className="social-icon">In</div>
              <div className="social-icon">Tw</div>
              <div className="social-icon">Fb</div>
            </div>

            {/* Main Info Bento */}
            <div className="bento-card main-bento">
              <div className="bento-img-wrap">
                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=90&auto=format&fit=crop" alt="Bracelet" />
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

          {/* Bottom Right Paragraph */}
          <div className="hero-paragraph">
            <h4 className="text-gold" style={{ fontSize: '0.85rem', marginBottom: '8px', letterSpacing: '0.05em' }}>Lumière Jewelry</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '300px' }}>
              Join a passionate community, supporting and motivating each other every step of your luxury journey.
            </p>
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
          <p style={{ maxWidth: '300px', color: 'var(--text-muted)' }}>
            Each piece is an exploration of form and light, meticulously crafted by our master artisans to transcend the ordinary.
          </p>
        </div>

        <div className="editorial-grid">
          <motion.div 
            className="editorial-item item-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=90&auto=format&fit=crop" alt="Ring" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '2.5rem' }}>Eternal Bloom</h3>
              <p className="text-gold">View Details</p>
            </div>
          </motion.div>

          <motion.div 
            className="editorial-item item-2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=90&auto=format&fit=crop" alt="Earrings" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '2rem' }}>Aura Cascade</h3>
            </div>
          </motion.div>

          <motion.div 
            className="editorial-item item-3"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=90&auto=format&fit=crop" alt="Necklace" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '2rem' }}>Velvet Tear</h3>
            </div>
          </motion.div>

          <motion.div 
            className="editorial-item item-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=90&auto=format&fit=crop" alt="Bridal" />
            <div className="item-overlay">
              <h3 className="text-serif" style={{ fontSize: '3rem' }}>Lumière Signature</h3>
              <p className="text-gold">Explore Collection</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
