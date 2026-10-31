import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function PostOpportunity() {
  const [formData, setFormData] = useState({
    title: '',
    company: 'TechCorp Solutions',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requiredSkills: '',
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => navigate('/recruiter/dashboard'), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blush p-3 rounded-2xl text-plum-600">
            <Briefcase className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-plum-700">Post New Opportunity</h1>
            <p className="text-sm text-slate-500">Publish job or internship openings to match with qualified students.</p>
          </div>
        </div>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded-xl text-sm flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            <span>Opportunity posted successfully! Redirecting...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Junior Java Developer"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta text-sm"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Opportunity Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta text-sm bg-white"
              >
                <option value="Full-time">Full-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Mumbai (Hybrid)"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Salary / Stipend</label>
            <input
              type="text"
              required
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              placeholder="₹6 LPA - ₹8 LPA"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Required Skills (comma separated)</label>
            <input
              type="text"
              required
              value={formData.requiredSkills}
              onChange={(e) => setFormData({ ...formData, requiredSkills: e.target.value })}
              placeholder="Java, Spring Boot, PostgreSQL"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Job Description</label>
            <textarea
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter role responsibilities and qualifications..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-magenta text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-plum-600 hover:bg-plum-700 text-white font-semibold py-3 rounded-xl shadow transition text-sm"
          >
            Publish Opportunity
          </button>
        </form>
      </div>
    </div>
  );
}