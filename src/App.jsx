import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('lumiere_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lumiere_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('lumiere_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('lumiere_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (item) => {
    setWishlist(prev => {
      const exists = prev.some(x => x.name === item.name);
      if (exists) {
        return prev.filter(x => x.name !== item.name);
      }
      return [...prev, item];
    });
  };

  const removeWishlistItem = (name) => {
    setWishlist(prev => prev.filter(x => x.name !== name));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* TOPBAR */}
      <div className="topbar">
        <span>NEW ARRIVAL: <b>THE SOLEIL COLLECTION</b></span>
        <span className="hide-mob" style={{margin: '0 12px'}}>·</span>
        <span className="hide-mob">FREE SHIPPING ON ORDERS ABOVE ₹25,000</span>
      </div>

      {/* NAVBAR */}
      <div className="nav-wrap">
        <nav className="nav-inner">
          <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>LUMIÈRE<span className="brand-dot">®</span></Link>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/collections" onClick={() => setMenuOpen(false)}>Collections</Link>
            <Link to="/collections?cat=gold" onClick={() => setMenuOpen(false)}>Gold</Link>
            <Link to="/collections?cat=diamond" onClick={() => setMenuOpen(false)}>Diamond</Link>
            <Link to="/collections?cat=bridal" onClick={() => setMenuOpen(false)}>Bridal</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>Atelier</Link>
          </div>
          <div className="nav-icons">
            <button onClick={() => setSearchOpen(true)}>Search</button>
            <button onClick={() => setWishlistOpen(true)}>Wishlist ({wishlist.length})</button>
            <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ fontSize: '1rem', padding: '0 4px', background: 'transparent' }}>
              {theme === 'light' ? '☾' : '☼'}
            </button>
            <Link to="/contact" className="nav-cta">Book a Visit</Link>
            <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </nav>
      </div>

      {/* OVERLAYS */}
      <div className={`overlay-bg ${(searchOpen || wishlistOpen) ? 'active' : ''}`} onClick={() => { setSearchOpen(false); setWishlistOpen(false); }}></div>
      
      {/* Search Panel */}
      <div className={`search-panel ${searchOpen ? 'active' : ''}`}>
        <div className="search-header">
          <input type="text" className="search-input" placeholder="Search the collection..." autoFocus={searchOpen} />
          <button className="search-close" onClick={() => setSearchOpen(false)}>×</button>
        </div>
        <div className="trending-searches">
          <span>Trending:</span>
          <Link to="/collections?cat=gold" onClick={() => setSearchOpen(false)}>Gold Rings</Link>
          <Link to="/collections?cat=diamond" onClick={() => setSearchOpen(false)}>Diamond Necklaces</Link>
          <Link to="/collections?cat=bridal" onClick={() => setSearchOpen(false)}>Bridal Sets</Link>
        </div>
      </div>

      {/* Wishlist Panel */}
      <div className={`wishlist-panel ${wishlistOpen ? 'active' : ''}`}>
        <div className="wishlist-header">
          <h3>Your Wishlist</h3>
          <button className="wishlist-close" onClick={() => setWishlistOpen(false)}>×</button>
        </div>
        <div className="wishlist-items">
          {wishlist.length === 0 ? (
            <div className="wishlist-empty">Your wishlist is currently empty.</div>
          ) : (
            wishlist.map((p, idx) => (
              <div key={idx} className="wishlist-item">
                <img src={p.img} className="wishlist-item-img" alt={p.name} />
                <div className="wishlist-item-details">
                  <div className="wishlist-item-cat">{p.type || p.cat}</div>
                  <div className="wishlist-item-name">{p.name}</div>
                  <div className="wishlist-item-price">{p.price}</div>
                  <button className="wishlist-item-remove" onClick={() => removeWishlistItem(p.name)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections toggleWishlist={toggleWishlist} getWishlist={() => wishlist} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

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

    </BrowserRouter>
  );
}
