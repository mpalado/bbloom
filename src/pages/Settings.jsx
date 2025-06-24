import React from 'react';
import { Link } from 'react-router-dom';

// Sidebar item with active highlight and hover effect
function SidebarItem({ children, active }) {
  return (
    <li
      style={{
        marginBottom: '1.2rem',
        color: active ? '#fff' : '#b3c0e6',
        background: active ? 'rgba(43,78,255,0.18)' : 'none',
        borderRadius: '6px',
        padding: '0.6rem 1rem',
        fontWeight: active ? 700 : 500,
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s'
      }}
      onMouseOver={e => { if (!active) e.currentTarget.style.background = 'rgba(43,78,255,0.08)'; }}
      onMouseOut={e => { if (!active) e.currentTarget.style.background = 'none'; }}
    >
      {children}
    </li>
  );
}

const Settings = () => {
  const section = {
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  };
  const sectionTitle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  const input = {
    width: '45%',
    padding: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
  };
  const button = {
    padding: '10px 20px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '10px',
  };
  const upgradeBtn = {
    float: 'right',
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  };
  const planDetails = {
    marginTop: '10px',
    color: '#4b5563',
  };
  const footerButtons = {
    textAlign: 'right',
  };
  const toggleWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
  };
  const grayToggle = {
    backgroundColor: '#d1d5db',
    borderRadius: '12px',
    width: '40px',
    height: '20px',
    position: 'relative',
  };
  const blueToggle = {
    backgroundColor: '#2563eb',
    borderRadius: '12px',
    width: '40px',
    height: '20px',
    position: 'relative',
  };
  const circle = {
    width: '16px',
    height: '16px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    position: 'absolute',
    top: '2px',
    transition: 'left 0.3s ease',
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100dvh',
        width: '100vw',
        fontFamily: 'Inter, Arial, sans-serif',
        background: 'linear-gradient(120deg, #f7f9fb 60%, #e9eefd 100%)',
        overflow: 'hidden',
        maxWidth: '100vw'
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: '250px',
          background: 'linear-gradient(160deg, #243c9d 80%, #2b4eff 100%)',
          padding: '2.5rem 1.5rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100dvh',
          boxSizing: 'border-box',
          minWidth: '200px',
          boxShadow: '2px 0 12px rgba(36,60,157,0.07)'
        }}
      >
        <div>
          <h2 style={{ color: '#fff', marginBottom: '2.5rem', fontWeight: 800, letterSpacing: 1 }}>BrainBloom</h2>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontWeight: 500, color: '#b3c0e6', fontSize: '1.08rem' }}>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}><SidebarItem>Dashboard</SidebarItem></Link>
              <Link to="/myquizzes" style={{ textDecoration: 'none' }}><SidebarItem>My Quizzes</SidebarItem></Link>
              <Link to="/study-analytics" style={{ textDecoration: 'none' }}><SidebarItem>Study Analytics</SidebarItem></Link>
              <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><SidebarItem>Notes & AI Summarizer</SidebarItem></Link>
              <Link to="/generate-quiz" style={{ textDecoration: 'none' }}><SidebarItem>Generate Quiz</SidebarItem></Link>
              <SidebarItem active>Settings</SidebarItem>
            </ul>
          </nav>
        </div>
        <div style={{ marginTop: '2rem', color: '#fff', borderTop: '1px solid #3e53b6', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Sarah</p>
          <p style={{ fontSize: '0.95rem', color: '#b3c0e6' }}>Free Plan</p>
        </div>
      </aside>

      {/* Main */}
      <main style={{
        flex: 1,
        padding: '40px',
        overflowY: 'auto',
        minWidth: 0,
        maxWidth: '100vw',
        boxSizing: 'border-box',
        color: '#111'
      }}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#243c9d' }}>Settings</h2>
        <p style={{ color: '#6b7280' }}>Manage your account preferences and subscription</p>

        <div style={section}>
          <div style={sectionTitle}>Account Information</div>
          <input type="text" placeholder="Full Name" style={input} />
          <input type="email" placeholder="Email Address" style={input} />
          <div style={footerButtons}>
            <button style={button}>Save Changes</button>
            <button style={{ ...button, backgroundColor: '#e5e7eb', color: '#374151' }}>
              Cancel
            </button>
          </div>
        </div>

        <div style={section}>
          <div style={sectionTitle}>Subscription Plan</div>
          <button style={upgradeBtn}>Upgrade Plan</button>
          <p><strong>Free Plan</strong></p>
          <p style={planDetails}>5 quiz generations per month • Basic features</p>
          <ul style={planDetails}>
            <li>✔️ 5 quiz generations</li>
            <li>✔️ Up to 10 file uploads</li>
          </ul>
        </div>

        <div style={section}>
          <div style={sectionTitle}>Preferences</div>
          {['Email Notifications', 'Study Reminders', 'Weekly Progress Reports'].map((item, idx) => (
            <div style={toggleWrapper} key={idx}>
              <span>{item}</span>
              <div style={idx === 1 ? grayToggle : blueToggle}>
                <div
                  style={{
                    ...circle,
                    left: idx === 1 ? '2px' : '22px',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div style={section}>
          <div style={sectionTitle}>Security</div>
          <div style={toggleWrapper}>
            <span>Change Password</span>
            <button style={{ ...button, padding: '6px 12px', fontSize: '14px' }}>Edit</button>
          </div>
          <div style={toggleWrapper}>
            <span>Two-Factor Authentication</span>
            <button style={{ ...button, padding: '6px 12px', fontSize: '14px' }}>Edit</button>
          </div>
        </div>

        <div style={footerButtons}>
          <button style={button}>Save Changes</button>
          <button style={{ ...button, backgroundColor: '#e5e7eb', color: '#374151' }}>
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
};

export default Settings;