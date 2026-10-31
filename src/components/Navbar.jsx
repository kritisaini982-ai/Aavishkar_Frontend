import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Menu, X, User, LogOut, Briefcase, BarChart2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-plum-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-magenta animate-pulse" />
            <Link to="/" className="text-xl font-bold tracking-wide">CareerCompass</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-magenta transition">Home</Link>
            <Link to="/opportunities" className="hover:text-magenta transition">Opportunities</Link>
            <Link to="/survey" className="hover:text-magenta transition">Student Survey</Link>
            
            {token ? (
              <>
                {role === 'STUDENT' && <Link to="/student/dashboard" className="hover:text-magenta transition">Dashboard</Link>}
                {role === 'RECRUITER' && <Link to="/recruiter/dashboard" className="hover:text-magenta transition">Recruiter Hub</Link>}
                {role === 'ADMIN' && <Link to="/admin/dashboard" className="hover:text-magenta transition">Admin Portal</Link>}
                <button onClick={handleLogout} className="flex items-center space-x-1 bg-magenta hover:bg-magenta-600 px-3 py-1.5 rounded-lg text-sm transition">
                  <LogOut className="h-4 w-4" /> <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="space-x-3">
                <Link to="/login" className="px-4 py-1.5 rounded-lg border border-white/30 hover:bg-white/10 transition">Login</Link>
                <Link to="/register" className="bg-magenta hover:bg-magenta-600 px-4 py-1.5 rounded-lg transition font-medium">Register</Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-plum-700 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-magenta">Home</Link>
          <Link to="/opportunities" onClick={() => setIsOpen(false)} className="block py-2 hover:text-magenta">Opportunities</Link>
          <Link to="/survey" onClick={() => setIsOpen(false)} className="block py-2 hover:text-magenta">Student Survey</Link>
          {token ? (
            <>
              {role === 'STUDENT' && <Link to="/student/dashboard" onClick={() => setIsOpen(false)} className="block py-2 hover:text-magenta">Dashboard</Link>}
              {role === 'RECRUITER' && <Link to="/recruiter/dashboard" onClick={() => setIsOpen(false)} className="block py-2 hover:text-magenta">Recruiter Hub</Link>}
              {role === 'ADMIN' && <Link to="/admin/dashboard" onClick={() => setIsOpen(false)} className="block py-2 hover:text-magenta">Admin Portal</Link>}
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full text-left py-2 text-magenta font-medium">Logout</button>
            </>
          ) : (
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-center py-2 border border-white/30 rounded-lg">Login</Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="text-center py-2 bg-magenta rounded-lg font-medium">Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}