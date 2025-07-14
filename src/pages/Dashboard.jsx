import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'Inter, Arial, sans-serif',
        background: 'linear-gradient(120deg, #f7f9fb 60%, #e9eefd 100%)',
        width: '100vw',
        overflow: 'hidden'
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
          height: '100vh',
          boxSizing: 'border-box',
          minWidth: '200px',
          boxShadow: '2px 0 12px rgba(36,60,157,0.07)'
        }}
      >
        <div>
          <h2 style={{ color: '#fff', marginBottom: '2.5rem', fontWeight: 800, letterSpacing: 1 }}>BrainBloom</h2>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, fontWeight: 500, color: '#b3c0e6', fontSize: '1.08rem' }}>
              <SidebarItem active>Dashboard</SidebarItem>
              <Link to="/myquizzes" style={{ textDecoration: 'none' }}><SidebarItem>My Quizzes</SidebarItem></Link>
              <Link to="/study-analytics" style={{ textDecoration: 'none' }}><SidebarItem>Study Analytics</SidebarItem></Link>
              <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><SidebarItem>Notes & AI Summarizer</SidebarItem></Link>
              <Link to="/generate-quiz" style={{ textDecoration: 'none' }}><SidebarItem>Generate Quiz</SidebarItem></Link>
              <Link to="/settings" style={{ textDecoration: 'none' }}><SidebarItem>Settings</SidebarItem></Link>
            </ul>
          </nav> 
        </div>
        <div style={{ marginTop: '2rem', color: '#fff', borderTop: '1px solid #3e53b6', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Sarah</p>
          <p style={{ fontSize: '0.95rem', color: '#b3c0e6' }}>Student</p>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: '2.5rem 3vw',
          overflowY: 'auto',
          minWidth: 0,
          boxSizing: 'border-box'
        }}
      >
        <h1 style={{ color: '#243c9d', fontSize: '2.3rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: 1 }}>Dashboard</h1>
        <p style={{ marginBottom: '2.5rem', color: '#666', fontSize: '1.1rem' }}>Welcome back! Here's your study overview</p>

        {/* Top Row */}
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {/* Study Goals */}
          <ModernCard>
            <h3 style={cardTitle}>Study Goals</h3>
            <p style={cardText}>Weekly Quiz Target <strong>3/5</strong></p>
            <ProgressBar percent={60} />
            <p style={cardText}>Study Hours <strong>12/20</strong></p>
            <ProgressBar percent={60} />
          </ModernCard>

          {/* Recent Activity */}
          <ModernCard>
            <h3 style={cardTitle}>Recent Activity</h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#555', fontSize: '1rem' }}>
              <li>Completed Tourism Quiz <span style={activityTime}>2 hours ago</span></li>
              <li>Uploaded Math Notes <span style={activityTime}>5 hours ago</span></li>
              <li>Generated History Quiz <span style={activityTime}>1 day ago</span></li>
            </ul>
          </ModernCard>

          {/* Performance */}
          <ModernCard style={{ textAlign: 'center', background: 'linear-gradient(120deg, #e9eefd 70%, #fff 100%)' }}>
            <h3 style={cardTitle}>Performance</h3>
            <p style={{ fontSize: '2.3rem', color: '#2b4eff', margin: '1rem 0 0.5rem 0', fontWeight: 700 }}>87%</p>
            <p style={metricLabel}>Average Quiz Score</p>
            <p style={cardText}>Quizzes Taken: <strong>24</strong></p>
            <p style={cardText}>Study Streak: <strong>7 days</strong></p>
          </ModernCard>
        </div>

        {/* Bottom Row */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Upcoming Quizzes */}
<ModernCard>
  <h3 style={cardTitle}>Upcoming Quizzes</h3>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ModernCard
      style={{
        background: '#f7f9fb',
        minHeight: 'unset',
        marginBottom: 0,
        padding: '1rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <span style={{ color: '#243c9d', fontWeight: 600 }}>Mathematics Chapter 4</span>
      <span style={{
        background: '#fffbe6',
        color: '#f0a500',
        fontWeight: 'bold',
        borderRadius: '999px',
        padding: '0.35em 1.2em',
        fontSize: '0.98rem',
        marginLeft: '1rem',
        border: '1px solid #ffe08a',
        display: 'inline-block'
      }}>Pending</span>
    </ModernCard>
    <ModernCard
      style={{
        background: '#f7f9fb',
        minHeight: 'unset',
        marginBottom: 0,
        padding: '1rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <span style={{ color: '#243c9d', fontWeight: 600 }}>History: World War II</span>
      <span style={{
        background: '#fffbe6',
        color: '#f0a500',
        fontWeight: 'bold',
        borderRadius: '999px',
        padding: '0.35em 1.2em',
        fontSize: '0.98rem',
        marginLeft: '1rem',
        border: '1px solid #ffe08a',
        display: 'inline-block'
      }}>Pending</span>
    </ModernCard>
    <ModernCard
      style={{
        background: '#f7f9fb',
        minHeight: 'unset',
        marginBottom: 0,
        padding: '1rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <span style={{ color: '#243c9d', fontWeight: 600 }}>Science Lab Review</span>
      <span style={{
        background: '#fffbe6',
        color: '#f0a500',
        fontWeight: 'bold',
        borderRadius: '999px',
        padding: '0.35em 1.2em',
        fontSize: '0.98rem',
        marginLeft: '1rem',
        border: '1px solid #ffe08a',
        display: 'inline-block'
      }}>Pending</span>
    </ModernCard>
  </div>
</ModernCard>

          {/* Quick Actions */}
          <ModernCard>
            <h3 style={cardTitle}>Quick Actions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <ModernButton>Create Quiz</ModernButton>
              <ModernButton>Upload Notes</ModernButton>
              <ModernButton>View Analytics</ModernButton>
              <ModernButton>My Quizzes</ModernButton>
            </div>
          </ModernCard>
        </div>
      </main>
    </div>
  );
}

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

// Card with shadow, rounded corners, and hover effect
function ModernCard({ children, style }) {
  return (
    <div
      style={{
        flex: 1,
        background: '#fff',
        padding: '2rem 1.5rem',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(36,60,157,0.09)',
        minWidth: '270px',
        minHeight: '180px',
        marginBottom: '1.5rem',
        transition: 'box-shadow 0.2s, transform 0.2s',
        ...style
      }}
      onMouseOver={e => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(43,78,255,0.13)';
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.015)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(36,60,157,0.09)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {children}
    </div>
  );
}

// Modern button with hover effect
function ModernButton({ children }) {
  return (
    <button
      style={{
        padding: '1rem',
        background: 'linear-gradient(90deg, #243c9d 60%, #2b4eff 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(43,78,255,0.07)',
        transition: 'background 0.2s, transform 0.2s'
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = 'linear-gradient(90deg, #2b4eff 60%, #243c9d 100%)';
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'linear-gradient(90deg, #243c9d 60%, #2b4eff 100%)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {children}
    </button>
  );
}

const cardTitle = {
  marginBottom: '1.2rem',
  fontSize: '1.18rem',
  color: '#243c9d',
  fontWeight: 700,
  letterSpacing: 0.5
};

const cardText = {
  color: '#444',
  fontSize: '1.04rem',
  marginBottom: '0.5rem'
};

const activityTime = {
  fontSize: '0.9rem',
  color: '#888',
  marginLeft: '0.5rem'
};

const metricLabel = {
  fontSize: '1.05rem',
  color: '#666',
  marginBottom: '0.5rem'
};

const pendingStyle = {
  color: '#f0a500',
  marginLeft: '0.5rem',
  fontWeight: 'bold'
};

function ProgressBar({ percent }) {
  return (
    <div style={{ height: '8px', background: '#e3e9f7', borderRadius: '6px', marginBottom: '1.1rem', marginTop: '0.2rem' }}>
      <div style={{ width: `${percent}%`, height: '100%', background: 'linear-gradient(90deg, #2b4eff 60%, #243c9d 100%)', borderRadius: '6px', transition: 'width 0.4s' }} />
    </div>
  );
}