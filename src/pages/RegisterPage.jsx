import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, User, Mail, Lock, Building, AlertCircle, CheckCircle2 } from 'lucide-react';
import axiosInstance from '../api/axiosInstance';

export default function RegisterPage() {
  const [role, setRole] = useState('STUDENT');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    companyName: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        role,
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        collegeName: role === 'STUDENT' ? formData.collegeName : undefined,
        companyName: role === 'RECRUITER' ? formData.companyName : undefined,
      };

      await axiosInstance.post('/auth/register', payload);
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-plum-600/10 p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex bg-blush p-3 rounded-2xl text-plum-600">
            <Compass className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold text-plum-700">Create Account</h2>
          <p className="text-sm text-slate-500">Join CareerCompass as a Student or Recruiter</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-sm flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded-xl text-sm flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 gap-2 bg-blush p-1.5 rounded-xl">
          <button
            type="button"
            onClick={() => setRole('STUDENT')}
            className={`py-2 rounded-lg text-sm font-semibold transition ${
              role === 'STUDENT' ? 'bg-plum-600 text-white shadow' : 'text-slate-600 hover:text-plum-600'
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole('RECRUITER')}
            className={`py-2 rounded-lg text-sm font-semibold transition ${
              role === 'RECRUITER' ? 'bg-plum-600 text-white shadow' : 'text-slate-600 hover:text-plum-600'
            }`}
          >
            Recruiter
          </button>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Kriti Saini"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="student@college.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta"
              />
            </div>
          </div>

          {role === 'STUDENT' ? (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">College / Institution</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  name="collegeName"
                  required
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="University Name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Tech Corp Inc."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
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
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="text-magenta font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}