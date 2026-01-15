# Habit Tracker

A simple and intuitive web application to help users build and maintain daily habits.

## Overview

Habit Tracker is a single-page application that allows users to create, manage, and track their daily habits. The app features a clean, responsive UI designed for ease of use on both desktop and mobile devices.

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript (strict mode)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm

## Features

- ✅ **Add Habits** - Create new habits with a name and frequency (daily, weekly, or monthly)
- ✅ **View Habit List** - See all your habits in a clean, organized list
- ✅ **Toggle Completion** - Mark habits as completed or incomplete with a single click
- ✅ **Delete Habits** - Remove habits you no longer want to track
- ✅ **Progress Tracking** - View completion count for your habits
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd habit-tracker
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
habit-tracker/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx        # App header component
│   │   ├── HabitForm.tsx     # Form to add new habits
│   │   ├── HabitItem.tsx     # Individual habit item component
│   │   └── HabitList.tsx     # List container for habits
│   ├── types/
│   │   └── habit.ts          # TypeScript type definitions
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Notes

- This application uses local state only (no persistence)
- Data will be reset when the page is refreshed
