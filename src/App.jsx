import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
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
      {/* TOPBAR */}
      <div className="topbar">
        NEW ARRIVAL: <b>THE SOLEIL COLLECTION</b> — HANDCRAFTED GOLD & DIAMOND.
        <span style={{margin: '0 12px'}}>·</span>
        FREE SHIPPING ON ORDERS ABOVE ₹25,000
      </div>

      {/* NAVBAR */}
      <div className="nav-wrap">
        <nav className="nav-inner">
          <Link to="/" className="nav-brand">LUMIÈRE<span className="brand-dot">®</span></Link>
          <div className="nav-links">
            <Link to="/collections">Collections</Link>
            <Link to="/collections?cat=gold">Gold</Link>
            <Link to="/collections?cat=diamond">Diamond</Link>
            <Link to="/collections?cat=bridal">Bridal</Link>
            <Link to="/about">Atelier</Link>
          </div>
          <div className="nav-icons">
            <button onClick={() => setSearchOpen(true)}>Search</button>
            <button onClick={() => setWishlistOpen(true)}>Wishlist ({wishlist.length})</button>
            <Link to="/contact" className="nav-cta">Book a Visit</Link>
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

    </BrowserRouter>
  );
}
