import { combineReducers, createStore } from "redux";
import productReducer from "../reducers/productReducers";

const configureStore = () => {
    const store = createStore(combineReducers({product: productReducer}))
    return store
}

export default configureStore