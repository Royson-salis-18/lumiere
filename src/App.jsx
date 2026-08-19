import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Nav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="nav-container">
      <Link to="/" className="nav-brand">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '12px' }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        LUMIÈRE
      </Link>
      
      <div className="nav-pill">
        <Link to="/" className={`nav-pill-link ${path === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/collections" className={`nav-pill-link ${path === '/collections' ? 'active' : ''}`}>Collections</Link>
        <Link to="/about" className={`nav-pill-link ${path === '/about' ? 'active' : ''}`}>Atelier</Link>
        <Link to="/contact" className={`nav-pill-link ${path === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>

      <div className="nav-actions">
        <Link to="/cart" className="nav-btn-cart">Cart [1]</Link>
      </div>
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <AnimatedRoutes />

      {/* SUPER DESIGNER FOOTER */}
      <footer className="designer-footer">
        {/* SVG Top Book/Scallop Curve Divider */}
        <div className="footer-curve">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,0 L640,0 C700,0 720,40 720,40 C720,40 740,0 800,0 L1440,0 L1440,60 L0,60 Z" fill="var(--accent-dark)"></path>
          </svg>
        </div>

        <div className="footer-content">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1" style={{ marginBottom: '16px' }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <h2 className="text-serif text-gold" style={{ fontSize: '2.5rem', letterSpacing: '0.1em' }}>LUMIÈRE</h2>
            </div>
            
            <div className="qr-section">
              <p style={{ marginBottom: '16px', fontWeight: 600 }}>Download the Lumière App Now</p>
              <div className="qr-code-placeholder">
                {/* Simulated QR Code squares */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', width: '100px', height: '100px', background: '#FFF', padding: '8px' }}>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px', gridColumn: 'span 2' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                  <div style={{ background: '#000', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <button className="app-btn">Play Store</button>
                <button className="app-btn">App Store</button>
              </div>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-heading">Useful Links</h4>
              <a href="#">Delivery Information</a>
              <a href="#">International Shipping</a>
              <a href="#">Payment Options</a>
              <a href="#">Track your Order</a>
              <a href="#">Returns</a>
              <a href="#">Find a Store</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Information</h4>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Offers & Contest Details</a>
              <a href="#">Help & FAQs</a>
              <a href="#">About Lumière</a>
              <a href="#">Cookie Policy</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <a href="tel:18002966677" style={{ display: 'block', marginBottom: '8px' }}>1800-296-6677</a>
              <h4 className="footer-heading" style={{ marginTop: '24px' }}>Chat With Us</h4>
              <a href="tel:+918147349242">+91 8147349242</a>
              <div className="social-row" style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                <span className="social-circle">W</span>
                <span className="social-circle">E</span>
                <span className="social-circle">C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social-bar">
            <span>Social</span>
            <div className="social-icons">
              <i>IG</i> <i>TW</i> <i>FB</i> <i>YT</i>
            </div>
          </div>
          <div className="footer-legal">
            <p>© 2026 Lumière Atelier. All Rights Reserved.</p>
            <div className="legal-links">
              <a href="#">Cyber Security Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Notice</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}
