import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

export default function RoadmapPage() {
  const milestones = [
    { title: 'Advanced Java 21 & Spring Boot 3', status: 'Completed', date: 'Oct 2026' },
    { title: 'PostgreSQL & Database Optimization', status: 'Completed', date: 'Oct 2026' },
    { title: 'Docker Containerization & Deployment', status: 'In Progress', date: 'Target: Nov 2026' },
    { title: 'OWASP Top 10 API Security Practices', status: 'Pending', date: 'Target: Dec 2026' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blush p-3 rounded-2xl text-plum-600">
            <BookOpen className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-plum-700">Personalized Learning Roadmap</h1>
            <p className="text-sm text-slate-500">Milestones generated based on your skill-gap analysis.</p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          {milestones.map((m, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-4 bg-blush rounded-2xl border border-plum-600/10">
              <div className="mt-1">
                {m.status === 'Completed' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : m.status === 'In Progress' ? (
                  <Clock className="h-6 w-6 text-magenta animate-pulse" />
                ) : (
                  <div className="h-6 w-6 rounded-full border-2 border-slate-300" />
                )}
              </div>
              <div className="flex-grow flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-800">{m.title}</h3>
                  <p className="text-xs text-slate-500">{m.date}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  m.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  m.status === 'In Progress' ? 'bg-pink-100 text-magenta' : 'bg-slate-200 text-slate-600'
                }`}>
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}