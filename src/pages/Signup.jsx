import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="title">BrainBloom</h1>
        <p className="subtitle">Bloom Your Brain with AI-Powered Learning</p>

        <div className="tab-buttons">
          <Link to="/login"><button>Login</button></Link>
          <button className="active">Sign Up</button>
        </div>

        <form className="signup-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              tabIndex={0}
              role="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Eye closed SVG
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#243c9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 0 1 5.17-5.92" />
                  <path d="M1 1l22 22" />
                  <path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.38 0 2.63-.83 3.16-2.03" />
                  <path d="M14.47 14.47A3.5 3.5 0 0 0 12 8.5c-.62 0-1.21.18-1.7.49" />
                </svg>
              ) : (
                // Eye open SVG
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#243c9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="12" rx="10" ry="7" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
          </div>

          <label>Confirm Password</label>
          <div className="password-field">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirm((prev) => !prev)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              tabIndex={0}
              role="button"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? (
                // Eye closed SVG
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#243c9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 0 1 5.17-5.92" />
                  <path d="M1 1l22 22" />
                  <path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.38 0 2.63-.83 3.16-2.03" />
                  <path d="M14.47 14.47A3.5 3.5 0 0 0 12 8.5c-.62 0-1.21.18-1.7.49" />
                </svg>
              ) : (
                // Eye open SVG
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#243c9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="12" rx="10" ry="7" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
          </div>

          <button type="submit" className="signup-btn">Create Account</button>

          <div className="divider">or</div>

          <button className="google-btn">Continue with Google</button>

          <p className="terms">By signing up, you agree to our <a href="#">Terms</a> & <a href="#">Privacy</a>.</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;