import React, { useState } from 'react';
import type { Frequency, HabitFormData } from '../types/habit';

interface HabitFormProps {
  onAddHabit: (data: HabitFormData) => void;
}

const FREQUENCIES: { value: Frequency; label: string }[] = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

function HabitForm({ onAddHabit }: HabitFormProps): React.ReactElement {
  const [name, setName] = useState<string>('');
  const [frequency, setFrequency] = useState<Frequency>('daily');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    if (!trimmedName) {
      return;
    }

    onAddHabit({ name: trimmedName, frequency });
    setName('');
    setFrequency('daily');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFrequency(e.target.value as Frequency);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Habit</h2>
      
      <div className="mb-4">
        <label htmlFor="habit-name" className="block text-sm font-medium text-gray-700 mb-1">
          Habit Name
        </label>
        <input
          type="text"
          id="habit-name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter habit name..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="habit-frequency" className="block text-sm font-medium text-gray-700 mb-1">
          Frequency
        </label>
        <select
          id="habit-frequency"
          value={frequency}
          onChange={handleFrequencyChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          {FREQUENCIES.map((freq) => (
            <option key={freq.value} value={freq.value}>
              {freq.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;
