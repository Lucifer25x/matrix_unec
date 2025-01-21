import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore, configureCountStore} from './tools/store/configureStore.js'
import { getProduct, addProduct, updateProduct, removeProduct, increment, decrement } from './tools/actions/productActions.js'
import App from './App.jsx'

// Product
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(getProduct());
store.dispatch(addProduct({ id: 2, name: 'Laptop', price: 1350 }));
store.dispatch(updateProduct({ id: 2, name: 'Laptop', price: 1500 }));
store.dispatch(removeProduct(1));

// Count
const count = configureCountStore();
count.subscribe(() => {
  console.log(count.getState());
})

count.dispatch(increment());
count.dispatch(increment());
count.dispatch(decrement());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
