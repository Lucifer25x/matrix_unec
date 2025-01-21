export const getProduct = () => {
    return {
        type: 'GET_PRODUCTS'
    }
};

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const updateProduct = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product
    }
}

export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: id
    }
}