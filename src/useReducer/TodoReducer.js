export const TodoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO]Add Todo':
            return [...initialState, action.payload]
            
        case '[TODO]Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload)
       
        default:
            return initialState
    }
}