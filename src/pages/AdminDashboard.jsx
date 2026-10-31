import React from 'react';
import { Shield, Users, Building, CheckCircle, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const users = [
    { name: 'Kriti Saini', email: 'student@test.com', role: 'STUDENT', status: 'Active' },
    { name: 'TechCorp Recruiter', email: 'recruiter@techcorp.com', role: 'RECRUITER', status: 'Pending Verification' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-gradient-to-r from-plum-600 to-magenta-600 rounded-3xl p-8 text-white shadow-xl space-y-2">
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          System Administration
        </span>
        <h1 className="text-3xl font-extrabold">Admin Control Center</h1>
        <p className="text-pink-100">Verify companies, moderate opportunities, and manage platform users.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-plum-600/10 p-6 space-y-4">
        <h2 className="text-xl font-bold text-plum-700">User & Company Moderation</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blush text-plum-700 text-xs uppercase tracking-wider">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {users.map((u, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-800">{u.name}</td>
                  <td className="p-4 text-slate-600">{u.email}</td>
                  <td className="p-4"><span className="bg-slate-100 px-2.5 py-1 rounded-full text-xs font-semibold">{u.role}</span></td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      u.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {u.status === 'Pending Verification' && (
                      <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">Verify</button>
                    )}
                    <button className="text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}