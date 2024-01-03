import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo: "",
            completed: false
        }
    ],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    toggleComplete: () => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}