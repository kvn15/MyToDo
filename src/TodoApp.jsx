import { useState } from "react";
import { InputApp } from "./components/InputApp"
import { TodoListApp } from "./components/TodoListApp"
import { useTodo } from "./hooks/useTodo"

export const TodoApp = () => {

    const { todos, onAgregarToDo, onEditarToDo, onRemoveToDo, onToggleToDo, toDoPendiente, toDoRealizado } = useTodo();
    // State par amanejar el editar
    const [oneTodo, setOneTodo] = useState(null)

    const onSelectTodo = (todo) => {
        setOneTodo(todo);
    }

    const onNuevoTodo = () => {
        setOneTodo(null)
    }

    return (
        <>
            <div className="container p-5">
                <h1 className="text-center display-3 fw-bold">MI TO DO LIST</h1>
                
                <InputApp 
                    onAgregarToDo={ onAgregarToDo } 
                    todo={ oneTodo } 
                    onEditarToDo={ onEditarToDo } 
                    onNuevoTodo={ onNuevoTodo } 
                />

                <hr className="my-5" />
                <div>
                    <h3 className="mb-3">
                        Mi Lista de Tareas - Nro. de Tareas Pendientes: {toDoPendiente} - Tareas Realizadas: {toDoRealizado}
                    </h3>

                    <TodoListApp 
                        todos={ todos } 
                        onSelectTodo={ onSelectTodo }
                        onRemoveToDo={ onRemoveToDo }
                        onToggleToDo={ onToggleToDo }
                    />
                </div>
            </div>
        </>
    )
}
