import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sidebar item with active highlight and hover effect
function SidebarItem({ to, children, active }) {
  return (
    <li style={{ marginBottom: '1.2rem', borderRadius: '6px', fontWeight: active ? 700 : 500 }}>
      <Link
        to={to}
        style={{
          display: 'block',
          color: active ? '#fff' : '#b3c0e6',
          background: active ? 'rgba(43,78,255,0.18)' : 'none',
          borderRadius: '6px',
          padding: '0.6rem 1rem',
          textDecoration: 'none',
          transition: 'background 0.2s, color 0.2s',
          fontWeight: active ? 700 : 500,
        }}
        onMouseOver={e => { if (!active) e.currentTarget.style.background = 'rgba(43,78,255,0.08)'; }}
        onMouseOut={e => { if (!active) e.currentTarget.style.background = 'none'; }}
      >
        {children}
      </Link>
    </li>
  );
}

// Checkbox component
const Checkbox = ({ label, checked, onChange }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

export default function GenerateQuiz() {
  const [selectedNote, setSelectedNote] = useState('');
  const [questionTypes, setQuestionTypes] = useState({
    multipleChoice: true,
    shortAnswer: false,
    trueFalse: false,
    mixedSet: false
  });
  const [questionCount, setQuestionCount] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [timed, setTimed] = useState(false);

  const toggleQuestionType = (type) => {
    setQuestionTypes(prev => ({ ...prev, [type]: !prev[type] }));
  };

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
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontWeight: 500, color: '#b3c0e6', fontSize: '1.08rem' }}>
              <SidebarItem to="/dashboard">Dashboard</SidebarItem>
              <SidebarItem to="/myquizzes">My Quizzes</SidebarItem>
              <SidebarItem to="/study-analytics">Study Analytics</SidebarItem>
              <SidebarItem to="/notes-summarizer">Notes & AI Summarizer</SidebarItem>
              <SidebarItem to="/generate-quiz" active>Generate Quiz</SidebarItem>
              <SidebarItem to="/settings">Settings</SidebarItem>
            </ul>
          </nav>
        </div>
        <div style={{ marginTop: '2rem', color: '#fff', borderTop: '1px solid #3e53b6', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Sarah</p>
          <p style={{ fontSize: '0.95rem', color: '#b3c0e6' }}>Student</p>
        </div>
      </aside>

      {/* Main */}
      <main
        style={{
          flex: 1,
          padding: '2.5rem 3vw',
          overflowY: 'auto',
          minWidth: 0,
          boxSizing: 'border-box'
        }}
      >
        <div style={{
          background: '#d8e7ff',
          color: '#243c9d',
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          fontWeight: 500,
          marginBottom: '2rem'
        }}>
          Create personalized quizzes from your study materials.
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#243c9d' }}>Generate Quiz</h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>Transform your notes into interactive study questions</p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {/* Select Notes */}
          <div style={{
            background: '#fff',
            flex: '1 1 340px',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#243c9d', marginBottom: '1rem' }}>📄 Select Notes</h3>
            <label style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Choose Note Source</label>
            <select style={{
              width: '100%',
              padding: '0.6rem',
              fontSize: '1rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              background: '#f4f4f4',
              marginTop: '0.3rem'
            }} value={selectedNote} onChange={(e) => setSelectedNote(e.target.value)}>
              <option value="">Select a note...</option>
              <option value="math">Mathematics Chapter 3</option>
              <option value="science">Science Notes</option>
              <option value="history">History WWI</option>
            </select>
          </div>

          {/* Quiz Settings */}
          <div style={{
            background: '#fff',
            flex: '1 1 340px',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#243c9d', marginBottom: '1rem' }}>⚙️ Quiz Settings</h3>

            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Question Types</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.5rem 1rem',
              marginBottom: '1rem'
            }}>
              <Checkbox label="Multiple Choice" checked={questionTypes.multipleChoice} onChange={() => toggleQuestionType('multipleChoice')} />
              <Checkbox label="Short Answer" checked={questionTypes.shortAnswer} onChange={() => toggleQuestionType('shortAnswer')} />
              <Checkbox label="True/False" checked={questionTypes.trueFalse} onChange={() => toggleQuestionType('trueFalse')} />
              <Checkbox label="Mixed Set" checked={questionTypes.mixedSet} onChange={() => toggleQuestionType('mixedSet')} />
            </div>

            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Number of Questions</p>
            <input type="range" min="5" max="20" value={questionCount} onChange={(e) => setQuestionCount(e.target.value)} style={{ width: '100%' }} />
            <p style={{ fontWeight: 600, marginBottom: 12 }}>{questionCount}</p>

            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Difficulty Level</p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}>
              {['Easy', 'Medium', 'Hard', 'Adaptive'].map(level => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    background: difficulty === level ? '#243c9d' : '#f2f4f8',
                    color: difficulty === level ? '#fff' : '#333'
                  }}
                >
                  {level}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '0.5rem' }}>Timed Quiz Mode</label>
              <input
                type="checkbox"
                checked={timed}
                onChange={() => setTimed(!timed)}
                style={{ marginLeft: '1rem' }}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button disabled style={{
          background: '#ccc',
          color: '#fff',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          cursor: 'not-allowed'
        }}>Generate Quiz</button>
        <p style={{
          marginTop: '1rem',
          fontSize: '0.95rem',
          color: '#666'
        }}>
          You can edit or retake your quiz anytime in the <a href="/myquizzes" style={{ color: '#243c9d' }}>My Quizzes</a> section.
        </p>
      </main>
    </div>
  );
}