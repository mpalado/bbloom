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

const MyNotes = () => {
  const notes = [
    {
      title: 'Tourism_Lecture_4.pdf',
      date: 'May 25, 2025',
      words: 1432,
      readTime: '7 min read',
      preview:
        'Tourism is a complex industry that encompasses various sectors including hospitality, transportation, entertainment, and...',
    },
    {
      title: 'Mathematics_Chapter_3.docx',
      date: 'May 24, 2025',
      words: 2156,
      readTime: '11 min read',
      preview:
        'Chapter 3: Advanced Calculus Applications This chapter explores the practical applications of calculus in real-world sc...',
    },
    {
      title: 'History_Notes_WWI.txt',
      date: 'May 23, 2025',
      words: 987,
      readTime: '5 min read',
      preview:
        'World War I: Causes and Consequences World War I (1914–1918) was a global conflict that fundamentally changed the polit...',
    },
  ];

  // Styles for main content
  const styles = {
    main: {
      flex: 1,
      padding: '40px',
      minWidth: 0,
      minHeight: 0,
      overflowY: 'auto',
      boxSizing: 'border-box',
      
      background: '#f7f9fb'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#243c9d',
    },
    subtext: {
      color: '#6b7280',
    },
    searchUploadRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      marginBottom: '10px',
    },
    searchInput: {
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #d1d5db',
      width: '60%',
    },
    uploadBtn: {
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '6px',
      border: 'none',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    noteCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      marginBottom: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    noteInfo: {
      maxWidth: '85%',
    },
    noteTitle: {
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '6px',
      color: '#243c9d'
    },
    noteMeta: {
      color: '#6b7280',
      fontSize: '12px',
      marginBottom: '8px',
    },
    notePreview: {
      fontSize: '14px',
      color: '#4b5563',
    },
    viewButton: {
      backgroundColor: '#4338ca',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    backButton: {
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      padding: '8px 14px',
      borderRadius: '6px',
      fontWeight: 'bold',
      position: 'absolute',
      top: '20px',
      right: '40px',
    },
    noteCount: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '10px',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        fontFamily: 'Inter, Arial, sans-serif',
        background: '#f7f9fb',
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
      <main style={styles.main}>
        <div style={styles.header}>
          <div>
            <h2 style={{fontSize: '1.8rem', color: '#243c9d', marginBottom: '0.3rem' }}>My Notes</h2>
            <p style={styles.subtext}>
              View, manage, and enhance your uploaded notes with AI
            </p>
          </div>
        </div>

        <div style={styles.searchUploadRow}>
          <input type="text" placeholder="Search notes by title or content..." style={styles.searchInput} />
          <button style={styles.uploadBtn}>+ Upload New Note</button>
        </div>

        <div style={styles.noteCount}>{notes.length} notes found</div>

        {notes.map((note, idx) => (
          <div key={idx} style={styles.noteCard}>
            <div style={styles.noteInfo}>
              <div style={styles.noteTitle}>{note.title}</div>
              <div style={styles.noteMeta}>
                Uploaded: {note.date} • {note.words} words • {note.readTime}
              </div>
              <div style={styles.notePreview}>{note.preview}</div>
            </div>
            <button style={styles.viewButton}>👁 View</button>
          </div>
        ))}

        <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><button style={styles.backButton}>Back</button></Link>
      </main>
    </div>
  );
};

export default MyNotes;