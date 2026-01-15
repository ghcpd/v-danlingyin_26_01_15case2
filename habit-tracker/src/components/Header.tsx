import React from 'react';

function Header(): React.ReactElement {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 shadow-lg">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h1 className="text-2xl font-bold">Habit Tracker</h1>
            <p className="text-blue-100 text-sm">Build better habits, one day at a time</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
