import type { Habit } from '../types';

type HabitItemProps = {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function HabitItem({ habit, onToggle, onDelete }: HabitItemProps) {
  const { id, name, frequency, completed } = habit;

  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-1 flex-col gap-1">
        <span className={`text-base font-semibold ${completed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
          {name}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {frequency}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(id)}
          className={`rounded-lg px-3 py-2 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
            completed
              ? 'bg-green-50 text-green-700 ring-1 ring-green-100 hover:bg-green-100'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {completed ? 'Completed' : 'Mark done'}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default HabitItem;
