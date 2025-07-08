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

export default function PricingPlans() {
  const faqs = [
    "Can I cancel anytime?",
    "Do I lose my notes after downgrading?",
    "Is there a student discount?",
    "What payment methods do you accept?",
    "Can I upgrade or downgrade my plan?"
  ];

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        fontFamily: 'Inter, Arial, sans-serif',
        background: 'linear-gradient(120deg, #f7f9fb 60%, #e9eefd 100%)',
        overflow: 'hidden',
        maxWidth: '100vw'
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
              <Link to="/dashboard" style={{ textDecoration: 'none' }}><SidebarItem>Dashboard</SidebarItem></Link>
              <Link to="/myquizzes" style={{ textDecoration: 'none' }}><SidebarItem>My Quizzes</SidebarItem></Link>
              <Link to="/study-analytics" style={{ textDecoration: 'none' }}><SidebarItem>Study Analytics</SidebarItem></Link>
              <Link to="/notes-summarizer" style={{ textDecoration: 'none' }}><SidebarItem>Notes & AI Summarizer</SidebarItem></Link>
              <Link to="/generate-quiz" style={{ textDecoration: 'none' }}><SidebarItem>Generate Quiz</SidebarItem></Link>
              <Link to="/settings" style={{ textDecoration: 'none' }}><SidebarItem>Settings</SidebarItem></Link>
              <SidebarItem active>Pricing</SidebarItem>
            </ul>
          </nav>
        </div>
        <div style={{
          marginTop: '2rem',
          color: '#fff',
          borderTop: '1px solid #3e53b6',
          paddingTop: '1.5rem'
        }}>
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Sarah</p>
          <p style={{ fontSize: '0.95rem', color: '#b3c0e6' }}>Free Plan</p>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '40px',
        overflowY: 'auto',
        minWidth: 0,
        maxWidth: '100vw',
        boxSizing: 'border-box',
        color: '#111'
      }}>
        {/* Banner */}
        <div style={banner}>Unlock your learning potential with premium features</div>

        {/* Title */}
        <h1 style={title}>Choose the Plan That Works for You</h1>
        <p style={subtitle}>
          Access more personalized learning tools, advanced analytics, and unlimited quiz generation with a premium plan
        </p>

        {/* Plans */}
        <div style={planContainer}>
          <PlanCard
            name="Free"
            price="₱0"
            buttonLabel="Get Started Free"
            features={[
              "5 quiz generations per month",
              "Note uploading (up to 10 files)",
              "Basic progress tracking",
              "Community support"
            ]}
            disabledFeatures={[
              "Advanced AI summaries",
              "Unlimited quiz generation",
              "Advanced analytics"
            ]}
          />
          <PlanCard
            name="Monthly Pro"
            price="₱149"
            tag="Most Popular"
            buttonLabel="Start Monthly Pro"
            features={[
              "Unlimited quiz generation",
              "Advanced AI summaries",
              "Unlimited note uploads",
              "Advanced progress tracking",
              "Export quiz results",
              "Advanced analytics dashboard"
            ]}
          />
          <PlanCard
            name="Yearly Pro"
            price="₱1,430"
            subText="₱3.86/month billed annually"
            tag="Save 20%"
            tagColor="#22c55e"
            buttonLabel="Start Yearly Pro"
            features={[
              "Everything in Monthly Pro",
              "20% savings vs. monthly",
              "Priority customer support",
              "Early access to new features",
              "Extended data retention",
              "Advanced export options",
              "Detailed learning insights"
            ]}
          />
        </div>

        {/* FAQ Section */}
        <div style={faqSection}>
          <h2 style={faqHeader}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={faqItem}>{faq}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

function PlanCard({ name, price, subText, tag, tagColor = '#3b82f6', buttonLabel, features = [], disabledFeatures = [] }) {
  return (
    <div style={planCard}>
      {tag && <div style={{ ...badge, background: tagColor }}>{tag}</div>}
      <h3 style={planTitle}>{name}</h3>
      <h2 style={planPrice}>{price}<span style={planSubText}>/month</span></h2>
      {subText && <p style={planSubNote}>{subText}</p>}
      <button style={planButton}>{buttonLabel}</button>

      <ul style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
        {features.map((item, idx) => (
          <li key={idx} style={featureItem(true)}>{'✅ '}{item}</li>
        ))}
        {disabledFeatures.map((item, idx) => (
          <li key={idx} style={featureItem(false)}>{'❌ '}{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Styles
const banner = {
  background: '#dbeafe',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  marginBottom: '2rem',
  color: '#1e40af',
  fontWeight: 500
};

const title = {
  fontSize: '1.8rem',
  color: '#1e3a8a',
  marginBottom: '0.5rem'
};

const subtitle = {
  fontSize: '1rem',
  color: '#444',
  maxWidth: '600px',
  margin: '0 auto 2.5rem auto'
};

const planContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1.5rem',
  marginBottom: '3rem'
};

const planCard = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  width: '280px',
  boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
  position: 'relative',
  textAlign: 'left'
};

const badge = {
  position: 'absolute',
  top: '-12px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#3b82f6',
  color: '#fff',
  fontSize: '0.8rem',
  padding: '0.3rem 0.7rem',
  borderRadius: '6px',
  fontWeight: 600
};

const planTitle = {
  fontSize: '1.2rem',
  color: '#1e3a8a',
  marginBottom: '0.5rem'
};

const planPrice = {
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '0.2rem',
  color: '#1e3a8a'
};

const planSubText = {
  fontSize: '1rem',
  fontWeight: '500'
};

const planSubNote = {
  fontSize: '0.85rem',
  color: '#888',
  marginBottom: '1rem'
};

const planButton = {
  background: '#1e3a8a',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '0.7rem 1rem',
  fontWeight: 600,
  width: '100%',
  cursor: 'pointer',
  fontSize: '1rem',
  marginBottom: '1rem'
};

const featureItem = (enabled) => ({
  color: enabled ? '#333' : '#bbb',
  fontSize: '0.95rem',
  marginBottom: '0.5rem',
  listStyle: 'none'
});

const faqSection = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  maxWidth: '680px',
  margin: '0 auto',
  boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
  textAlign: 'left'
};

const faqHeader = {
  fontSize: '1.5rem',
  color: '#1e3a8a',
  marginBottom: '1.5rem'
};

const faqItem = {
  borderTop: '1px solid #eee',
  padding: '1rem 0',
  fontSize: '1rem',
  fontWeight: 500,
  cursor: 'pointer'
};