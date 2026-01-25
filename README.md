📝 Todo App — Next.js + TanStack Query

A simple Todo application built with Next.js (App Router) and TanStack React Query demonstrating modern client-side data fetching, caching, mutations, and dependent queries.

This project covers:

Fetching and displaying todos

Viewing todo by ID

Creating new todos

Caching & background refetching

Query invalidation

Dependent queries

🚀 Tech Stack

Next.js (App Router)

React

@tanstack/react-query

Axios

JavaScript

📂 Folder Structure
src/
│
├── app/
│   ├── page.jsx                # List all todos
│   ├── add/
│   │   └── page.jsx            # Add new todo
│   └── todos/
│       └── [id]/
│           └── page.jsx        # View single todo
│
├── components/
│   └── TodoList.jsx
│
├── lib/
│   └── api.js                  # Axios instance
│
└── providers/
    └── QueryProvider.jsx       # TanStack Query provider
