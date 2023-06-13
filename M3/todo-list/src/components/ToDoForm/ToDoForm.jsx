import { useContext, useState } from "react"
import { ToDoContext } from "../../contexts/ContextToDo"

const ToDoForm = () => {

    const [task, setTask] = useState("")
    const { saveToDo } = useContext(ToDoContext)

    const handleSaveNewTask = (event) => {
        event.preventDefault()

        saveToDo(task)
        setTask("")
    }

    return (
        <form onSubmit={handleSaveNewTask}>
            <input 
                type="text"
                placeholder="Exemplo: Estudar"
                task={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <button>Criar nova tarefa</button>
        </form>
    )
}

export default ToDoForm