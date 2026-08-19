import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* MINIMALIST NAVIGATION */}
      <nav className="nav-wrap">
        <div className="nav-links">
          <Link to="/collections">Collections</Link>
          <Link to="/about">Atelier</Link>
        </div>
        <Link to="/" className="nav-brand">LUMIÈRE</Link>
        <div className="nav-links">
          <Link to="/contact">Contact</Link>
          <button>Cart (0)</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">LUMIÈRE</div>
        <Link to="/collections" className="btn-primary">Explore The Collection</Link>
      </footer>
    </BrowserRouter>
  );
}
