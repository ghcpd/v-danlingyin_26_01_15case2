import React from 'react';
import type { Habit } from '../types/habit';
import HabitItem from './HabitItem';

interface HabitListProps {
  habits: Habit[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function HabitList({ habits, onToggle, onDelete }: HabitListProps): React.ReactElement {
  if (habits.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <svg
          className="w-16 h-16 mx-auto text-gray-300 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
        <p className="text-gray-500 text-lg">No habits yet</p>
        <p className="text-gray-400 text-sm mt-1">Add your first habit above to get started!</p>
      </div>
    );
  }

  const completedCount = habits.filter((habit) => habit.completed).length;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Habits</h2>
        <span className="text-sm text-gray-500">
          {completedCount} / {habits.length} completed
        </span>
      </div>

      <div className="space-y-3">
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default HabitList;
