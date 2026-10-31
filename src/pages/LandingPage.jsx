import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Target, Award, Briefcase, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-plum-600 via-plum-700 to-magenta-600 text-white py-20 px-4 text-center shadow-xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="bg-white/20 text-blush px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            Aavishkar Capstone Project 2026
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Navigate Your Career with <span className="text-pink-200">Precision</span>
          </h1>
          <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto">
            Data-driven skill-gap analysis, personalized learning roadmaps, and intelligent matching for undergraduate students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/register" className="bg-white text-plum-600 hover:bg-blush font-bold px-8 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/opportunities" className="border border-white/40 hover:bg-white/10 font-medium px-8 py-3.5 rounded-xl transition flex items-center justify-center">
              Browse Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold text-plum-700">Platform Core Capabilities</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Everything undergraduate students need to bridge academia and industry demands.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-4">
            <div className="bg-blush p-3 w-fit rounded-xl text-plum-600">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Skill-Gap Analytics</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Compare your verified academic skillset against real-time job role criteria using our explainable matching algorithm.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-4">
            <div className="bg-blush p-3 w-fit rounded-xl text-plum-600">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Readiness Scoring</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Track your industry readiness score dynamically calculated from skill proficiencies and questionnaire insights.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 hover:shadow-lg transition space-y-4">
            <div className="bg-blush p-3 w-fit rounded-xl text-plum-600">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Smart Opportunity Match</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Apply directly to internships and jobs vetted by recruiters with personalized match percentage indicators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}