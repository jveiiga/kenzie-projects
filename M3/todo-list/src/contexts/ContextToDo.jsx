import { createContext, useState } from "react";

export const ToDoContext = createContext({})

const ToDoProvider = ({ children }) => {

    const [todos, setTodos] = useState([])

    const saveToDo = (task) => {

        if(!task) return
             const newToDo = {
                id: todos.length + 1,
                task: task,
                completed: false
            }

            setTodos(oldTodo => [...oldTodo, newToDo])        
    }

    const deleteToDo = (id) => {

        const filteredToDo = todos.filter((todo) => todo.id !== id)

        setTodos(filteredToDo)
    }

    const completedTask = (id) => {

        const completedToDos = todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))

        setTodos(completedToDos)
    }

    return (
        <ToDoContext.Provider value={{todos, saveToDo, deleteToDo, completedTask}}>
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoProvider
