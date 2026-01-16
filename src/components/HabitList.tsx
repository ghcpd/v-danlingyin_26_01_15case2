import { Habit } from '../types'
import HabitItem from './HabitItem'

interface HabitListProps {
  habits: Habit[];
  onToggleHabit: (id: string) => void;
  onDeleteHabit: (id: string) => void;
}

function HabitList({ habits, onToggleHabit, onDeleteHabit }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">
          No habits yet. Add your first habit above!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Habits
      </h2>
      <div className="space-y-3">
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={onToggleHabit}
            onDelete={onDeleteHabit}
          />
        ))}
      </div>
    </div>
  )
}

export default HabitList
