const initialState = [
    {
        id: 1,
        name: "Product 1",
        price: 100
    },
]

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return state
        default:
            return state
    }
}

export default productReducer