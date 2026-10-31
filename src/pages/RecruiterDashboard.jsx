import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, PlusCircle, CheckCircle, XCircle, Search } from 'lucide-react';

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState('postings');

  const postings = [
    { id: 1, title: 'Junior Java Spring Boot Developer', applicants: 14, status: 'Active' },
    { id: 2, title: 'Full Stack React & Java Intern', applicants: 28, status: 'Active' },
  ];

  const candidates = [
    { name: 'Kriti Saini', role: 'Junior Java Developer', match: '92%', status: 'Shortlisted' },
    { name: 'Rahul Sharma', role: 'Full Stack Intern', match: '85%', status: 'Applied' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-plum-600 to-magenta-600 rounded-3xl p-8 text-white shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Recruiter Portal
          </span>
          <h1 className="text-3xl font-extrabold">TechCorp Hiring Hub</h1>
          <p className="text-pink-100">Manage your job opportunities and review AI-scored candidates.</p>
        </div>
        <Link to="/recruiter/post" className="bg-white text-plum-600 hover:bg-blush font-bold px-6 py-3 rounded-xl shadow transition flex items-center space-x-2 text-sm">
          <PlusCircle className="h-5 w-5" />
          <span>Post New Opportunity</span>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('postings')}
          className={`font-semibold pb-2 px-2 transition border-b-2 ${
            activeTab === 'postings' ? 'border-plum-600 text-plum-700' : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Active Postings ({postings.length})
        </button>
        <button
          onClick={() => setActiveTab('candidates')}
          className={`font-semibold pb-2 px-2 transition border-b-2 ${
            activeTab === 'candidates' ? 'border-plum-600 text-plum-700' : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Candidate Applications ({candidates.length})
        </button>
      </div>

      {activeTab === 'postings' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {postings.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-semibold">{p.status}</span>
                <span className="text-xs text-slate-500">{p.applicants} Applicants</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
              <div className="flex justify-end pt-2">
                <button className="text-plum-600 font-semibold text-sm hover:underline">Manage Applicants →</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md border border-plum-600/10 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blush text-plum-700 text-xs uppercase tracking-wider">
                <th className="p-4">Candidate Name</th>
                <th className="p-4">Target Role</th>
                <th className="p-4">Match Score</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {candidates.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-800">{c.name}</td>
                  <td className="p-4 text-slate-600">{c.role}</td>
                  <td className="p-4 font-bold text-green-700">{c.match}</td>
                  <td className="p-4">
                    <span className="bg-pink-100 text-magenta px-2.5 py-1 rounded-full text-xs font-semibold">{c.status}</span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button className="bg-plum-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-plum-700 transition">Shortlist</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}