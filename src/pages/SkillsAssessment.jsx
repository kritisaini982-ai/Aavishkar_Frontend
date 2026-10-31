import React, { useState } from 'react';
import { Award, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export default function SkillsAssessment() {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Java & Spring Boot', category: 'Backend', proficiency: 'Expert' },
    { id: 2, name: 'React.js & Tailwind', category: 'Frontend', proficiency: 'Advanced' },
    { id: 3, name: 'PostgreSQL', category: 'Database', proficiency: 'Intermediate' },
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [category, setCategory] = useState('Backend');
  const [proficiency, setProficiency] = useState('Intermediate');
  const [success, setSuccess] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    
    setSkills([...skills, { id: Date.now(), name: newSkill, category, proficiency }]);
    setNewSkill('');
    setSuccess('Skill added and verified successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleRemove = (id) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-plum-600/10 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blush p-3 rounded-2xl text-plum-600">
            <Award className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-plum-700">Student Skills Assessment</h1>
            <p className="text-sm text-slate-500">Add your technical stack to improve your career recommendations.</p>
          </div>
        </div>

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-600 p-3 rounded-xl text-sm flex items-center space-x-2">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleAddSkill} className="grid sm:grid-cols-4 gap-4 bg-blush p-4 rounded-xl border border-plum-600/10">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">Skill Name</label>
            <input
              type="text"
              required
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="e.g. Docker, Git, Python"
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-magenta"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Proficiency</label>
            <select
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-magenta bg-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="flex items-end">
            <button type="submit" className="w-full bg-plum-600 hover:bg-plum-700 text-white font-semibold py-2 rounded-lg text-sm shadow transition flex items-center justify-center space-x-1">
              <Plus className="h-4 w-4" /> <span>Add Skill</span>
            </button>
          </div>
        </form>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-800 text-lg">Your Current Verified Skills</h3>
          {skills.length === 0 ? (
            <p className="text-slate-500 text-sm">No skills added yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {skills.map((s) => (
                <div key={s.id} className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div>
                    <p className="font-semibold text-slate-800">{s.name}</p>
                    <span className="text-xs text-slate-500">{s.category}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs bg-blush text-plum-600 font-medium px-2.5 py-1 rounded-full">{s.proficiency}</span>
                    <button onClick={() => handleRemove(s.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
