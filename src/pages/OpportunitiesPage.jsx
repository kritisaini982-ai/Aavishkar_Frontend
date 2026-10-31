import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Search, MapPin, Building, ChevronRight, Filter } from 'lucide-react';

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const opportunities = [
    {
      id: 1,
      title: 'Junior Java Spring Boot Developer',
      company: 'TechCorp Solutions',
      location: 'Mumbai (Hybrid)',
      type: 'Full-time',
      matchScore: 92,
      skills: ['Java', 'Spring Boot', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Full Stack React & Java Intern',
      company: 'InnoTech Labs',
      location: 'Remote',
      type: 'Internship',
      matchScore: 85,
      skills: ['React.js', 'Java', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Software Security Analyst',
      company: 'SecureGuard Systems',
      location: 'Bangalore (On-site)',
      type: 'Full-time',
      matchScore: 70,
      skills: ['OWASP Top 10', 'API Security', 'Java'],
    },
  ];

  const filteredOpportunities = opportunities.filter((op) => {
    const matchesSearch = op.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          op.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || op.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Search Banner */}
      <div className="bg-gradient-to-r from-plum-600 to-magenta-600 rounded-3xl p-8 text-white shadow-xl space-y-6">
        <div className="space-y-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Career Opportunities Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Find Your Next Role</h1>
          <p className="text-pink-100 max-w-xl">
            Vetted internships and entry-level positions matched to your academic skillset and readiness score.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title or company..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl text-slate-800 bg-white shadow focus:outline-none focus:ring-2 focus:ring-magenta"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-pink-200" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/30 text-white rounded-2xl px-4 py-3 focus:outline-none"
            >
              <option value="All" className="text-slate-800">All Types</option>
              <option value="Full-time" className="text-slate-800">Full-time</option>
              <option value="Internship" className="text-slate-800">Internship</option>
            </select>
          </div>
        </div>
      </div>

      {/* Opportunity Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((op) => (
          <div key={op.id} className="bg-white rounded-2xl p-6 shadow-md border border-plum-600/10 hover:shadow-lg transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold bg-blush text-plum-600 px-3 py-1 rounded-full">
                  {op.type}
                </span>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                  {op.matchScore}% Match
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 hover:text-plum-600 transition">{op.title}</h3>
                <div className="flex items-center space-x-1.5 text-sm text-slate-500 pt-1">
                  <Building className="h-4 w-4" />
                  <span>{op.company}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-sm text-slate-500 pt-0.5">
                  <MapPin className="h-4 w-4" />
                  <span>{op.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {op.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <Link to={`/opportunities/${op.id}`} className="text-plum-600 font-semibold text-sm hover:underline flex items-center space-x-1">
                <span>View Details & Apply</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}