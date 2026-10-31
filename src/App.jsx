import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import SkillsAssessment from './pages/SkillsAssessment';
import SkillGapPage from './pages/SkillGapPage';
import RoadmapPage from './pages/RoadmapPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import OpportunityDetail from './pages/OpportunityDetail';
import RecruiterDashboard from './pages/RecruiterDashboard';
import PostOpportunity from './pages/PostOpportunity';
import AdminDashboard from './pages/AdminDashboard';
import SurveyPage from './pages/SurveyPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/opportunities/:id" element={<OpportunityDetail />} />
          <Route path="/survey" element={<SurveyPage />} />

          {/* Student Routes */}
          <Route path="/student/dashboard" element={<ProtectedRoute allowedRoles={['STUDENT']}><StudentDashboard /></ProtectedRoute>} />
          <Route path="/student/skills" element={<ProtectedRoute allowedRoles={['STUDENT']}><SkillsAssessment /></ProtectedRoute>} />
          <Route path="/student/skill-gap" element={<ProtectedRoute allowedRoles={['STUDENT']}><SkillGapPage /></ProtectedRoute>} />
          <Route path="/student/roadmap" element={<ProtectedRoute allowedRoles={['STUDENT']}><RoadmapPage /></ProtectedRoute>} />

          {/* Recruiter Routes */}
          <Route path="/recruiter/dashboard" element={<ProtectedRoute allowedRoles={['RECRUITER']}><RecruiterDashboard /></ProtectedRoute>} />
          <Route path="/recruiter/post" element={<ProtectedRoute allowedRoles={['RECRUITER']}><PostOpportunity /></ProtectedRoute>} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['ADMIN']}><AdminDashboard /></ProtectedRoute>} />

          <Route path="*" element={<div className="p-12 text-center text-xl font-medium text-slate-600">Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}