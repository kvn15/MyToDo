
export const TodoItemApp = ({id, description, done, onSelectItemTodo, onRemoveToDo, onToggleToDo}) => {
    return (
        
        <li className={"list-group-item"+(done ? " active" : "")}>
            <div className="d-flex justify-content-between">
                <p className="m-0">{description}</p>
                <div className="d-flex">
                    {
                        !done 
                        ?
                        <button className="btn btn-success d-flex align-center me-2" onClick={ () => onToggleToDo(id) }><span className="material-symbols-outlined">check</span></button>
                        :
                        <button className="btn btn-warning d-flex align-center me-2" onClick={ () => onToggleToDo(id) }><span className="material-symbols-outlined">close</span></button>
                    }

                    <button className="btn btn-secondary d-flex align-center me-2" onClick={ () => onSelectItemTodo(id) }><span className="material-symbols-outlined">edit</span></button>

                    <button className="btn btn-danger d-flex align-center" onClick={ () => onRemoveToDo(id) }><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        </li>
    )
}
