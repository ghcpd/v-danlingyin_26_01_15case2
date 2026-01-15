import { useMemo, useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import type { Habit, HabitFrequency } from './types';

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string, frequency: HabitFrequency) => {
    setHabits((current) => [
      ...current,
      {
        id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name,
        frequency,
        completed: false,
      },
    ]);
  };

  const toggleHabit = (id: string) => {
    setHabits((current) =>
      current.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id: string) => {
    setHabits((current) => current.filter((habit) => habit.id !== id));
  };

  const completedCount = useMemo(() => habits.filter((habit) => habit.completed).length, [habits]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-8">
      <main className="mx-auto flex max-w-xl flex-col gap-6">
        <header className="flex flex-col gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">Habit Tracker</p>
          <h1 className="text-3xl font-bold text-slate-900">Build habits that stick</h1>
          <p className="text-sm text-slate-600">Add habits, track completion, and stay on top of your routine.</p>
          <div className="mt-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
            <span>{completedCount} completed</span>
            <span className="text-slate-400">/</span>
            <span>{habits.length} total</span>
          </div>
        </header>

        <HabitForm onAdd={addHabit} />

        <section aria-label="Habit list" className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Habits</span>
            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
              {habits.length}
            </span>
          </div>
          <HabitList habits={habits} onToggle={toggleHabit} onDelete={deleteHabit} />
        </section>
      </main>
    </div>
  );
}

export default App;
