import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "./tools/actions/productActions"

const App = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state)
    console.log(products)

    return (
        <div>App</div>
    )
}

export default App