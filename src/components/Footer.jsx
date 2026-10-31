import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-auto border-t border-plum-600/30">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm font-medium text-slate-300">
          CareerCompass — Aavishkar Capstone Platform for Undergraduate Students
        </p>
        <p className="text-xs">
          Built with React.js, Tailwind CSS, Spring Boot, & PostgreSQL. © 2026 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}