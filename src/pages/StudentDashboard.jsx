import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, BookOpen, Briefcase, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import axiosInstance from '../api/axiosInstance';

export default function StudentDashboard() {
  const [profile, setProfile] = useState({
    fullName: 'Kriti Saini',
    college: 'University of Mumbai',
    currentSemester: '6th Semester (BSc IT)',
    cgpa: '8.8',
    readinessScore: 78,
  });
  const [skills, setSkills] = useState([
    { name: 'Java & Spring Boot', proficiency: 'Expert' },
    { name: 'React.js & Tailwind', proficiency: 'Advanced' },
    { name: 'PostgreSQL', proficiency: 'Intermediate' },
    { name: 'Data Structures', proficiency: 'Advanced' },
  ]);

  const skillData = [
    { subject: 'Java / Spring', level: 85 },
    { subject: 'React / Frontend', level: 80 },
    { subject: 'Database / SQL', level: 70 },
    { subject: 'System Design', level: 65 },
    { subject: 'Security / OWASP', level: 75 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-plum-600 to-magenta-600 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {profile.currentSemester}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Welcome back, {profile.fullName}!</h1>
          <p className="text-pink-100">{profile.college} • CGPA: {profile.cgpa}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-1 min-w-[200px]">
          <p className="text-sm text-pink-100 font-medium">Industry Readiness Score</p>
          <div className="text-4xl font-extrabold text-white">{profile.readinessScore}%</div>
          <p className="text-xs text-pink-200">Based on verified skill overlap</p>
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/student/skills" className="bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-3 group">
          <div className="bg-blush p-3 w-fit rounded-xl text-plum-600 group-hover:bg-plum-600 group-hover:text-white transition">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Skills Assessment</h3>
          <p className="text-xs text-slate-500">Update your verified technical stack and proficiency levels.</p>
        </Link>

        <Link to="/student/skill-gap" className="bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-3 group">
          <div className="bg-blush p-3 w-fit rounded-xl text-plum-600 group-hover:bg-plum-600 group-hover:text-white transition">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Skill-Gap Analysis</h3>
          <p className="text-xs text-slate-500">Compare your skills against target job roles and requirements.</p>
        </Link>

        <Link to="/student/roadmap" className="bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-3 group">
          <div className="bg-blush p-3 w-fit rounded-xl text-plum-600 group-hover:bg-plum-600 group-hover:text-white transition">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Learning Roadmap</h3>
          <p className="text-xs text-slate-500">Follow your personalized milestone path to bridge technical gaps.</p>
        </Link>

        <Link to="/opportunities" className="bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-3 group">
          <div className="bg-blush p-3 w-fit rounded-xl text-plum-600 group-hover:bg-plum-600 group-hover:text-white transition">
            <Briefcase className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Job Matching</h3>
          <p className="text-xs text-slate-500">Explore matched internships and entry-level developer roles.</p>
        </Link>
      </div>

      {/* Analytics & Skills Breakdown */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-plum-700">Skill Proficiency Levels</h2>
            <TrendingUp className="h-5 w-5 text-magenta" />
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="level" fill="#86165F" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-plum-600/10 space-y-4">
          <h2 className="text-xl font-bold text-plum-700">Verified Skills</h2>
          <div className="space-y-3">
            {skills.map((s, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-blush rounded-xl border border-plum-600/10">
                <span className="font-semibold text-slate-800 text-sm">{s.name}</span>
                <span className="text-xs bg-plum-600 text-white px-2.5 py-1 rounded-full font-medium">{s.proficiency}</span>
              </div>
            ))}
          </div>
          <Link to="/student/skills" className="block text-center text-sm font-semibold text-magenta hover:underline pt-2">
            Manage All Skills →
          </Link>
        </div>
      </div>
    </div>
  );
}