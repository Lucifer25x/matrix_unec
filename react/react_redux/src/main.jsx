import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import configureStore from "./tools/store/configureStore"
import { Provider } from 'react-redux'
import {addProduct} from "./tools/actions/productActions"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addProduct({img: "https://placehold.co/400", name: "Laptop", desc: "Something", price: 1000}))
store.dispatch(addProduct({img: "https://placehold.co/400", name: "Mouse", desc: "Something", price: 50}))
store.dispatch(addProduct({img: "https://placehold.co/400", name: "Keyboard", desc: "Something", price: 150}))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
