import { useState } from 'react'
import { Habit } from './types'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'

function App() {
  const [habits, setHabits] = useState<Habit[]>([])

  const addHabit = (name: string, frequency: string): void => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      frequency,
      completed: false,
    }
    setHabits([...habits, newHabit])
  }

  const toggleHabit = (id: string): void => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }

  const deleteHabit = (id: string): void => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Habit Tracker
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <HabitForm onAddHabit={addHabit} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <HabitList
            habits={habits}
            onToggleHabit={toggleHabit}
            onDeleteHabit={deleteHabit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
