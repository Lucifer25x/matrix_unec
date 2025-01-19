import { useCart } from "react-use-cart";
import Price from "../utils/Price";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "../css/Cart.css";

const Cart = () => {
    const { isEmpty, items, emptyCart, removeItem, updateItemQuantity } = useCart();

    const handleRemoveItem = (id) => {
        removeItem(id);
        toast.error('Product was removed from your cart!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    const handleClearCart = () => {
        emptyCart();
        toast.error('All products were removed from your cart!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    return (
        <div className="cart">
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td><Price price={item.price} />  </td>
                            <td>
                                <div className="btns">
                                    <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                    {item.quantity}
                                    <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className="inc">+</button>
                                </div>
                            </td>
                            <td><Price price={item.price * item.quantity} /></td>
                            <td><button onClick={() => handleRemoveItem(item.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="clearAll" onClick={() => { handleClearCart() }} disabled={isEmpty}>Clear all the items</button>

            <ToastContainer />
        </div>
    )
}

export default Cart