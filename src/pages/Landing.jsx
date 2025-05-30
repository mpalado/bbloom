import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">BrainBloom</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#contact">Contact</a>
          <Link to="/login">
            <button className="btn-outline">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn-primary">Sign Up Free</button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Bloom Your Brain with <span className="highlight">AI-Powered Reviewing</span>
        </h1>
      </section>

      {/* How It Works */}
      <section className="section" id="how-it-works">
        <h2 className="section-title">How BrainBloom Helps You Succeed</h2>
        <div className="card-grid">
          {[
            {
              title: "Upload & Create",
              desc: "Upload your notes (PDFs, text) or let our AI generate quizzes from any topic you provide.",
            },
            {
              title: "Intelligent Review",
              desc: "Our AI identifies key concepts, creates custom quizzes, and provides instant, insightful feedback.",
            },
            {
              title: "Track & Master",
              desc: "Monitor your progress, pinpoint weak areas, and ensure mastery before any exam with detailed analytics.",
            },
          ].map((step, idx) => (
            <div key={idx} className="card">
              <h3>{idx + 1}. {step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section light-bg" id="features">
        <h2 className="section-title">Unlock Your Full Learning Potential</h2>
        <div className="features-grid">
          {["quiz.png", "analytics.png", "review.png"].map((img, idx) => (
            <div key={idx} className="feature-item">
              <img src={`/assets/${img}`} alt="Feature" className="feature-image" />
              <div>
                <h3 className="feature-title">
                  {[
                    "Personalized Quizzes",
                    "Smart Progress Tracking",
                    "Comprehensive Review Modes"
                  ][idx]}
                </h3>
                <p className="feature-desc">
                  {[
                    "No more generic tests. BrainBloom crafts unique quizzes tailored to your study materials and learning style.",
                    "See your improvement over time with detailed analytics. Understand what to focus on next to maximize your study efficiency.",
                    "Choose from flashcards, multiple-choice, true/false – all dynamically generated and AI-powered for optimal learning."
                  ][idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Transform Your Study Habits?</h2>
        <p>Join thousands of students blooming their brains with BrainBloom’s intelligent AI assistant.</p>
        <button className="btn-cta">Get started Free</button>
        <p className="cta-sub">No credit card required for your free trial.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>BrainBloom</h3>
            <p>Your intelligent AI assistant for effortless reviewing and academic mastery.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How it Works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect With Us</h4>
            <ul>
              <li><a href="#contact">Contact Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
            <div className="socials">
              <span>🌐</span>
              <span>📘</span>
            </div>
          </div>
        </div>
        <div className="text-center copyright">
          © 2025 BrainBloom. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
