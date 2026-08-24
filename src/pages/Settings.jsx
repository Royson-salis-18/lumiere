import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in:      { opacity: 1, y: 0,  transition: { duration: 1,   ease: [0.16, 1, 0.3, 1] } },
  out:     { opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeIn' } },
};

const TABS = ['Account', 'Addresses', 'Notifications', 'Security'];

export default function Settings() {
  const [activeTab, setActiveTab]     = useState('Account');
  const [saved, setSaved]             = useState(false);
  const [notifs, setNotifs]           = useState({ newCollections: true, orderUpdates: true, promotions: false, appointments: true, styleInsights: false });

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <motion.main className="page-container" variants={pageVariants} initial="initial" animate="in" exit="out">
      <div className="settings-header">
        <h1 className="text-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, marginBottom: '12px' }}>
          Account <span className="text-gold">Settings</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Manage your profile, addresses, notifications and security preferences.</p>
      </div>

      {/* TABS */}
      <div className="profile-tabs">
        {TABS.map(t => (
          <button key={t} className={`profile-tab-btn ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>

          {/* ACCOUNT */}
          {activeTab === 'Account' && (
            <div className="settings-grid">
              <div className="settings-form-card">
                <h3 className="settings-section-title">Personal Information</h3>
                <form className="premium-form" onSubmit={handleSave}>
                  <div className="form-row">
                    <div className="form-group"><label>First Name</label><input defaultValue="Aditi" /></div>
                    <div className="form-group"><label>Last Name</label><input defaultValue="Sharma" /></div>
                  </div>
                  <div className="form-group"><label>Email Address</label><input type="email" defaultValue="aditi.sharma@email.com" /></div>
                  <div className="form-group"><label>Phone Number</label><input type="tel" defaultValue="+91 98765 43210" /></div>
                  <div className="form-group"><label>Date of Birth</label><input type="date" defaultValue="1992-03-15" /></div>
                  <div className="form-group">
                    <label>Anniversary Date <span style={{ fontWeight: 400, textTransform: 'none', color: 'var(--text-muted)', fontSize: '0.8rem' }}>(for exclusive offers)</span></label>
                    <input type="date" />
                  </div>
                  <div className="form-group"><label>Gender</label>
                    <select>
                      <option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option>
                    </select>
                  </div>
                  {saved && <div className="success-msg"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><polyline points="20 6 9 17 4 12"></polyline></svg> Profile saved successfully!</div>}
                  <button type="submit" className="btn-solid-dark" style={{ borderRadius: '50px', padding: '18px', fontSize: '1rem' }}>Save Changes</button>
                </form>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Avatar */}
                <div className="settings-side-card">
                  <h4 className="settings-section-title" style={{ fontSize: '1rem', marginBottom: '20px' }}>Profile Photo</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div className="profile-avatar" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>A</div>
                    <div>
                      <button className="btn-solid-dark" style={{ padding: '10px 24px', borderRadius: '50px', fontSize: '0.85rem', marginBottom: '8px' }}>Upload Photo</button>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>JPG, PNG · Max 5MB</p>
                    </div>
                  </div>
                </div>
                {/* Membership */}
                <div className="settings-side-card settings-side-dark">
                  <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Membership Tier</h4>
                  <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>Gold ✦</div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '20px', lineHeight: 1.5 }}>2,450 points · 2,550 to Platinum</p>
                  <button style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '10px 24px', borderRadius: '50px', fontSize: '0.85rem', cursor: 'pointer' }}>View Benefits</button>
                </div>
                {/* Delete */}
                <div className="settings-side-card" style={{ border: '1px solid rgba(220,38,38,0.2)' }}>
                  <h4 style={{ color: '#dc2626', fontSize: '1rem', marginBottom: '8px' }}>Danger Zone</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>Permanently delete your account and all associated data. This action cannot be undone.</p>
                  <button style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', color: '#dc2626', padding: '10px 24px', borderRadius: '50px', fontSize: '0.85rem', cursor: 'pointer' }}>Delete Account</button>
                </div>
              </div>
            </div>
          )}

          {/* ADDRESSES */}
          {activeTab === 'Addresses' && (
            <div className="profile-section-card">
              <h3 className="profile-section-title">Saved Addresses</h3>
              {[
                { label: 'Home', addr: '12, Prestige Heights, Koramangala, Bengaluru — 560034', default: true },
                { label: 'Office', addr: '3rd Floor, Mantri Square, Malleswaram, Bengaluru — 560003', default: false },
              ].map((a, i) => (
                <div className="address-row" key={i}>
                  <div className="address-badge">{a.label}</div>
                  <div className="address-info">
                    <p style={{ fontWeight: 600, marginBottom: '4px' }}>{a.label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{a.addr}</p>
                    {a.default && <span className="address-default-tag">Default</span>}
                  </div>
                  <div className="address-actions">
                    <button className="profile-action-link">Edit</button>
                    {!a.default && <button className="profile-action-link">Set Default</button>}
                    {!a.default && <button className="profile-action-link" style={{ color: '#dc2626' }}>Remove</button>}
                  </div>
                </div>
              ))}
              <button className="btn-solid-dark" style={{ marginTop: '32px', padding: '16px 40px', borderRadius: '50px', fontSize: '1rem' }}>
                + Add New Address
              </button>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === 'Notifications' && (
            <div className="profile-section-card">
              <h3 className="profile-section-title">Notification Preferences</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.95rem' }}>Choose how Lumière communicates with you.</p>
              {[
                { key: 'newCollections',  label: 'New Collection Launches',     desc: 'Be the first to discover our newest masterpieces.' },
                { key: 'orderUpdates',    label: 'Order & Shipping Updates',    desc: 'Real-time updates on your orders and deliveries.' },
                { key: 'promotions',      label: 'Exclusive Promotions',        desc: 'Member-only offers, seasonal sales and private events.' },
                { key: 'appointments',    label: 'Appointment Reminders',       desc: 'Gentle reminders for your boutique appointments.' },
                { key: 'styleInsights',   label: 'Style Insights & Editorials', desc: 'Curated jewellery guides and trend reports.' },
              ].map(({ key, label, desc }) => (
                <div className="notif-row" key={key}>
                  <div className="notif-info"><div className="notif-label">{label}</div><div className="notif-desc">{desc}</div></div>
                  <button
                    className={`toggle-switch ${notifs[key] ? 'on' : ''}`}
                    onClick={() => setNotifs(p => ({ ...p, [key]: !p[key] }))}
                    aria-label={`Toggle ${label}`}
                  >
                    <span className="toggle-knob" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* SECURITY */}
          {activeTab === 'Security' && (
            <div className="settings-grid">
              <div className="settings-form-card">
                <h3 className="settings-section-title">Change Password</h3>
                <form className="premium-form" onSubmit={handleSave}>
                  <div className="form-group"><label>Current Password</label><input type="password" placeholder="••••••••" /></div>
                  <div className="form-group"><label>New Password</label><input type="password" placeholder="••••••••" /></div>
                  <div className="form-group"><label>Confirm New Password</label><input type="password" placeholder="••••••••" /></div>
                  {saved && <div className="success-msg"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><polyline points="20 6 9 17 4 12"></polyline></svg> Password updated successfully!</div>}
                  <button type="submit" className="btn-solid-dark" style={{ borderRadius: '50px', padding: '18px', fontSize: '1rem' }}>Update Password</button>
                </form>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="settings-side-card">
                  <h4 className="settings-section-title" style={{ fontSize: '1rem', marginBottom: '16px' }}>Two-Factor Authentication</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>Add an extra layer of security to your account by enabling 2FA via SMS or authenticator app.</p>
                  <button className="btn-solid-dark" style={{ padding: '12px 32px', borderRadius: '50px', fontSize: '0.9rem' }}>Enable 2FA</button>
                </div>
                <div className="settings-side-card">
                  <h4 className="settings-section-title" style={{ fontSize: '1rem', marginBottom: '16px' }}>Active Sessions</h4>
                  {[['Chrome on macOS', 'Bengaluru, IN · Active now'],['Safari on iPhone 15', 'Mumbai, IN · 2 hours ago']].map(([device, loc]) => (
                    <div key={device} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div><p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{device}</p><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{loc}</p></div>
                      <button className="profile-action-link" style={{ color: '#dc2626' }}>Revoke</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}
