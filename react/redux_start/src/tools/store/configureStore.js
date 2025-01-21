import { createStore } from "redux";
import { productReducer, countReducer } from "../reducers/productReducer";

export const configureStore = () => {
    const store = createStore(productReducer);
    return store;
}

export const configureCountStore = () => {
    const store = createStore(countReducer);
    return store;
}