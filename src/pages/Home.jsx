import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-eyebrow">
            <span className="label">The 2026 Soleil Edit</span>
            <div className="hero-issue">Volume XII — Gold & Gemstone</div>
          </div>
          <h1 className="hero-headline">
            <span className="block fw-light">Where Beauty</span>
            <span className="block">Meets <span className="gold-word">Legacy.</span></span>
          </h1>
          <p className="hero-body">
            Each piece at Lumière is born from a singular obsession with perfection — shaped by artisans who have spent generations mastering the ancient craft of fine jewellery.
          </p>
          <div className="hero-actions">
            <Link to="/collections" className="btn-primary">Explore Collections</Link>
            <Link to="/about" className="btn-text">Our Atelier</Link>
          </div>
          <div className="hero-meta">
            <div className="meta-item">
              <div className="meta-num">500+</div>
              <div className="meta-lbl">Unique Designs</div>
            </div>
            <div className="meta-item">
              <div className="meta-num">100</div>
              <div className="meta-lbl">Collections</div>
            </div>
            <div className="meta-item">
              <div className="meta-num">50K+</div>
              <div className="meta-lbl">Clients</div>
            </div>
          </div>
        </div>
        
        <div className="hero-gallery">
          <div className="hero-gallery-main">
            <img
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1200&q=90&auto=format&fit=crop"
              alt="Lumière signature piece"
            />
          </div>
          <div className="hero-gallery-sub">
            <div className="hero-gallery-sub-img">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=700&q=85&auto=format&fit=crop"
                alt="Fine jewellery editorial"
              />
            </div>
            <div className="hero-gallery-sub-img">
              <img
                src="https://images.unsplash.com/photo-1589893354433-8a30d52ff2bd?w=700&q=85&auto=format&fit=crop"
                alt="Diamond necklace on model"
              />
              <div className="hero-float-badge">
                <div className="hfb-label">Featured Piece</div>
                <div className="hfb-name">Celestial Soleil Ring</div>
                <div className="hfb-price">From ₹42,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span className="marquee-item">Handcrafted Gold</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">Conflict-Free Diamonds</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">BIS Hallmarked</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">Lifetime Exchange</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">Ethically Sourced Gemstones</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">Free Home Trial</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">30-Day Returns</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">Handcrafted Gold</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">Conflict-Free Diamonds</span><span className="marquee-dot">◆</span>
          <span className="marquee-item">BIS Hallmarked</span><span className="marquee-dot">◆</span>
        </div>
      </div>
    </main>
  );
}
