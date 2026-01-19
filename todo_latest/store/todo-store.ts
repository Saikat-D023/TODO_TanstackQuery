import { get } from "http";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useTodoStore = create(
    devtools(
        (set, get) => ({
            todos: [],
            filter: "all",
            setTodos:(todos) => set({todos}),

            addTodo:(todo) => set((state) => ({
                todos: [...state.todos, todo]
            })),

            setFilter:(filter) => set({ filter }),

            setLoading: (isLoading) => set({ isLoading })
        })
    )
)