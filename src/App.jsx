import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CollectionDetail from './pages/CollectionDetail';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import OrderTracking from './pages/OrderTracking';
import Checkout from './pages/Checkout';
import { ModalProvider } from './context/ModalContext';
import ProductModal from './components/ProductModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Nav() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const profileRef = React.useRef(null);

  React.useEffect(() => { setMenuOpen(false); setProfileOpen(false); }, [location]);
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close profile dropdown on outside click
  React.useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const leftLinks = [
    { to: '/collections', label: 'High Jewellery' },
    { to: '/collections', label: 'Collections' },
    { to: '/about',       label: 'The Maison' },
  ];

  return (
    <>
      <nav className="nav-container premium-nav">
        {/* Left Side: Navigation Links */}
        <div className="nav-left nav-desktop-only">
          {leftLinks.map((l, i) => (
            <Link key={i} to={l.to} className={`nav-link ${path === l.to ? 'active' : ''}`}>{l.label}</Link>
          ))}
        </div>

        {/* Center: Brand Logo */}
        <div className="nav-center">
          <Link to="/" className="nav-brand text-serif">
            LUMIÈRE
          </Link>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="nav-right">
          {/* Search Icon */}
          <button className="nav-icon-btn nav-desktop-only" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>

          {/* Profile Dropdown */}
          <div className="nav-profile-wrap nav-desktop-only" ref={profileRef}>
            <button className="nav-icon-btn" onClick={() => setProfileOpen(o => !o)} aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            {profileOpen && (
              <div className="nav-profile-dropdown">
                <div className="nav-profile-header">
                  <div className="nav-profile-avatar-lg">A</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Aditi Sharma</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Gold Member ✦</div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '8px 0' }} />
                <Link to="/profile"  className="nav-dropdown-item">My Profile</Link>
                <Link to="/track"    className="nav-dropdown-item">Track Order</Link>
                <Link to="/checkout" className="nav-dropdown-item">Checkout</Link>
                <Link to="/settings" className="nav-dropdown-item">Settings</Link>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '8px 0' }} />
                <button className="nav-dropdown-item" style={{ color: '#dc2626', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 16px', borderRadius: '10px', fontFamily: 'inherit', fontSize: '0.95rem' }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="nav-icon-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </Link>

          {/* Hamburger — mobile only */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span className={`ham-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-inner">
          <p className="drawer-brand text-serif">LUMIÈRE</p>
          <nav className="drawer-links">
            {leftLinks.map((l, i) => (
              <Link key={i} to={l.to} className={`drawer-link ${path === l.to ? 'drawer-link-active' : ''}`}>{l.label}</Link>
            ))}
            <Link to="/cart"     className="drawer-link">Cart</Link>
            <Link to="/profile"  className="drawer-link">My Profile</Link>
            <Link to="/track"    className="drawer-link">Track Order</Link>
            <Link to="/settings" className="drawer-link">Settings</Link>
          </nav>
          <p className="drawer-tagline">Fine Jewellery · Est. 2024</p>
        </div>
      </div>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"              element={<Home />} />
        <Route path="/collections"   element={<Collections />} />
        <Route path="/collections/:id" element={<CollectionDetail />} />
        <Route path="/about"         element={<About />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/cart"          element={<Cart />} />
        <Route path="/profile"       element={<Profile />} />
        <Route path="/settings"      element={<Settings />} />
        <Route path="/track"         element={<OrderTracking />} />
        <Route path="/checkout"      element={<Checkout />} />
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
          <div className="footer-curve">
            <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
              <path d="M0,0 L640,0 C700,0 720,40 720,40 C720,40 740,0 800,0 L1440,0 L1440,60 L0,60 Z" fill="var(--accent-dark)" />
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
                <Link to="/track">Track Your Order</Link>
                <a href="#">Returns &amp; Exchanges</a>
                <a href="#">Shipping Information</a>
                <a href="#">Payment Options</a>
                <a href="#">Repair Services</a>
                <a href="#">Ring Sizing Guide</a>
              </div>

              <div className="footer-col">
                <h4 className="footer-heading">The Maison</h4>
                <Link to="/about">About Lumière</Link>
                <a href="#">Our Heritage</a>
                <a href="#">Sustainability</a>
                <a href="#">Careers</a>
                <a href="#">Press &amp; Editorials</a>
                <a href="#">Boutiques</a>
              </div>

              <div className="footer-col">
                <h4 className="footer-heading">My Account</h4>
                <Link to="/profile">My Profile</Link>
                <Link to="/profile">Order History</Link>
                <Link to="/settings">Account Settings</Link>
                <Link to="/track">Order Tracking</Link>
                <a href="#">Wishlist</a>
                <a href="#">Loyalty Rewards</a>
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
              <div className="social-icons"><i>IG</i> <i>TW</i> <i>FB</i> <i>YT</i></div>
            </div>
            <div className="footer-legal">
              <p>© 2026 Lumière Atelier. All Rights Reserved.</p>
              <div className="legal-links">
                <a href="#">Cyber Security Policy</a>
                <a href="#">Terms &amp; Conditions</a>
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
