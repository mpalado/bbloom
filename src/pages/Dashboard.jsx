import React from 'react';
import '../../src/styles/Dashboard.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>BrainBloom</h2>
      <nav>
        <a href="#">Dashboard</a>
        <a href="#">My Quizzes</a>
        <a href="#">Study Analytics</a>
        <a href="#">Notes & AI Tools</a>
        <a href="#">Generate Quiz</a>
        <a href="#">Subscription</a>
        <a href="#">Settings</a>
      </nav>
      <div className="sidebar-footer">
        <div>Sarah</div>
        <div style={{ fontSize: '10px' }}>Student</div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="stat-box">
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{value}</div>
      <div style={{ fontSize: '12px', color: '#6b7280' }}>{label}</div>
    </div>
  );
}

function ProgressBar({ label, current, target }) {
  const percent = Math.min((current / target) * 100, 100);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{label}</span>
        <span style={{ fontWeight: 'bold' }}>{current}/{target}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main">
        <div className="header-banner">Consistency beats intensity.</div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a' }}>Welcome back, Sarah!</h1>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Ready to continue your learning journey?</p>

        <div className="upload-button">+ Upload Notes / Create Quiz</div>

        <div className="grid grid-3">
          <div className="card">
            <h3>My Quizzes</h3>
            <p>View All Quizzes →</p>
          </div>
          <div className="card">
            <h3>Study Progress</h3>
            <p>Total: 20.5 hours | Avg: 2.9 hrs/day</p>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <p>View All Activity →</p>
          </div>
        </div>

        <div className="grid grid-2" style={{ marginTop: '24px' }}>
          <div className="card">
            <h3>Quick Stats</h3>
            <div className="grid grid-3" style={{ marginTop: '8px' }}>
              <StatBox label="Quizzes Completed" value="47" />
              <StatBox label="Average Score" value="87%" />
              <StatBox label="Study Hours" value="156" />
              <StatBox label="Study Streak" value="23" />
            </div>
          </div>
          <div className="card">
            <h3>Study Goals</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <ProgressBar label="Daily Study Goal" current={3.2} target={2.5} />
              <ProgressBar label="Weekly Quiz Goal" current={3} target={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
