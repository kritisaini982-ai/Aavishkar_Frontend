import React, { useState } from 'react';
import { Target, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function SkillGapPage() {
  const [selectedRole, setSelectedRole] = useState('Full Stack Java Developer');
  
  const roleRequirements = {
    'Full Stack Java Developer': {
      matchScore: 82,
      matched: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js'],
      missing: ['Docker', 'Kubernetes', 'CI/CD Pipelines'],
    },
    'Software Security Analyst': {
      matchScore: 68,
      matched: ['Java', 'PostgreSQL'],
      missing: ['OWASP Top 10', 'Penetration Testing', 'JWT Security', 'API Security'],
    },
  };

  const currentAnalysis = roleRequirements[selectedRole];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blush p-3 rounded-2xl text-plum-600">
              <Target className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-plum-700">Explainable Skill-Gap Analysis</h1>
              <p className="text-sm text-slate-500">Analyze required vs. possessed skills for your target career role.</p>
            </div>
          </div>
          <div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold bg-blush text-plum-700 focus:outline-none"
            >
              <option value="Full Stack Java Developer">Full Stack Java Developer</option>
              <option value="Software Security Analyst">Software Security Analyst</option>
            </select>
          </div>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-r from-plum-600 to-magenta-600 p-6 rounded-2xl text-white flex justify-between items-center">
          <div>
            <p className="text-pink-100 text-sm">Role Match Compatibility</p>
            <h2 className="text-3xl font-extrabold">{selectedRole}</h2>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/25 text-center">
            <span className="text-3xl font-extrabold">{currentAnalysis.matchScore}%</span>
            <p className="text-xs text-pink-200">Match Score</p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/60 p-6 rounded-2xl border border-green-200 space-y-4">
            <div className="flex items-center space-x-2 text-green-700 font-bold">
              <CheckCircle2 className="h-5 w-5" />
              <span>Matched Skills ({currentAnalysis.matched.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentAnalysis.matched.map((skill, idx) => (
                <span key={idx} className="bg-white text-green-800 px-3 py-1.5 rounded-xl text-sm font-medium shadow-sm border border-green-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200 space-y-4">
            <div className="flex items-center space-x-2 text-amber-700 font-bold">
              <AlertTriangle className="h-5 w-5" />
              <span>Skills to Acquire ({currentAnalysis.missing.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentAnalysis.missing.map((skill, idx) => (
                <span key={idx} className="bg-white text-amber-900 px-3 py-1.5 rounded-xl text-sm font-medium shadow-sm border border-amber-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <a href="/student/roadmap" className="bg-plum-600 hover:bg-plum-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition flex items-center space-x-2 text-sm">
            <span>View Learning Roadmap to Bridge Gaps</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}