import { TodoItemApp } from "./TodoItemApp"

export const TodoListApp = ({todos, onSelectTodo, onRemoveToDo, onToggleToDo}) => {

    const onSelectItemTodo = (id) => {
        const todo = todos.find( t => t.id === id)

        onSelectTodo(todo)
    }

    return (
        <div className="list-group">
            
            {
                todos.length === 0
                ?
                    <h1 className="text-center m-0">No existen ToDo</h1>
                :
                todos.map( todo =>  (
                    <TodoItemApp  key={todo.id} {...todo} onSelectItemTodo={ onSelectItemTodo } onRemoveToDo={ onRemoveToDo } onToggleToDo={ onToggleToDo } />
                ))
            }
            
        </div>
    )
}
