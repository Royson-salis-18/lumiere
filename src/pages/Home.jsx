import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-panel">
          <div className="label">Heritage Collection</div>
          <h1 className="hero-headline">
            Where <em>Legacy</em><br />
            Meets Brilliance.
          </h1>
          <p className="hero-sub">
            Discover our curated selection of fine gold, rare diamonds, and ethically sourced gemstones, handcrafted in India since 1924.
          </p>
          <div className="hero-actions">
            <Link to="/collections" className="btn-solid">Explore the Collection</Link>
            <Link to="/about" className="btn-outline">Our Atelier</Link>
          </div>
        </div>

        {/* REFINED COLLAGE SHOWCASE */}
        <div className="hero-gallery">
          <div className="collage-wrap">
            <div className="hero-gallery-main">
              <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85&auto=format&fit=crop" alt="Model wearing luxury jewellery" />
            </div>
            
            <div className="hero-gallery-sub-img pos-1">
              <div className="sub-img-wrap">
                <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=85&auto=format&fit=crop" alt="Pearl Necklace" />
              </div>
            </div>
            
            <div className="hero-gallery-sub-img pos-2">
              <div className="sub-img-wrap">
                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85&auto=format&fit=crop" alt="Gold bangles" />
              </div>
              <div className="hero-float-badge">
                <span className="hfb-label">Featured</span>
                <span className="hfb-name">The Viraaz Set</span>
                <span className="hfb-price">Discover &rarr;</span>
              </div>
            </div>

            <div className="hero-gallery-sub-img pos-3">
              <div className="sub-img-wrap">
                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&auto=format&fit=crop" alt="Bridal Sets" />
              </div>
            </div>

            <div className="hero-gallery-sub-img pos-4">
              <div className="sub-img-wrap">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop" alt="Diamond ring close up" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i}>
              CRAFTED IN INDIA <span className="dot">·</span> 
              ETHICALLY SOURCED <span className="dot">·</span> 
              LIFETIME EXCHANGE <span className="dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* SCROLLABLE HOME: FEATURED CATEGORIES */}
      <section className="home-cats">
        <div className="home-cats-inner">
          <div className="hc-header">
            <div className="label">Curated For You</div>
            <h2 className="hc-title">Explore <em>Collections</em></h2>
          </div>
          <div className="hc-grid">
            <Link to="/collections?cat=gold" className="hc-card">
              <div className="hc-img">
                <img src="https://images.unsplash.com/photo-1588444650733-d0767b753fc8?w=600&q=85&auto=format&fit=crop" alt="Pure 22K Gold" />
              </div>
              <h3 className="hc-name">22K Gold</h3>
              <span className="hc-link">Shop Gold &rarr;</span>
            </Link>
            <Link to="/collections?cat=diamond" className="hc-card">
              <div className="hc-img">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&auto=format&fit=crop" alt="GIA Diamonds" />
              </div>
              <h3 className="hc-name">Diamonds</h3>
              <span className="hc-link">Shop Diamonds &rarr;</span>
            </Link>
            <Link to="/collections?cat=bridal" className="hc-card">
              <div className="hc-img">
                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&auto=format&fit=crop" alt="Bridal Sets" />
              </div>
              <h3 className="hc-name">Bridal</h3>
              <span className="hc-link">Shop Bridal &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SCROLLABLE HOME: STORY TEASER */}
      <section className="home-story">
        <div className="hs-img">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85&auto=format&fit=crop" alt="Craftsmanship" />
        </div>
        <div className="hs-text">
          <div className="label">Our Heritage</div>
          <h2 className="hc-title" style={{marginTop: '12px', marginBottom: '24px'}}>A Century of <em>Mastery</em></h2>
          <p className="hero-sub" style={{marginBottom: '32px'}}>
            Every Lumière piece begins as a conversation between our designers and the materials themselves. Our craftspeople spend up to 300 hours on a single bridal set. That is not production. That is devotion.
          </p>
          <Link to="/about" className="btn-solid" style={{display: 'inline-flex', padding: '16px 40px'}}>Discover Our Story</Link>
        </div>
      </section>
      
    </main>
  );
}
