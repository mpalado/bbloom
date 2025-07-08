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

export default function UploadNotes() {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFileName(uploadedFile.name);
      setFile(uploadedFile);
    }
  };

  const handleReset = () => {
    setFileName('');
    setFile(null);
  };

  return (
    <div style={container}>
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
        <div style={{
          marginTop: '2rem',
          color: '#fff',
          borderTop: '1px solid #3e53b6',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={avatar}>S</div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Sarah</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#b3c0e6' }}>Student</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={main}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={title}>Upload Notes</h1>
          <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><button style={backBtn}>Back</button></Link>
        </div>
        <p style={desc}>Upload, manage, and enhance your lecture notes with AI</p>

        <div style={uploadBox}>
          <p style={uploadLabel}>Upload your notes (PDF, DOCX, TXT):</p>
          <select style={select}>
            <option>Select a note file...</option>
          </select>

          <label htmlFor="file-upload" style={uploadArea}>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              accept=".pdf,.docx,.txt"
              style={{ display: 'none' }}
            />
            <div style={{ textAlign: 'center', color: '#555' }}>
              <div style={{ fontSize: '1.5rem' }}>⤴️</div>
              <p>Click to upload or drag and drop</p>
              <p style={{ fontSize: '0.9rem', color: '#999' }}>PDF, DOCX, TXT files up to 10MB</p>
              {fileName && <p style={{ color: '#243c9d', fontWeight: 600 }}>{fileName}</p>}
            </div>
          </label>

          <div style={buttonGroup}>
            <button style={uploadBtn}>Upload Notes</button>
            <button style={resetBtn} onClick={handleReset}>Reset</button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Styles
const container = {
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

const avatar = {
  background: '#243c9d',
  color: '#fff',
  borderRadius: '50%',
  padding: '0.6rem 0.9rem',
  fontWeight: 'bold'
};

const main = {
  flex: 1,
  padding: '2.5rem',
  minWidth: 0,
  minHeight: 0,
  overflowY: 'auto',
  boxSizing: 'border-box'
};

const title = {
  fontSize: '1.8rem',
  color: '#243c9d',
  marginBottom: '0.5rem'
};

const desc = {
  fontSize: '1rem',
  color: '#444',
  marginBottom: '2rem'
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

const uploadBox = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 3px 12px rgba(0,0,0,0.05)',
  maxWidth: '600px'
};

const uploadLabel = {
  fontWeight: 600,
  color: '#444',
  marginBottom: '1rem'
};

const select = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginBottom: '1.5rem',
  fontSize: '1rem'
};

const uploadArea = {
  border: '2px dashed #ccc',
  padding: '2rem',
  borderRadius: '10px',
  cursor: 'pointer',
  marginBottom: '1.5rem',
  backgroundColor: '#f9f9f9'
};

const buttonGroup = {
  display: 'flex',
  gap: '1rem'
};

const uploadBtn = {
  background: '#243c9d',
  color: '#fff',
  padding: '0.7rem 1.2rem',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  cursor: 'pointer'
};

const resetBtn = {
  background: '#eee',
  color: '#333',
  padding: '0.7rem 1.2rem',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  cursor: 'pointer'
};