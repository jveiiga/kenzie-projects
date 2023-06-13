import { useContext } from "react"
import { ToDoContext } from "../../contexts/ContextToDo"

const ToDo = () => {

    const { todos, deleteToDo, completedTask } = useContext(ToDoContext)

    return (
        <div>
            <ul>
                {
                    !todos.length ? (

                        <p>lista vazia</p>

                    ) : (
                        todos.map(todo => (

                        <li key={todo.id}>
                            <input 
                                type="checkbox"
                                onClick={() => completedTask(todo.id)}
                            />

                            <span
                                style={{textDecoration: todo.completed && "line-through"}}
                            >
                            { todo.task }
                            </span>
                            <button onClick={() => deleteToDo(todo.id)}>Excluir</button>
                        </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default ToDo