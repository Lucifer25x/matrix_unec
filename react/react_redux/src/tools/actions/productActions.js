import { v4 as uuidv4 } from 'uuid';

export const getProducts = () => {
    return {
        type: "GET_PRODUCTS"
    }
}

export const addProduct = ({img, name, desc, price}) => {
    return {
        type: "ADD_PRODUCT",
        payload: {
            id: uuidv4(),
            img, name, desc, price
        }
    }
}

export const removeProduct = (id) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: id
    }
}