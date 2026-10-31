import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Briefcase, Building, MapPin, CheckCircle2, ArrowLeft, Send } from 'lucide-react';

export default function OpportunityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);

  const opportunity = {
    id: id || 1,
    title: 'Junior Java Spring Boot Developer',
    company: 'TechCorp Solutions',
    location: 'Mumbai (Hybrid)',
    type: 'Full-time',
    salary: '₹6 LPA - ₹8 LPA',
    description: 'We are seeking an enthusiastic BSc IT / Computer Science undergraduate proficient in Java and Spring Boot to join our core backend engineering team. You will work on building REST APIs, managing PostgreSQL databases, and collaborating on microservices architecture.',
    requirements: ['Java 17+', 'Spring Boot', 'PostgreSQL', 'Git Version Control', 'Basic Docker knowledge'],
    matchScore: 92,
  };

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <button onClick={() => navigate('/opportunities')} className="flex items-center space-x-2 text-slate-600 hover:text-plum-600 transition text-sm font-semibold">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Opportunities</span>
      </button>

      <div className="bg-white rounded-3xl p-8 shadow-md border border-plum-600/10 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold bg-blush text-plum-600 px-3 py-1 rounded-full">
              {opportunity.type}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-plum-700">{opportunity.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center space-x-1"><Building className="h-4 w-4" /><span>{opportunity.company}</span></span>
              <span className="flex items-center space-x-1"><MapPin className="h-4 w-4" /><span>{opportunity.location}</span></span>
              <span className="font-semibold text-slate-700">{opportunity.salary}</span>
            </div>
          </div>
          <div className="bg-blush border border-plum-600/20 px-5 py-3 rounded-2xl text-center">
            <span className="text-2xl font-extrabold text-plum-600">{opportunity.matchScore}%</span>
            <p className="text-xs text-slate-600">Your Match Score</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">Role Description</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{opportunity.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">Required Skills</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {opportunity.requirements.map((req, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-3 bg-blush rounded-xl border border-plum-600/10">
                <CheckCircle2 className="h-5 w-5 text-plum-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end">
          {applied ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold text-sm flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Application Submitted Successfully!</span>
            </div>
          ) : (
            <button
              onClick={handleApply}
              className="bg-plum-600 hover:bg-plum-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow transition flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Apply Now with CareerCompass Profile</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}