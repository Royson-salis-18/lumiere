import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CollectionDetail from './pages/CollectionDetail';
import { ModalProvider } from './context/ModalContext';
import ProductModal from './components/ProductModal';

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
      <Link to="/" className="nav-brand text-serif" style={{ letterSpacing: '0.15em', fontWeight: 600, fontSize: '1.4rem' }}>
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
        <Route path="/collections/:id" element={<CollectionDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <AnimatedRoutes />
        <ProductModal />

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
              <h2 className="text-serif text-gold" style={{ fontSize: '2.5rem', letterSpacing: '0.15em', fontWeight: 600 }}>LUMIÈRE</h2>
            </div>
            
            <div className="newsletter-block">
               <h4 style={{ marginBottom: '16px', fontWeight: 600, fontSize: '1.1rem' }}>Join the Atelier</h4>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
                 Subscribe to receive exclusive access to our newest collections, private sales, and editorial lookbooks.
               </p>
               <div className="newsletter-input-group">
                 <input type="email" placeholder="Email Address" className="newsletter-input" />
                 <button className="newsletter-btn">Subscribe</button>
               </div>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-heading">Client Care</h4>
              <a href="#">Track Your Order</a>
              <a href="#">Returns & Exchanges</a>
              <a href="#">Shipping Information</a>
              <a href="#">Payment Options</a>
              <a href="#">Repair Services</a>
              <a href="#">Ring Sizing Guide</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">The Maison</h4>
              <a href="#">About Lumière</a>
              <a href="#">Our Heritage</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
              <a href="#">Press & Editorials</a>
              <a href="#">Boutiques</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Policies</h4>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Conflict-Free Diamonds</a>
              <a href="#">BIS Hallmarking</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <a href="tel:18002966677" style={{ display: 'block', marginBottom: '8px' }}>1800-296-6677</a>
              <a href="mailto:care@lumiere.paris">care@lumiere.paris</a>
              <h4 className="footer-heading" style={{ marginTop: '24px' }}>Chat With Us</h4>
              <a href="tel:+918147349242">WhatsApp: +91 8147349242</a>
              <div className="social-row" style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                <span className="social-circle">IG</span>
                <span className="social-circle">FB</span>
                <span className="social-circle">YT</span>
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
    </ModalProvider>
  );
}
