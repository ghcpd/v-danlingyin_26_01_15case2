import { Habit } from '../types'

interface HabitItemProps {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function HabitItem({ habit, onToggle, onDelete }: HabitItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4 flex-1">
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />
        <div className="flex-1">
          <h3
            className={`text-lg font-medium ${
              habit.completed
                ? 'line-through text-gray-500'
                : 'text-gray-800'
            }`}
          >
            {habit.name}
          </h3>
          <p className="text-sm text-gray-500 capitalize">
            {habit.frequency}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => onDelete(habit.id)}
        className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
      >
        Delete
      </button>
    </div>
  )
}

export default HabitItem
