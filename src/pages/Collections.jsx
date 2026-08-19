import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  out: { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } }
};

const CAROUSEL_ITEMS = [
  { id: 0, name: "Sapphire Solstice", price: "$12,400", desc: "A structurally complete masterpiece featuring a massive blue sapphire surrounded by conflict-free diamonds.", img: "/img2_necklace.png" },
  { id: 1, name: "Diamond Halo Ring", price: "$8,200", desc: "A perfectly cut central diamond encased in a glowing halo of smaller stones, set in pristine platinum for the unforgettable moments.", img: "/img1_ring.png" },
  { id: 2, name: "Heritage Gold Band", price: "$4,500", desc: "Crafted for generations. A vintage-inspired solid gold band featuring intricate filigree work and subtle diamond accents.", img: "/img4_vintage.png" },
  { id: 3, name: "Pearl Choker", price: "$6,900", desc: "A delicate string of south sea pearls, bringing a touch of classic elegance to the modern, curated wardrobe.", img: "/img5_pearls.png" },
  { id: 4, name: "Ruby Chandeliers", price: "$14,000", desc: "Cascading rubies set in rose gold. Designed to catch the light and the attention of everyone in the room.", img: "/img3_earrings.png" }
];

const MAIN_POS   = { left: 56, top: 50, scale: 3.05 };
const PERIM_POS  = [
  { left: 62, top: 8  },  // top
  { left: 93, top: 27 },  // upper-right
  { left: 93, top: 73 },  // lower-right
  { left: 62, top: 92 }   // bottom
];

export default function Collections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openModal } = useModal();
  
  // Create an array mapping each item to its current slot
  // slot -1 is the main position. slots 0-3 are perimeter positions.
  const slots = CAROUSEL_ITEMS.filter(item => item.id !== activeIndex).map(item => item.id);

  return (
    <motion.main 
      className="collection-page"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="collection-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', padding: '0 2vw' }}>
        <div>
          <h1 className="text-massive" style={{ fontSize: 'clamp(3.5rem, 6vw, 6.5rem)' }}>
            Curated<br/><span className="text-gold">Masterpieces</span>
          </h1>
        </div>
        <div className="collection-header-desc">
          "Each piece is an exploration of form and light, meticulously crafted by our master artisans to transcend the ordinary."
        </div>
      </div>

      {/* SUPREME ROTATING CAROUSEL */}
      <div className="supreme-stage-wrap">
        <div className="supreme-info">
          <div className="supreme-eyebrow">Exclusive Collection</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="supreme-title">{CAROUSEL_ITEMS[activeIndex].name}</h2>
              <p className="supreme-desc">{CAROUSEL_ITEMS[activeIndex].desc}</p>
              <div className="text-gold" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '32px' }}>
                {CAROUSEL_ITEMS[activeIndex].price}
              </div>
              <button 
                className="btn-solid-dark" 
                style={{ padding: '16px 40px', borderRadius: '50px' }}
                onClick={() => openModal(CAROUSEL_ITEMS[activeIndex])}
              >
                View Details
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="supreme-stage">
          <div className="supreme-blob"></div>
          <svg className="orbit-svg" viewBox="0 0 640 640">
            <path className="orbit-path" d="M 410 50 C 640 120, 640 520, 410 590"></path>
          </svg>
          
          {CAROUSEL_ITEMS.map((item) => {
            const isMain = item.id === activeIndex;
            const slotIndex = slots.indexOf(item.id);
            
            return (
              <motion.div
                key={item.id}
                className={`supreme-dish ${isMain ? 'is-main' : ''}`}
                onClick={() => {
                  if (!isMain) setActiveIndex(item.id);
                  else openModal(item);
                }}
                animate={{
                  left: `${isMain ? MAIN_POS.left : PERIM_POS[slotIndex].left}%`,
                  top: `${isMain ? MAIN_POS.top : PERIM_POS[slotIndex].top}%`,
                  scale: isMain ? MAIN_POS.scale : 1,
                  zIndex: isMain ? 20 : 15,
                }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                style={{ x: '-50%', y: '-50%', cursor: 'pointer' }}
              >
                <img src={item.img} alt={item.name} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* BLENDED GRID (ASYMMETRICAL BENTO STYLE) */}
      <div className="blended-grid">
        <Link to="/collections/rakhi-edit" className="blend-hero">
          <img src="/img5_pearls.png" alt="Hero Lookbook" />
          <div className="promo-overlay">
            <h3 className="text-serif" style={{ fontSize: '3rem', marginBottom: '16px' }}>The Rakhi Edit</h3>
            <button className="btn-solid-dark" style={{ padding: '12px 32px', borderRadius: '50px' }}>Shop Collection</button>
          </div>
        </Link>
        
        <div className="blend-stack">
          <Link to="/collections/emerald-cut" className="blend-stack-item">
            <img src="/img1_ring.png" alt="Item" />
            <div className="masonry-details" style={{ opacity: 1, transform: 'none', background: 'linear-gradient(to top, rgba(74, 21, 33, 0.9), transparent)' }}>
              <div className="masonry-name">Emerald Cut Halo</div>
              <div className="masonry-price">View Collection</div>
            </div>
          </Link>
          <Link to="/collections/sapphire-drop" className="blend-stack-item">
            <img src="/img2_necklace.png" alt="Item" />
            <div className="masonry-details" style={{ opacity: 1, transform: 'none', background: 'linear-gradient(to top, rgba(74, 21, 33, 0.9), transparent)' }}>
              <div className="masonry-name">Sapphire Drop</div>
              <div className="masonry-price">View Collection</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="blended-grid" style={{ gridAutoRows: '500px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Link to="/collections/ruby-chandeliers" className="blend-stack-item">
          <img src="/img3_earrings.png" alt="Item" />
          <div className="masonry-details" style={{ opacity: 1, transform: 'none', background: 'linear-gradient(to top, rgba(74, 21, 33, 0.9), transparent)' }}>
            <div className="masonry-name">Ruby Chandeliers</div>
            <div className="masonry-price">View Collection</div>
          </div>
        </Link>
        <Link to="/collections/heritage" className="blend-stack-item" style={{ gridColumn: 'span 2' }}>
          <img src="/img4_vintage.png" alt="Item" />
          <div className="promo-overlay">
            <h3 className="text-serif" style={{ fontSize: '3rem', marginBottom: '16px' }}>Heritage High Jewellery</h3>
            <button className="btn-solid-dark" style={{ padding: '12px 32px', borderRadius: '50px' }}>Explore Now</button>
          </div>
        </Link>
      </div>

      {/* DECORATIVE ASSURANCE SECTION */}
      <div className="assurance-section">
        <div className="assurance-box">
          <h2 className="text-serif text-gold" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>The Lumière Assurance</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Crafted by experts, cherished by you.</p>
          
          <div className="assurance-grid">
            <div className="assurance-item">
              <div className="assurance-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h4>Lumière Exchange</h4>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4>Purity Guarantee</h4>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h4>Easy Replacements</h4>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h4>Lifetime Maintenance</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
