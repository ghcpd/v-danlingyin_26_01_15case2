import React from 'react';
import type { Habit } from '../types/habit';

interface HabitItemProps {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function HabitItem({ habit, onToggle, onDelete }: HabitItemProps): React.ReactElement {
  const handleToggle = (): void => {
    onToggle(habit.id);
  };

  const handleDelete = (): void => {
    onDelete(habit.id);
  };

  const frequencyBadgeColor = {
    daily: 'bg-green-100 text-green-800',
    weekly: 'bg-blue-100 text-blue-800',
    monthly: 'bg-purple-100 text-purple-800',
  };

  return (
    <div
      className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border-l-4 transition-all duration-200 ${
        habit.completed ? 'border-green-500 bg-green-50' : 'border-gray-300'
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={handleToggle}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            habit.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-400 hover:border-green-500'
          }`}
          aria-label={habit.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {habit.completed && (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        <div className="flex-1">
          <p
            className={`font-medium ${
              habit.completed ? 'text-gray-500 line-through' : 'text-gray-800'
            }`}
          >
            {habit.name}
          </p>
          <span
            className={`inline-block text-xs px-2 py-1 rounded-full mt-1 ${
              frequencyBadgeColor[habit.frequency]
            }`}
          >
            {habit.frequency.charAt(0).toUpperCase() + habit.frequency.slice(1)}
          </span>
        </div>
      </div>

      <button
        onClick={handleDelete}
        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
        aria-label="Delete habit"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default HabitItem;
