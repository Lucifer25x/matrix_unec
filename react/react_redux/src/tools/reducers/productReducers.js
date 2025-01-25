const initialState = []

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return state
        case "ADD_PRODUCT":
            return [...state, action.payload]
        default:
            return state
    }
}

export default productReducer