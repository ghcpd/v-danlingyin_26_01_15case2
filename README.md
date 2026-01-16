# Habit Tracker

A simple and intuitive habit tracking web application that helps users build and maintain daily habits.

## App Overview

Habit Tracker is a mobile-responsive web app that allows users to:
- Create custom habits with different frequencies
- Track daily progress by marking habits as completed
- View all habits in an organized list
- Delete habits when no longer needed

The app features a clean, modern interface with real-time updates and smooth interactions.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (Strict Mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- pnpm (install with `npm install -g pnpm` if not already installed)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The production-ready files will be in the `dist` directory.

## Features

### ✅ Add Habits
- Create new habits with a custom name
- Choose frequency (daily, weekly, or monthly)
- Simple form validation

### ✅ View Habit List
- See all your habits in a clean, organized list
- Visual indicators for completed habits (strikethrough text)
- Frequency displayed for each habit

### ✅ Toggle Completion Status
- Click the checkbox to mark a habit as completed or not completed
- Visual feedback with strikethrough text for completed habits

### ✅ Delete Habits
- Remove habits you no longer want to track
- One-click deletion with a dedicated delete button

### 📝 State Management
- Uses React's built-in state management (useState)
- All data is stored in local state (no persistence)
- Real-time UI updates

## Project Structure

```
habit-tracker/
├── src/
│   ├── components/
│   │   ├── HabitForm.tsx      # Form for adding new habits
│   │   ├── HabitList.tsx      # Container for habit items
│   │   └── HabitItem.tsx      # Individual habit display
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   ├── types.ts               # TypeScript type definitions
│   └── index.css              # Global styles with Tailwind
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## Code Quality

- **Strict TypeScript**: All code uses strict type checking with no `any` types
- **Functional Components**: Built entirely with React functional components and hooks
- **Clean Separation**: Clear component boundaries and responsibilities
- **Type Safety**: Comprehensive type definitions for all props and state
