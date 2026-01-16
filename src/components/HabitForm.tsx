import { FormEvent, useState } from 'react';
import type { HabitFrequency } from '../types';

type HabitFormProps = {
  onAdd: (name: string, frequency: HabitFrequency) => void;
};

const frequencyOptions: HabitFrequency[] = ['daily', 'weekly', 'monthly'];

function HabitForm({ onAdd }: HabitFormProps) {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState<HabitFrequency>('daily');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      return;
    }
    onAdd(trimmedName, frequency);
    setName('');
    setFrequency('daily');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
    >
      <div className="grid gap-2">
        <label htmlFor="habit-name" className="text-sm font-medium text-slate-700">
          Habit name
        </label>
        <input
          id="habit-name"
          name="habit-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g., Drink water"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-base shadow-inner focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          required
        />
      </div>

      <div className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Frequency</span>
        <div className="flex gap-2">
          {frequencyOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFrequency(option)}
              className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold capitalize shadow-sm transition hover:shadow ${
                frequency === option
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
              aria-pressed={frequency === option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      >
        Add habit
      </button>
    </form>
  );
}

export default HabitForm;
