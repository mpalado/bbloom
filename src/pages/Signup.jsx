import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
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
            <input type="password" placeholder="Create a password" />
            <span className="eye-icon">👁️</span>
          </div>

          <label>Confirm Password</label>
          <div className="password-field">
            <input type="password" placeholder="Confirm your password" />
            <span className="eye-icon">👁️</span>
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
