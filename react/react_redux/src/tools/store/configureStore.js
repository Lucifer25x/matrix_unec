import { createStore } from "redux";
import productReducer from "../reducers/productReducers";

const configureStore = () => {
    const store = createStore(productReducer)
    return store
}

export default configureStore