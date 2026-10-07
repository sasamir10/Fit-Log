# 🏋️ Fit Log

> A modern workout library and workout planning application built with **Next.js, TypeScript, Tailwind CSS, and the App Router**.

Fit Log helps users discover workouts, explore detailed exercise information, filter workouts based on their preferences, save favorite workouts, and build a personalized workout plan for the day.

The project was developed based on a **Figma UI design** and focuses on modern frontend architecture, reusable components, API integration, client-side state management, responsive design, and a smooth user experience.

---

## 🚀 Live Demo

🔗 **[View Live Application](https://fit-log-phi-next.vercel.app/)**

---

## 📸 Project Overview

Fit Log provides a complete workout discovery and planning experience with:

- 🏠 Modern landing page
- 🏋️ Workout library
- 🔎 Workout search
- 🎯 Difficulty filtering
- 💪 Muscle-group filtering
- 📋 Dynamic workout details
- ➕ Add workouts to today's plan
- 🔖 Save favorite workouts
- 📅 Personalized "My Plan" page
- ⚡ Toast notifications
- 📱 Responsive design
- 🔄 Loading and error states

---

## ✨ Key Features

### 🏠 Home Page

A modern landing page introducing the application with:

- Clear call-to-action sections
- Featured workouts
- Quick navigation to the workout library
- Responsive layout

### 🏋️ Workout Library

Users can browse available workouts retrieved from an external API.

Features include:

- Workout cards
- Search by workout name
- Filter by difficulty
- Filter by muscle group
- Combined filtering
- Clear filters
- No-results state

### 📖 Workout Details

Each workout has a dedicated dynamic route.

Users can view:

- Workout image
- Workout name
- Difficulty level
- Rating
- Duration
- Calories burned
- Sets
- Repetitions
- Equipment
- Target muscle groups
- Step-by-step instructions

Example:

```text
/workouts/1
```

## 📁 Project Structure

```text
src/
├── app/
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   ├── saved/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   └── workout/
│       ├── WorkoutActions.tsx
│       ├── WorkoutCard.tsx
│       ├── WorkoutLibrary.tsx
│       ├── WorkoutList.tsx
│       └── WorkoutSearch.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── lib/
│   ├── api.ts
│   └── utils.ts
│
└── types/
    └── workout.ts
```
