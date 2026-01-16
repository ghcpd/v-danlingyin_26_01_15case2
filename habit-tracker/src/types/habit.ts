export type Frequency = 'daily' | 'weekly' | 'monthly';

export interface Habit {
  id: string;
  name: string;
  frequency: Frequency;
  completed: boolean;
  createdAt: Date;
}

export interface HabitFormData {
  name: string;
  frequency: Frequency;
}
