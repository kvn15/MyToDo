import { useState, useEffect } from "react"

export const InputApp = ({onAgregarToDo, todo , onEditarToDo, onNuevoTodo}) => {

    // Utilizamos el useState para obtener el cambio de estado del Input
    const [input, setInput] = useState('')

    // Agregara el todo al input cada que este cambie
    useEffect(() => {
      setInput(todo?.description || '')
    }, [todo])
    

    // Funcion Change para obtener estado de input
    const onChangeInputValue = ({target}) => {
        const value = target.value;
        setInput(value)
    }

    const onSubmitInputValue = (event) => {
        event.preventDefault();

        if (input.length <= 1) return;

        if (todo === null) {
            // Creamos el Objeto para enviar
            const todoObj = {
                id: new Date().getTime() * 7,
                description: input,
                done: false
            }

            onAgregarToDo(todoObj);
        } else {

            // Editamos el Objeto
            const todoEdit = {
                ...todo,
                description: input
            }

            onEditarToDo(todoEdit)

            onNuevoTodo(null)
        }

        setInput('')
    }

    return (
        <form onSubmit={ onSubmitInputValue }>
            <input type="text" className="form-control input-to-do" placeholder="Agregar Tarea" onChange={ onChangeInputValue } value={input}/>
        </form>
    )
}
