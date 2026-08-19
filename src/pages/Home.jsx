import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef}>
      {/* NEW HERO SECTION BASED ON REFERENCE */}
      <section className="hero-new">
        
        {/* Left Content */}
        <div className="hero-new-left">
          <motion.h1 
            className="hero-new-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Timeless<br />Elegance
          </motion.h1>
          <motion.p 
            className="hero-new-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Redefining the way you wear jewelry, elevate your style with pieces that are both modern and classic.
          </motion.p>
          <motion.div 
            className="hero-new-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/collections" className="btn-solid-accent">Buy Now</Link>
            <Link to="/about" className="btn-link">Learn More <span style={{fontSize: '1.2rem', marginLeft: '4px'}}>›</span></Link>
          </motion.div>

          {/* Bottom Card */}
          <motion.div 
            className="hero-new-bottom"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-new-card">
              <img src="https://images.unsplash.com/photo-1599643478514-4a4e06d528c8?w=400&q=85&auto=format&fit=crop" alt="Bangle" />
              <div className="hero-new-card-title">Golden Starlet Bangle</div>
              <div className="hero-new-card-link">See Detail</div>
            </div>
            <div className="hero-new-arrow-wrap">
              <div className="hero-new-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Shaped Image */}
        <div className="hero-new-right">
          <motion.div 
            className="hero-new-image-wrap"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=900&q=85&auto=format&fit=crop" alt="Luxury Bridal Necklace" />
          </motion.div>
        </div>
      </section>

      {/* CIRCULAR / RADIAL SHOWCASE */}
      <section className="circular-showcase">
        <div className="circular-container">
           {/* Center Piece */}
           <motion.div 
             className="circle-item" 
             style={{ zIndex: 10, width: '400px', height: '500px' }}
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
             <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=85&auto=format&fit=crop" alt="Pearl Necklace" />
             <div className="circle-item-details">
               <div className="circle-item-title">Lumière Teardrop</div>
               <div className="circle-item-price">$189.00</div>
             </div>
           </motion.div>

           {/* Orbiting Pieces */}
           <motion.div 
             className="circle-item" 
             style={{ top: '10%', left: '15%' }}
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2 }}
           >
             <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85&auto=format&fit=crop" alt="Gold ring" />
             <div className="circle-item-details">
               <div className="circle-item-title">Eternal Bloom</div>
               <div className="circle-item-price">$159.00</div>
             </div>
           </motion.div>

           <motion.div 
             className="circle-item" 
             style={{ bottom: '10%', right: '15%' }}
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.4 }}
           >
             <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop" alt="Diamond Ring" />
             <div className="circle-item-details">
               <div className="circle-item-title">Velvet Heart</div>
               <div className="circle-item-price">$199.00</div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* TECHNICAL SPECS SECTION */}
      <section className="tech-specs">
        <div className="tech-image">
          <motion.img 
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=85&auto=format&fit=crop" 
            alt="Technical Details"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
        </div>
        <div className="tech-details">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="tech-stat"
          >
            <div className="tech-stat-label">Height</div>
            <div className="tech-stat-value">25.1 mm</div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="tech-stat"
          >
            <div className="tech-stat-label">Diamond Weight</div>
            <div className="tech-stat-value">1.292 gct</div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="tech-stat"
          >
            <div className="tech-stat-label">Metal Weight</div>
            <div className="tech-stat-value">2.77 gm</div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
