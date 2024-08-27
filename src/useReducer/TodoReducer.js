export const TodoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ABC':
            return new Error('Action type not found')
       
        default:
            return initialState
    }
}