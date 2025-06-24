import React from 'react';
import { Link } from 'react-router-dom';

export default function MyQuizzes() {
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
              <Link to="/dashboard" style={{ textDecoration: 'none' }}><SidebarItem>Dashboard</SidebarItem></Link>
              <SidebarItem active>My Quizzes</SidebarItem>
              <Link to="/study-analytics" style={{ textDecoration: 'none' }}><SidebarItem>Study Analytics</SidebarItem></Link>
              <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><SidebarItem>Notes & AI Summarizer</SidebarItem></Link>
              <Link to="/generate-quiz" style={{ textDecoration: 'none' }}><SidebarItem>Generate Quiz</SidebarItem></Link>
              <SidebarItem>Settings</SidebarItem>
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
        <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'center', color: '#1e3a8a', fontWeight: 600 }}>
          Consistency beats intensity.
        </div>

        <h1 style={{ color: '#243c9d', fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>My Quizzes</h1>
        <p style={{ fontSize: '1.05rem', color: '#666', marginBottom: '2rem' }}>Organize and manage your quiz collections</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="Search folders and quizzes..."
            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', width: '60%' }}
          />
          <button style={{ padding: '0.75rem 1rem', backgroundColor: '#243c9d', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 600 }}>
            + New Folder
          </button>
        </div>

        <p style={{ marginBottom: '1rem', color: '#6b7280' }}>6 folders found</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {quizFolders.map((folder) => (
            <div key={folder.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '1rem 1.25rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{folder.icon}</span>
                <span style={{ backgroundColor: folder.color, color: 'white', padding: '0.25rem 0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem' }}>{folder.title}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>✎</button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ children, active }) {
  return (
    <li
      style={{
        marginBottom: '1rem',
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

const quizFolders = [
  { title: 'Psychology', icon: '🧠', color: '#a78bfa' },
  { title: 'Computer Science', icon: '💻', color: '#60a5fa' },
  { title: 'Tourism', icon: '🌍', color: '#10b981' },
  { title: 'Business', icon: '💼', color: '#facc15' },
  { title: 'History', icon: '📚', color: '#f87171' },
  { title: 'Chemistry', icon: '⚗️', color: '#22d3ee' },
];
