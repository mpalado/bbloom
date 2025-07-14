import React from 'react';
import { Link } from 'react-router-dom';

export default function StudyAnalytics() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Inter, Arial, sans-serif',
      background: 'linear-gradient(120deg, #f7f9fb 60%, #e9eefd 100%)',
      width: '100vw',
      overflow: 'hidden'
    }}>
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
              <Link to="/myquizzes" style={{ textDecoration: 'none' }}><SidebarItem>My Quizzes</SidebarItem></Link>
              <SidebarItem active>Study Analytics</SidebarItem>
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

      {/* Main content */}
      <main style={{
        flex: 1,
        padding: '2.5rem 3vw',
        overflowY: 'auto',
        minWidth: 0,
        boxSizing: 'border-box'
      }}>
        <div style={{ background: '#d9ecff', padding: '0.8rem 1.5rem', borderRadius: '10px', color: '#243c9d', fontWeight: 600, marginBottom: '1.5rem' }}>
          Consistency beats intensity.
        </div>

        <h1 style={{ fontSize: '1.8rem', color: '#243c9d', marginBottom: '0.4rem' }}>Study Analytics Dashboard</h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>Track your learning progress and performance insights</p>

        {/* Top grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {/* Performance Overview */}
          <Card>
            <h3 style={cardTitle}>Performance Overview</h3>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <StatBlock label="Average Score" value="87%" bg="#e9f2ff" />
              <StatBlock label="Quizzes Completed" value="47" bg="#e8fbee" />
            </div>
          </Card>

          {/* Study Time */}
          <Card>
            <h3 style={cardTitle}>Study Time</h3>
            <BarChart />
            <p style={cardText}><strong>Total:</strong> 20.5 hours &nbsp;&nbsp; <strong>Avg:</strong> 2.9 hrs/day</p>
          </Card>

          {/* Subject Breakdown */}
          <Card>
            <h3 style={cardTitle}>Subject Breakdown</h3>
            <SubjectProgress label={<span style={{ color: "#000" }}>Mathematics</span>} percent={75} color="#243c9d" />
            <SubjectProgress label={<span style={{ color: "#000" }}>Science</span>} percent={60} color="#1eb980" />
            <SubjectProgress label={<span style={{ color: "#000" }}>History</span>} percent={45} color="#f0a500" />
          </Card>
        </div>

        {/* Bottom grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem' }}>
          {/* Recent Activity */}
          <Card>
            <h3 style={cardTitle}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{
                background: '#f7f9fb',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(36,60,157,0.06)',
                padding: '1rem 1.2rem'
              }}>
                <ActivityItem color="green" text={<span style={{ color: "#000" }}>Completed Math Quiz #15</span>} info="2 hours ago • Score: 92%" />
              </div>
              <div style={{
                background: '#f7f9fb',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(36,60,157,0.06)',
                padding: '1rem 1.2rem'
              }}>
                <ActivityItem color="blue" text={<span style={{ color: "#000" }}>Studied for 45 minutes</span>} info="5 hours ago • Science Notes" />
              </div>
              <div style={{
                background: '#f7f9fb',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(36,60,157,0.06)',
                padding: '1rem 1.2rem'
              }}>
                <ActivityItem color="orange" text={<span style={{ color: "#000" }}>Created new flashcard set</span>} info="1 day ago • History Chapter 5" />
              </div>
            </div>
          </Card>

          {/* Study Goals */}
          <Card>
            <h3 style={cardTitle}>Study Goals</h3>
            <GoalProgress label={<span style={{ color: "#000" }}>Daily Study Goal</span>} value="3.2/2.5" percent={128} color="#1eb980" />
            <GoalProgress label={<span style={{ color: "#000" }}>Weekly Quiz Goal</span>} value="3/5" percent={60} color="#f0a500" />
          </Card>
        </div>
      </main>
    </div>
  );
}

// Components
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

function Card({ children }) {
  return (
    <div style={{
      background: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      flex: '1 1 300px'
    }}>
      {children}
    </div>
  );
}

function StatBlock({ label, value, bg }) {
  return (
    <div style={{ background: bg, padding: '1rem', borderRadius: '10px', flex: 1, textAlign: 'center' }}>
      <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#243c9d', margin: 0 }}>{value}</p>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{label}</p>
    </div>
  );
}

function SubjectProgress({ label, percent, color }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{label} <span style={{ float: 'right', color }}>{percent}%</span></p>
      <div style={{ background: '#e0e0e0', height: '8px', borderRadius: '6px' }}>
        <div style={{ width: `${percent}%`, height: '100%', background: color, borderRadius: '6px' }}></div>
      </div>
    </div>
  );
}

function ActivityItem({ color, text, info }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ margin: 0, fontSize: '1rem', fontWeight: 500 }}>
        <span style={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: color,
          marginRight: '0.6rem'
        }}></span>
        {text}
      </p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{info}</p>
    </div>
  );
}

function GoalProgress({ label, value, percent, color }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <p style={{ fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{label} <span style={{ float: 'right', fontWeight: 700, color }}>{value}</span></p>
      <div style={{ background: '#e0e0e0', height: '8px', borderRadius: '6px' }}>
        <div style={{ width: `${Math.min(percent, 100)}%`, height: '100%', background: color, borderRadius: '6px' }}></div>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#555', marginTop: '0.2rem' }}>{percent}% complete</p>
    </div>
  );
}

function BarChart() {
  const data = [1, 1.5, 3.5, 4, 2.5, 3, 2.5]; // example study hours per day
  const max = Math.max(...data);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '100px', gap: '0.5rem', marginBottom: '0.8rem', marginTop: '1rem' }}>
      {data.map((val, idx) => (
        <div key={idx} style={{
          width: '12%',
          height: `${(val / max) * 100}%`,
          background: '#2b4eff',
          borderRadius: '4px'
        }} />
      ))}
    </div>
  );
}

const cardTitle = {
  marginBottom: '1rem',
  color: '#243c9d',
  fontSize: '1.1rem',
  fontWeight: 700
};

const cardText = {
  fontSize: '0.9rem',
  color: '#444'
};
