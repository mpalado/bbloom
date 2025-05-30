import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // <-- Make sure this contains Tailwind's directives
import './styles/Login.css'; // Custom styles for Login page
//import './styles/Landing.css'; // Custom styles for Landing page  
import './styles/Dashboard.css'; // Custom styles for Dashboard page
import './styles/Signup.css'; // Custom styles for Signup page
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);