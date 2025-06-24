import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">BrainBloom</h1>
        <p className="subtitle">Bloom Your Brain with AI-Powered Learning</p>

        <div className="tab-buttons">
          <button className="active">Login</button>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>

        <form className="login-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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

          <a className="forgot-password" href="#">Forgot Password?</a>
          <Link to="/dashboard">
            <button type="submit" className="login-btn">Sign In</button>
          </Link>

          <div className="divider">or</div>

          <button className="google-btn">Continue with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;