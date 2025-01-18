import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Price from "../utils/Price";
import { useCart } from "react-use-cart";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "../css/Product.css";

function Product() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useCart();

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setTimeout(() => {
            document.querySelector('.loading').style.opacity = 0;
        }, 500);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const handleAddItem = (product) => {
        toast.success('Product was added to your cart!', {
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
        addItem(product);
    }

    return (
        <>
            {loading && <div className="loading"><div className="circle"></div></div>}
            {!loading && (
                <div className="product-details">
                    <img src={product.images[0]} alt={product.title} />
                    <div className="details">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        {/* <p>Price: {product.price}</p> */}
                        <p>Price: <Price price={product.price} /></p>
                        <p>Rating: {product.rating}</p>
                        <div className="buttons">
                            <Link to="/">Back</Link>
                            <button onClick={() => {handleAddItem(product)}}>Add to cart</button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </>
    )
}

export default Product;