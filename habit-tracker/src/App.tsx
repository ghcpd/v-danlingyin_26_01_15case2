import React, { useState } from 'react';
import type { Habit, HabitFormData } from './types/habit';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

function App(): React.ReactElement {
  const [habits, setHabits] = useState<Habit[]>([]);

  const handleAddHabit = (data: HabitFormData): void => {
    const newHabit: Habit = {
      id: generateId(),
      name: data.name,
      frequency: data.frequency,
      completed: false,
      createdAt: new Date(),
    };

    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const handleToggleHabit = (id: string): void => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const handleDeleteHabit = (id: string): void => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <HabitForm onAddHabit={handleAddHabit} />
        <HabitList
          habits={habits}
          onToggle={handleToggleHabit}
          onDelete={handleDeleteHabit}
        />
      </main>
    </div>
  );
}

export default App;
