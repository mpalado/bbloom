import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
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
            <input type="password" placeholder="Enter your password" />
            <span className="eye-icon">👁️</span>
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
