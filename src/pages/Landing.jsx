import React from 'react';
import { Link } from 'react-router-dom';



export default function LandingPage() {
  const styles = {

    container: {
      fontFamily: 'sans-serif',
      width: '100%',
      minHeight: '100vh',     // ensure it fills full viewport height
      overflowX: 'hidden',
      overflowY: 'auto',
      background: '#f7f9fb',
      boxSizing: 'border-box',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      flexWrap: 'wrap',
      width: '100vw', // <-- fix here
      boxSizing: 'border-box',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    navLink: {
      color: '#4b5563',
      textDecoration: 'none',
      fontWeight: 500,
      margin: '0 0.5rem'
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      fontWeight: 600,
      cursor: 'pointer',
      border: 'none'
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem 2rem 2rem',
      backgroundColor: '#1e3a8a',
      color: 'white',
      textAlign: 'center',
      width: '100vw', // <-- fix here
      boxSizing: 'border-box',
      margin: 0
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '1rem',
      lineHeight: 1.2
    },
    heroHighlight: {
      color: '#facc15'
    },
    card: {
      backgroundColor: 'white',
      color: '#000',
      padding: '1.5rem',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '360px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    },
    section: {
      padding: '5rem 2rem',
      textAlign: 'center',
      width: '100vw', // <-- fix here
      boxSizing: 'border-box'
    },
    sectionDark: {
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '5rem 2rem',
      textAlign: 'center',
      width: '100vw', // <-- fix here
      boxSizing: 'border-box'
    },
    howGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    howCard: {
      maxWidth: '240px',
      textAlign: 'center',
      flex: '1 1 200px',
      margin: '0 auto'
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '3rem 2rem',
      fontSize: '0.875rem',
      width: '100vw', // <-- fix here
      boxSizing: 'border-box'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '2rem',
      width: '100%',
      marginTop: '1.5rem'
    },
    // Add this to your styles.hero object:
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
      html, body {
        margin: 0;
        padding: 0;
        height: auto !important;
        background: #f7f9fb !important;
        overflow-y: auto;
      }

      * {
        box-sizing: border-box;
      }

      body {
        font-family: sans-serif;
        overflow-x: hidden;
      }
    `}
      </style>
      {/* Header/Navbar */}
      <header style={styles.header}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#1e3a8a' }}>BrainBloom</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Features</a>
          <a href="#" style={styles.navLink}>How it Works</a>
          <a href="#" style={styles.navLink}>Reviews</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </nav>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <Link to="/login"><button style={{ ...styles.button, backgroundColor: 'transparent', color: '#1e3a8a', border: '1px solid #1e3a8a' }}>Login</button></Link>
          <Link to="/signup"><button style={{ ...styles.button, backgroundColor: '#1e3a8a', color: 'white' }}>Sign Up Free</button></Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          ...styles.hero,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          padding: '4rem 2rem 4rem 2rem',
          flexWrap: 'wrap', // add this for mobile
        }}
      >
        {/* Left: Text and Buttons */}
        <div style={{ flex: '1 1 320px', maxWidth: 640, minWidth: 0, textAlign: 'left' }}>
          <h1 style={{ ...styles.heroTitle, fontSize: '3.5rem' }}>
            Study Smarter with <span style={styles.heroHighlight}>BrainBloom</span>
          </h1>
          <p style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>
            Transform your study sessions with AI-powered quizzes and personalized learning paths designed for college success.
          </p>
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link to="/login"><button style={{ ...styles.button, backgroundColor: '#facc15', color: '#1e3a8a', fontSize: '1.25rem', padding: '0.75rem 2rem' }}>Get Started Free</button></Link>
            <button style={{ ...styles.button, border: '2px solid white', backgroundColor: 'transparent', color: 'white', fontSize: '1.25rem', padding: '0.75rem 2rem' }}>Watch Demo</button>
          </div>
          <p style={{ fontSize: '1.15rem' }}>✔ No credit card required • ✔ 14-day free trial • ✔ Cancel anytime</p>
        </div>
        {/* Right: Quiz Card */}
        <div style={{ flex: '0 1 400px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
          <div style={{ ...styles.card, maxWidth: '420px', fontSize: '1.15rem', padding: '2rem' }}>
            <h4 style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '1.4rem' }}>
              Biology Quiz <span style={{ float: 'right', color: 'green' }}>85%</span>
            </h4>
            <div style={{ marginBottom: '0.75rem' }}>
              What is the powerhouse of the cell? <span style={{ color: 'green' }}>✔ Mitochondria</span>
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              Which organelle contains DNA? <span style={{ color: '#facc15' }}>⚠ Review needed</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '20px', height: '10px', backgroundColor: '#e5e7eb' }}></div>
              <div style={{ width: '20px', height: '10px', backgroundColor: '#2563eb' }}></div>
              <div style={{ width: '20px', height: '10px', backgroundColor: '#e5e7eb' }}></div>
              <div style={{ width: '20px', height: '10px', backgroundColor: '#facc15' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Love Section */}
      <section style={styles.section}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1rem' }}>
          Why Students Love BrainBloom
        </h2>
        <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
          Discover how our AI-powered platform transforms the way you study and helps you achieve academic excellence.
        </p>
      </section>

      {/* How It Works Section */}
      <section style={styles.sectionDark}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>How BrainBloom Works</h2>
        <p style={{ marginBottom: '2.5rem', fontSize: '1.5rem' }}>
          Get started in three simple steps and transform your study experience today.
        </p>
        <div style={styles.howGrid}>
          {[
            {
              number: '1',
              color: '#2563eb',
              title: 'Upload Your Notes',
              desc: 'Simply upload your study materials, textbook chapters, or lecture notes. Our AI analyzes your content instantly.'
            },
            {
              number: '2',
              color: '#facc15',
              title: 'AI Creates Quizzes',
              desc: 'Our intelligent system generates personalized quizzes targeting your knowledge gaps and learning objectives.'
            },
            {
              number: '3',
              color: '#34d399',
              title: 'Track Progress',
              desc: 'Monitor your improvement with detailed analytics and adaptive recommendations for optimal study efficiency.'
            }
          ].map((item, idx) => (
            <div key={idx} style={{ ...styles.howCard, maxWidth: '320px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: item.color,
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '2rem'
              }}>{item.number}</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1.5rem' }}>{item.title}</h4>
              <p style={{ fontSize: '1.15rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          textAlign: 'center',
          padding: '5rem 2rem',
          background: '#f3f4f6',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1rem' }}>
          What Students Say
        </h2>
        <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Join thousands of students who have transformed their study habits with BrainBloom.
        </p>
        <div
          style={{
            border: '1px solid #d1d5db',
            padding: '2rem',
            borderRadius: '12px',
            color: '#6b7280',
            maxWidth: '480px',
            margin: '0 auto',
            background: '#fff'
          }}
        >
          ← (Student testimonials carousel placeholder) →
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: 'center',
          padding: '5rem 2rem',
          background: '#1e3a8a',
          color: 'white',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Ready to Transform Your Study Habits?
        </h2>
        <p style={{ marginBottom: '2rem' }}>
          Join thousands of students who are already studying smarter with BrainBloom's AI-powered platform.
        </p>
        <Link to="/login">
          <button
            style={{
              backgroundColor: '#facc15',
              color: '#1e3a8a',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Get Started Free Today
          </button>
        </Link>
        <p style={{ fontSize: '0.95rem', marginTop: '1rem', color: '#fde68a' }}>
          ✔ No credit card required • ✔ 14-day free trial • ✔ Cancel anytime
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#60a5fa' }}>BrainBloom</h4>
          <p style={{ color: '#9ca3af', marginTop: '0.5rem' }}>
            Empowering students worldwide with AI-powered study tools for academic success.
          </p>
        </div>
        <div style={styles.footerGrid}>
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'How it Works', 'API']
            },
            {
              title: 'Company',
              links: ['About', 'Contact', 'Careers', 'Blog']
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Terms of Service']
            }
          ].map((section, idx) => (
            <div key={idx}>
              <h5 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{section.title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, color: '#d1d5db' }}>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
