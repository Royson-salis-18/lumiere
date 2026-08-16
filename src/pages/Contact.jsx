import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1400);
  };

  return (
    <main>
      {/* PAGE HERO */}
      <div className="page-hero" style={{padding: '80px', borderBottom: '1px solid var(--border)'}}>
        <span className="label">Get in Touch</span>
        <h1 className="page-title" style={{marginTop: '12px'}}>Book Your<br/><em>Private Consultation</em></h1>
        <p className="page-sub" style={{marginTop: '14px'}}>Whether you're looking for the perfect bridal set, an anniversary gift, or simply want to explore — our experts are here to guide you every step of the way.</p>
      </div>

      <div className="contact-grid">
        {/* FORM SIDE */}
        <div className="contact-form-side">
          <span className="form-section-label">Consultation Request</span>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="fl" htmlFor="fname">First Name</label>
                <input type="text" id="fname" placeholder="Priya" required />
              </div>
              <div className="form-group">
                <label className="fl" htmlFor="lname">Last Name</label>
                <input type="text" id="lname" placeholder="Sharma" required />
              </div>
            </div>
            <div className="form-group">
              <label className="fl" htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="priya@example.com" required />
            </div>
            <div className="form-group">
              <label className="fl" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+91 98765 43210" required />
            </div>
            <div className="form-group">
              <label className="fl" htmlFor="interest">I'm Interested In</label>
              <select id="interest" required>
                <option value="">Select a category…</option>
                <option>Bridal Jewellery</option>
                <option>Gold Jewellery</option>
                <option>Diamond Jewellery</option>
                <option>Gemstone Jewellery</option>
                <option>Gifting</option>
                <option>Custom / Bespoke Design</option>
                <option>Valuation &amp; Exchange</option>
              </select>
            </div>
            <div className="form-group">
              <label className="fl" htmlFor="visit">Preferred Visit</label>
              <select id="visit" required>
                <option value="">Select an option…</option>
                <option>In-store Visit</option>
                <option>Home Trial</option>
                <option>Virtual Consultation</option>
              </select>
            </div>
            <div className="form-group">
              <label className="fl" htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Tell us a little about what you're looking for — occasion, budget, style preferences…" required></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={status === 'sending' || status === 'sent'}>
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Request Sent ✓' : 'Send Request →'}
            </button>
            {status === 'sent' && (
              <div className="success-msg" style={{display: 'block'}}>Thank you! Our team will be in touch within 24 hours.</div>
            )}
          </form>
        </div>

        {/* INFO SIDE */}
        <div className="contact-info-side">
          <span className="form-section-label">Find Us</span>

          <div className="info-block">
            <div className="info-block-title">Flagship Boutiques</div>
            <div className="store-cards">
              <div className="store-card">
                <div className="store-city">Mumbai</div>
                <p className="store-addr">42, Horniman Circle,<br/>Fort, Mumbai — 400 001</p>
                <div className="store-hrs">Mon – Sat · 11AM – 8PM</div>
              </div>
              <div className="store-card">
                <div className="store-city">Delhi</div>
                <p className="store-addr">C-12, Connaught Place,<br/>New Delhi — 110 001</p>
                <div className="store-hrs">Mon – Sat · 11AM – 8PM</div>
              </div>
              <div className="store-card">
                <div className="store-city">Bengaluru</div>
                <p className="store-addr">15, MG Road,<br/>Bengaluru — 560 001</p>
                <div className="store-hrs">Mon – Sat · 10AM – 8PM</div>
              </div>
              <div className="store-card">
                <div className="store-city">Chennai</div>
                <p className="store-addr">7, Anna Salai,<br/>Chennai — 600 002</p>
                <div className="store-hrs">Mon – Sat · 10AM – 8PM</div>
              </div>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block-title">Direct Contact</div>
            <a href="tel:+918001234567">+91 800 123 4567</a>
            <a href="mailto:hello@lumiere.in">hello@lumiere.in</a>
            <p style={{marginTop: '10px'}}>Client care available Mon – Sat, 10AM – 7PM IST</p>
          </div>

          <div className="info-block">
            <div className="info-block-title">Home Trial Service</div>
            <p>Can't visit us? We'll come to you. Our expert stylists offer complimentary at-home jewellery trials across Mumbai, Delhi, Bengaluru, and Chennai.</p>
          </div>
        </div>
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
