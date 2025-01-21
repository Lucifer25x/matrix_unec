const initialState = [
    {
        id: 1,
        name: 'Product 1',
        price: 100
    }
]

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return state
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.payload
            ]
        case 'UPDATE_PRODUCT':
            return state.map(product => {
                if(product.id === action.payload.id) {
                    return action.payload
                }
                return product
            })
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.payload)
        default:
            return state
    }
};

export const countReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}