import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, Lock, Mail, AlertCircle } from 'lucide-react';
import axiosInstance from '../api/axiosInstance';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Replace with your backend teammate's login endpoint if path differs
      const response = await axiosInstance.post('/auth/login', { email, password });
      
      // Expecting response data like: { token: 'jwt...', role: 'STUDENT', email: '...' }
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('email', response.data.email);

      if (response.data.role === 'STUDENT') {
        navigate('/student/dashboard');
      } else if (response.data.role === 'RECRUITER') {
        navigate('/recruiter/dashboard');
      } else if (response.data.role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      // Fallback for mock testing if backend isn't running yet
      if (email === 'student@test.com' && password === 'password') {
        localStorage.setItem('token', 'mock-jwt-token-student');
        localStorage.setItem('role', 'STUDENT');
        navigate('/student/dashboard');
        return;
      }
      setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-plum-600/10 p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex bg-blush p-3 rounded-2xl text-plum-600">
            <Compass className="h-10 w-10 animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-bold text-plum-700">Welcome Back</h2>
          <p className="text-sm text-slate-500">Log in to access your CareerCompass portal</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-sm flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@college.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-plum-600 hover:bg-plum-700 text-white font-semibold py-3 rounded-xl shadow-md transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-magenta font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}