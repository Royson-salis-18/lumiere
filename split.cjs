const fs = require('fs');
const html = fs.readFileSync('legacy_public/index.html', 'utf-8');

const styleStart = html.indexOf('<style>');
const styleEnd = html.indexOf('</style>');

const css = html.substring(styleStart + 7, styleEnd);
fs.writeFileSync('src/index.css', css);

const bodyStart = html.indexOf('<body>');
const bodyEnd = html.indexOf('</body>');
const bodyHtml = html.substring(bodyStart + 6, bodyEnd);

fs.writeFileSync('src/App.jsx', `
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

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
            <button onClick={() => setWishlistOpen(true)}>Wishlist</button>
            <Link to="/contact" className="nav-cta">Book a Visit</Link>
          </div>
        </nav>
      </div>

      {/* OVERLAYS */}
      <div className={\`overlay-bg \${(searchOpen || wishlistOpen) ? 'active' : ''}\`} onClick={() => { setSearchOpen(false); setWishlistOpen(false); }}></div>
      
      <div className={\`search-panel \${searchOpen ? 'active' : ''}\`}>
        <div className="search-header">
          <input type="text" className="search-input" placeholder="Search the collection..." autoFocus />
          <button className="search-close" onClick={() => setSearchOpen(false)}>×</button>
        </div>
        <div className="trending-searches">
          <span>Trending:</span>
          <Link to="/collections?cat=gold" onClick={() => setSearchOpen(false)}>Gold Rings</Link>
          <Link to="/collections?cat=diamond" onClick={() => setSearchOpen(false)}>Diamond Necklaces</Link>
          <Link to="/collections?cat=bridal" onClick={() => setSearchOpen(false)}>Bridal Sets</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>

    </BrowserRouter>
  );
}
`);
