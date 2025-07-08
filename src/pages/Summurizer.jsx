import React, { useState } from 'react';
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

export default function Summurizer() {
  const [selectedNote, setSelectedNote] = useState('Tourism_Lecture_4.pdf');

  const notes = [
    { title: 'Tourism_Lecture_4.pdf', date: 'May 25, 2025', words: 1432, time: '7 min read' },
    { title: 'Mathematics_Chapter_3.docx', date: 'May 24, 2025', words: 2156, time: '11 min read' },
    { title: 'History_Notes_WWI.txt', date: 'May 23, 2025', words: 987, time: '5 min read' },
    { title: 'Science_Lab_Report.pdf', date: 'May 22, 2025', words: 1789, time: '9 min read' }
  ];

  return (
    <div style={page}>
      {/* Sidebar */}
      <aside style={sidebar}>
        <div>
          <h2 style={logo}>BrainBloom</h2>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, fontWeight: 500, color: '#b3c0e6', fontSize: '1.08rem', margin: 0 }}>
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
        <div style={profileBox}>
          <div style={avatar}>S</div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Sarah</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#b3c0e6' }}>Student</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={main}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={title}>🧠 AI-Powered Note Summarizer</h1>
          <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><button style={backBtn}>Back</button></Link>
        </div>
        <p style={desc}>Select one of your uploaded notes to generate a clear, concise summary using AI.</p>
        <p style={subDesc}>Our summarizer highlights key concepts, topics, and arguments to help you revise faster.</p>

        <div style={card}>
          <h3 style={sectionTitle}>Select a Note to Summarize</h3>
          {notes.map((note, i) => (
            <div
              key={i}
              onClick={() => setSelectedNote(note.title)}
              style={{
                ...noteBox,
                ...(selectedNote === note.title ? selectedBox : {})
              }}
            >
              <p style={noteTitle}>{note.title}</p>
              <p style={noteInfo}>Uploaded: {note.date} • {note.words} words • {note.time}</p>
              {selectedNote === note.title && <span style={check}>✔</span>}
            </div>
          ))}
        </div>

        <button style={generateBtn}>🧠 Generate AI Summary</button>
      </main>
    </div>
  );
}

// STYLES
const page = {
  display: 'flex',
  fontFamily: 'Inter, sans-serif',
  background: '#f7f9fb',
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden'
};

const sidebar = {
  width: '250px',
  background: 'linear-gradient(160deg, #243c9d 80%, #2b4eff 100%)',
  padding: '2.5rem 1.5rem 1.5rem 1.5rem',
  boxShadow: '2px 0 12px rgba(36,60,157,0.07)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  minWidth: '200px',
  boxSizing: 'border-box'
};

const logo = {
  fontWeight: '800',
  fontSize: '1.5rem',
  color: '#fff',
  marginBottom: '2.5rem'
};

const profileBox = {
  borderTop: '1px solid #3e53b6',
  paddingTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  color: '#fff'
};

const avatar = {
  background: '#243c9d',
  color: '#fff',
  borderRadius: '50%',
  padding: '0.6rem 0.9rem',
  fontWeight: 'bold'
};

const main = {
  flex: 1,
  padding: '2.5rem 3rem',
  minWidth: 0,
  minHeight: 0,
  overflowY: 'auto',
  boxSizing: 'border-box'
};

const title = {
  fontSize: '1.8rem',
  color: '#243c9d',
  marginBottom: '0.3rem'
};

const desc = {
  fontSize: '1rem',
  color: '#444',
  marginBottom: '0.3rem'
};

const subDesc = {
  fontSize: '0.95rem',
  color: '#777',
  marginBottom: '2rem'
};

const card = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
  padding: '1.5rem',
  marginBottom: '2rem'
};

const sectionTitle = {
  fontSize: '1.2rem',
  color: '#243c9d',
  fontWeight: 700,
  marginBottom: '1rem'
};

const noteBox = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '1rem',
  marginBottom: '0.8rem',
  cursor: 'pointer',
  background: '#fff',
  position: 'relative'
};

const selectedBox = {
  borderColor: '#243c9d',
  backgroundColor: '#eef2ff'
};

const noteTitle = {
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: '0.3rem',
  color: '#243c9d'
};

const noteInfo = {
  color: '#666',
  fontSize: '0.9rem'
};

const check = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#243c9d'
};

const backBtn = {
  background: '#243c9d',
  color: '#fff',
  padding: '0.4rem 0.9rem',
  borderRadius: '6px',
  border: 'none',
  fontSize: '0.9rem',
  cursor: 'pointer'
};

const generateBtn = {
  background: '#243c9d',
  color: '#fff',
  padding: '0.9rem 1.6rem',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
};