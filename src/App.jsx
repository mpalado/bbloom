import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './pages/Myquizzes';
import MyQuizzes from './pages/Myquizzes';
import StudyAnalytics from './pages/StudyAnalytics';
import NotesSummarizer from './pages/NotesSummarizer';
import GenerateQuiz from './pages/GenerateQuiz';
import Settings from './pages/Settings';
import MyNotes from './pages/MyNotes';
import Summurizer from './pages/Summurizer';
import UploadNotes from './pages/UploadNotes';
import PricingPlans from './pages/PricingPlans';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myquizzes" element={<MyQuizzes />} /> 
        <Route path="/study-analytics" element={<StudyAnalytics />} />
        <Route path="/notes-summarizer" element={<NotesSummarizer />} />
        <Route path="/generate-quiz" element={<GenerateQuiz />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/summurizer" element={<Summurizer />} />
        <Route path="/upload-notes" element={<UploadNotes />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
      </Routes>
    </Router>
  );
}

export default App;
