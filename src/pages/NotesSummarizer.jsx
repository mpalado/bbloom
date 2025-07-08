import React from 'react';
import { Link } from 'react-router-dom';

export default function NotesSummarizer() {
  const notes = [
    { title: 'Tourism_Lecture_4.pdf', date: 'May 25, 2025', words: 1432, time: '7 min read' },
    { title: 'Mathematics_Chapter_3.docx', date: 'May 24, 2025', words: 2156, time: '11 min read' },
    { title: 'History_Notes_WWII.txt', date: 'May 23, 2025', words: 987, time: '5 min read' },
    { title: 'Science_Lab_Report.pdf', date: 'May 22, 2025', words: 1789, time: '9 min read' },
    { title: 'Economics_Supply_Demand.docx', date: 'May 21, 2025', words: 1345, time: '7 min read' },
    { title: 'Literature_Analysis.txt', date: 'May 20, 2025', words: 2234, time: '11 min read' }
  ];

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background: '#f7f9fb',
        fontFamily: 'Inter, Arial, sans-serif',
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
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <SidebarItem>Dashboard</SidebarItem>
              </Link>
              <Link to="/myquizzes" style={{ textDecoration: 'none' }}>
                <SidebarItem>My Quizzes</SidebarItem>
              </Link>
              <Link to="/study-analytics" style={{ textDecoration: 'none' }}>
                <SidebarItem>Study Analytics</SidebarItem>
              </Link>
              <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}>
                <SidebarItem active>Notes & AI Summarizer</SidebarItem>
              </Link>
              <Link to="/generate-quiz" style={{ textDecoration: 'none' }}>
                <SidebarItem>Generate Quiz</SidebarItem>
              </Link>
              <Link to="/settings" style={{ textDecoration: 'none' }}>
                <SidebarItem>Settings</SidebarItem>
              </Link>
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
          padding: '2.5rem',
          minWidth: 0,
          minHeight: 0,
          overflowY: 'auto',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', color: '#243c9d', marginBottom: '0.3rem' }}>Notes & AI Summarizer</h1>
            <p style={{ fontSize: '1rem', color: '#555' }}>Upload, manage, and enhance your lecture notes with AI</p>
          </div>
          <Link to="/mynotes" style={{ textDecoration: 'none' }}><button style={openBtn}>📄 Open My Notes</button></Link>
        </div>

     {/* Action Cards */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
    marginBottom: '2.5rem',
    width: '100%',
    alignItems: 'stretch'
  }}
>
  <Link to="/upload-notes" style={{ textDecoration: 'none' }}>
    <ActionCard
      icon="📤"
      title="Upload Notes"
      subtitle="PDF, DOCX, TXT"
    />
  </Link>
  <Link to="/summurizer" style={{ textDecoration: 'none' }}>
    <ActionCard
      icon="🧠"
      title="Summarize Notes"
      subtitle="Get quick AI summaries of your uploaded notes"
    />
  </Link>
</div>

        {/* Recent Notes */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={sectionTitle}>Recent Notes</h3>
          <p style={{ color: '#777', fontSize: '0.95rem' }}>{notes.length} notes uploaded</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {notes.map((note, index) => (
            <NoteCard key={index} {...note} />
          ))}
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

// Action Card component
function ActionCard({ icon, title, subtitle }) {
  return (
    <div style={{
      flex: '1 1 240px',
      background: '#fff',
      padding: '2rem 1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#243c9d' }}>{title}</h3>
      <p style={{ color: '#555', fontSize: '0.95rem' }}>{subtitle}</p>
    </div>
  );
}

// Note card
function NoteCard({ title, date, words, time }) {
  return (
    <div style={{
      background: '#fff',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <p style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem', color: '#243c9d' }}>{title}</p>
      <p style={{ fontSize: '0.9rem', color: '#777' }}>
        Uploaded: {date} • {words} words • {time}
      </p>
    </div>
  );
}

// Styles
const openBtn = {
  background: '#243c9d',
  color: '#fff',
  padding: '0.7rem 1.2rem',
  borderRadius: '10px',
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '0.95rem',
  boxShadow: '0 3px 8px rgba(36, 60, 157, 0.15)'
};

const sectionTitle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#243c9d'
};