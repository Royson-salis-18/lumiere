import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-img">
          <img 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85&auto=format&fit=crop" 
            alt="Lumière atelier" 
          />
        </div>
        <div className="about-hero-text">
          <span className="label">Our Story</span>
          <h1 className="about-headline">A Century of<br/><em>Artisan</em> Mastery</h1>
          <p className="about-body">
            Lumière was born from a single belief: that jewellery is not an accessory, but a testament to the human spirit. Since 1924, our artisans have carried forward a tradition of unparalleled craftsmanship — shaping gold, setting diamonds, and coaxing colour from the rarest gemstones on earth.
          </p>
          <Link to="/collections" className="btn-primary">Explore Collections &rarr;</Link>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat-item"><div className="stat-num">100+</div><div className="stat-lbl">Years of Heritage</div></div>
        <div className="stat-item"><div className="stat-num">500+</div><div className="stat-lbl">Unique Designs</div></div>
        <div className="stat-item"><div className="stat-num">50K+</div><div className="stat-lbl">Clients Worldwide</div></div>
        <div className="stat-item"><div className="stat-num">22</div><div className="stat-lbl">Award Wins</div></div>
      </div>

      {/* STORY STRIP */}
      <section className="story">
        <div className="story-text">
          <span className="label" style={{color: 'var(--gold-lt)'}}>Our Philosophy</span>
          <h2 className="story-heading">Made with Intent.<br/><em>Worn with Pride.</em></h2>
          <p className="story-body">
            Every Lumière piece begins as a conversation between our designers and the materials themselves. We use only BIS 916 Hallmarked gold, GIA-certified conflict-free diamonds, and ethically sourced gemstones — because the story of a jewel matters as much as its beauty. Our craftspeople spend up to 300 hours on a single bridal set. That is not production. That is devotion.
          </p>
        </div>
        <div className="story-img">
          <img 
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85&auto=format&fit=crop" 
            alt="Craftsmanship" 
          />
        </div>
      </section>

      {/* VALUES */}
      <div className="values">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <div>
            <span className="label">What We Stand For</span>
            <h2 className="sec-heading" style={{marginTop: 12}}>Our Commitments<br/>to You</h2>
          </div>
          <Link to="/contact" style={{fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--charcoal)', borderBottom: '1px solid var(--charcoal)', paddingBottom: 2}}>
            Get in Touch
          </Link>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-num">01</div>
            <div className="value-title">BIS 916 Hallmarked Gold</div>
            <div className="value-desc">Every piece is certified for purity under India's Bureau of Indian Standards. We use only 22K (916) and 18K gold — never an ounce less.</div>
          </div>
          <div className="value-card">
            <div className="value-num">02</div>
            <div className="value-title">Conflict-Free Diamonds</div>
            <div className="value-desc">All our diamonds are GIA-certified and sourced under the Kimberley Process. Brilliance with a clear conscience — always.</div>
          </div>
          <div className="value-card">
            <div className="value-num">03</div>
            <div className="value-title">Lifetime Exchange</div>
            <div className="value-desc">Your legacy shouldn't be locked away. We offer 100% exchange value on gold and 90% on diamonds, at any point in the future.</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2 className="cta-heading">Ready to find your <em>perfect</em> piece?</h2>
        <p className="cta-body">Whether you are looking for an engagement ring, a wedding trousseau, or a special gift, our experts are here to guide you.</p>
        <Link to="/contact" className="btn-gold">Book a Consultation</Link>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="foot-grid">
          <div><span className="foot-brand-name">LUMIÈRE</span><p className="foot-text">A legacy of elegance. Each piece is a testament to the timeless pursuit of beauty and the skilled hands that create it.</p></div>
          <div className="foot-col"><h5>Collections</h5><ul>
            <li><Link to="/collections">All Jewellery</Link></li>
            <li><Link to="/collections?cat=gold">Gold</Link></li>
            <li><Link to="/collections?cat=diamond">Diamond</Link></li>
            <li><Link to="/collections?cat=bridal">Bridal</Link></li>
          </ul></div>
          <div className="foot-col"><h5>Company</h5><ul>
            <li><Link to="/about">Our Atelier</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="#">Store Locator</Link></li>
          </ul></div>
          <div className="foot-col"><h5>Client Care</h5><ul>
            <li><Link to="/contact">Book a Visit</Link></li>
            <li><Link to="#">Returns Policy</Link></li>
            <li><Link to="#">Size Guide</Link></li>
          </ul></div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 Lumière Fine Jewellery. All rights reserved.</span>
          <div className="foot-btm-links"><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link></div>
        </div>
      </footer>
    </main>
  );
}
