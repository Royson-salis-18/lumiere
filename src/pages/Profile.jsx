import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in:      { opacity: 1, y: 0,  transition: { duration: 1,   ease: [0.16, 1, 0.3, 1] } },
  out:     { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } },
};

const TABS = ['Overview', 'Orders', 'Wishlist', 'Appointments'];

const ORDERS = [
  { id: '#LM-00412', date: 'Aug 18, 2026', item: 'Sapphire Solstice Drop', status: 'Delivered', price: '$12,400', img: '/img2_necklace.png' },
  { id: '#LM-00388', date: 'Jul 02, 2026', item: 'Diamond Halo Ring',      status: 'Delivered', price: '$8,200',  img: '/img1_ring.png'    },
  { id: '#LM-00361', date: 'May 14, 2026', item: 'Pearl Choker',           status: 'Delivered', price: '$6,900',  img: '/img5_pearls.png' },
];

const WISHLIST = [
  { name: 'Eternal Bloom',      price: '$4,200',  img: '/img1_ring.png'     },
  { name: 'Ruby Chandeliers',   price: '$14,000', img: '/img3_earrings.png' },
  { name: 'Heritage Gold Band', price: '$4,500',  img: '/img4_vintage.png'  },
];

const APPOINTMENTS = [
  { date: 'Sep 05, 2026 · 11:00 AM', boutique: 'Lumière Flagship — Mumbai',     type: 'Private Styling Session',       status: 'Confirmed' },
  { date: 'Oct 12, 2026 · 03:00 PM', boutique: 'Lumière Atelier — Bengaluru', type: 'Ring Customisation Consult', status: 'Pending'   },
];

const STATUS_COLOR = { Delivered: '#16a34a', 'In Transit': '#d97706', Processing: '#2563eb', Confirmed: '#16a34a', Pending: '#d97706' };

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <motion.main className="page-container" variants={pageVariants} initial="initial" animate="in" exit="out">

      {/* PROFILE HERO */}
      <div className="profile-hero-strip">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">A</div>
          <div className="profile-tier-badge">GOLD MEMBER</div>
        </div>
        <div className="profile-hero-info">
          <h1 className="text-serif" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1, marginBottom: '8px' }}>Aditi Sharma</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '4px' }}>aditi.sharma@email.com</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Member since Jan 2025 · 3 Orders · $27,500 Lifetime Value</p>
        </div>
        <Link to="/settings" className="btn-solid-dark" style={{ padding: '14px 32px', borderRadius: '50px', fontSize: '0.95rem', display: 'inline-block', whiteSpace: 'nowrap' }}>Edit Profile</Link>
      </div>

      {/* LOYALTY CARD */}
      <div className="loyalty-card">
        <div className="loyalty-card-inner">
          <div>
            <div className="loyalty-tier-label">Gold Membership</div>
            <div className="loyalty-points">2,450 <span>Points</span></div>
          </div>
          <div className="loyalty-progress-area">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Gold</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Platinum · 5,000 pts</span>
            </div>
            <div className="loyalty-track"><div className="loyalty-fill" style={{ width: '49%' }} /></div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>2,550 points to Platinum</p>
          </div>
          <div className="loyalty-perks">
            <div className="loyalty-perk">✦ Early Access to Collections</div>
            <div className="loyalty-perk">✦ Complimentary Engraving</div>
            <div className="loyalty-perk">✦ Priority Repair Services</div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="profile-tabs">
        {TABS.map(tab => (
          <button key={tab} className={`profile-tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>

          {activeTab === 'Overview' && (
            <div className="profile-overview-grid">
              {[['🛍️','3','Total Orders'],['💛','3','Wishlist Items'],['📅','2','Appointments'],['🏅','2,450','Loyalty Points']].map(([icon,val,lbl]) => (
                <div className="profile-stat-card" key={lbl}>
                  <div className="pstat-icon">{icon}</div>
                  <div className="pstat-value">{val}</div>
                  <div className="pstat-label">{lbl}</div>
                </div>
              ))}
              <div className="profile-section-card" style={{ gridColumn: '1/-1' }}>
                <h3 className="profile-section-title">Recent Orders</h3>
                {ORDERS.slice(0, 2).map(o => (
                  <div className="profile-order-row" key={o.id}>
                    <div className="profile-order-img"><img src={o.img} alt={o.item} /></div>
                    <div className="profile-order-info"><div className="profile-order-name">{o.item}</div><div className="profile-order-meta">{o.id} · {o.date}</div></div>
                    <div className="profile-order-price">{o.price}</div>
                    <div className="profile-order-status" style={{ color: STATUS_COLOR[o.status] }}>{o.status}</div>
                  </div>
                ))}
                <button className="profile-view-more" onClick={() => setActiveTab('Orders')}>View All Orders →</button>
              </div>
            </div>
          )}

          {activeTab === 'Orders' && (
            <div className="profile-section-card">
              <h3 className="profile-section-title">Order History</h3>
              {ORDERS.map(o => (
                <div className="profile-order-row profile-order-row--full" key={o.id}>
                  <div className="profile-order-img"><img src={o.img} alt={o.item} /></div>
                  <div className="profile-order-info"><div className="profile-order-name">{o.item}</div><div className="profile-order-meta">{o.id} · {o.date}</div></div>
                  <div className="profile-order-price">{o.price}</div>
                  <div className="profile-order-status" style={{ color: STATUS_COLOR[o.status] }}>{o.status}</div>
                  <div className="profile-order-actions">
                    <button className="profile-action-link">Track</button>
                    <button className="profile-action-link">Invoice</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Wishlist' && (
            <div>
              <h3 className="profile-section-title" style={{ marginBottom: '32px' }}>Saved Pieces</h3>
              <div className="wishlist-grid">
                {WISHLIST.map(item => (
                  <div className="wishlist-item-card" key={item.name}>
                    <div className="wishlist-item-img"><img src={item.img} alt={item.name} /><button className="btn-wishlist-remove">✕</button></div>
                    <div className="wishlist-item-info">
                      <div className="wishlist-item-name">{item.name}</div>
                      <div className="wishlist-item-price text-gold">{item.price}</div>
                      <button className="btn-solid-dark" style={{ width:'100%', padding:'14px', fontSize:'0.9rem', marginTop:'16px', borderRadius:'12px' }}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Appointments' && (
            <div className="profile-section-card">
              <h3 className="profile-section-title">My Appointments</h3>
              {APPOINTMENTS.map((a, i) => (
                <div className="appt-row" key={i}>
                  <div className="appt-icon">📍</div>
                  <div className="appt-info"><div className="appt-type">{a.type}</div><div className="appt-boutique">{a.boutique}</div><div className="appt-date">{a.date}</div></div>
                  <div className="appt-status" style={{ color: STATUS_COLOR[a.status] }}>{a.status}</div>
                  <div className="appt-actions"><button className="profile-action-link">Reschedule</button><button className="profile-action-link" style={{ color:'#dc2626' }}>Cancel</button></div>
                </div>
              ))}
              <button className="btn-solid-dark" style={{ marginTop:'32px', padding:'16px 40px', borderRadius:'50px', fontSize:'1rem' }}>Book New Appointment</button>
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}
