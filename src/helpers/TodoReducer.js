
// Nuestro Reducer siempre debe retornar un estado
export const TodoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] ADD TODO':
            // Agregamos nuevo ToDo
            return [action.payload, ...initialState]
            break;

        case '[TODO] EDIT TODO':
        
            const todo = initialState.map( t => {
                if (t.id === action.payload.id) {
                    t = action.payload
                    return {
                        ...t
                    }
                }

                return t;
            })

            return todo;
            break;

        case '[TODO] REMOVE TODO':
        
            const todos = initialState.filter( todo => todo.id !== action.payload);

            return todos;

            break;

        case '[TODO] TOGGLE TODO':

            const todoToggle = initialState.map( t => {
                if (t.id === action.payload) {

                    return {
                        ...t,
                        done: !t.done
                    }
                }

                return t;
            })

            return todoToggle;
            break;
    
        default:
            initialState
            break;
    }

}
