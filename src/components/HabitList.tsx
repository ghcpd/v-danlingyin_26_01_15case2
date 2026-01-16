import type { Habit } from '../types';
import HabitItem from './HabitItem';

type HabitListProps = {
  habits: Habit[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function HabitList({ habits, onToggle, onDelete }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-200 bg-white/60 p-6 text-center text-sm text-slate-500">
        No habits yet. Add your first one to get started.
      </div>
    );
  }

  return (
    <ul className="grid gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default HabitList;
