import { useEffect, useReducer } from "react"
import { TodoReducer } from "../helpers/TodoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)
    
    //cada que aiga un cambio 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const toDoPendiente = todos.filter( t => !t.done ).length
    const toDoRealizado = todos.filter( t => t.done ).length

    // Metodo para Agregar un nuevo todo
    const onAgregarToDo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }

        dispatch(action);
    }

    // Metodo para Editar Todo
    const onEditarToDo = (todo) => {
        const action = {
            type: '[TODO] EDIT TODO',
            payload: todo
        }

        dispatch(action);
    }

    // Metodo para Eliminar Todo
    const onRemoveToDo = (id) => {
        const action = {
            type: '[TODO] REMOVE TODO',
            payload: id
        }

        dispatch(action);
    }

    // Metodo para Cambiar estado de ToDo
    const onToggleToDo = (id) => {
        const action = {
            type: '[TODO] TOGGLE TODO',
            payload: id
        }

        dispatch(action);
    }

    return {
        todos,
        onAgregarToDo,
        onEditarToDo,
        onRemoveToDo,
        onToggleToDo,
        toDoPendiente,
        toDoRealizado
    }
}
