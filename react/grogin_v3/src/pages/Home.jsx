import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import Price from "../utils/Price";
import "../css/Home.css";

const apiUrl = "https://dummyjson.com/products";

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(0);

    const [selectedCategories, setSelectedCategories] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);

        const categories = data.products.map(product => product.category);
        const uniqueCategories = [...new Set(categories)];
        setCategories(uniqueCategories);

        const minPrice = Math.min(...data.products.map(product => product.price));
        const maxPrice = Math.max(...data.products.map(product => product.price));
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);

        const minRating = Math.min(...data.products.map(product => product.rating));
        const maxRating = Math.max(...data.products.map(product => product.rating));
        setMinRating(minRating);
        setMaxRating(maxRating);
    }

    const categoryFilter = (category, checked) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [selectedCategories]);

    return (
        <div className="body">
            <div className="sidebar">
                <div className="filter">
                    <h4>Widget price filter</h4>
                    <div className="controls">
                        <div className="el">
                            <label htmlFor="minPrice">Min price</label>
                            <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                        </div>
                        <div className="el">
                            <label htmlFor="maxPrice">Max price</label>
                            <input type="number" id="maxPrice" value={maxPrice}  onChange={(e) => setMaxPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Price: ${minPrice} - ${maxPrice}</p>
                    </div>
                </div>
                <div className="filter">
                    <h4>Rating filter</h4>
                    <div className="controls">
                        <div className="el">
                            <label htmlFor="minRating">Min rating</label>
                            <input type="number" id="minRating" value={minRating}  onChange={(e) => setMinRating(e.target.value)}/>
                        </div>
                        <div className="el">
                            <label htmlFor="maxRating">Max price</label>
                            <input type="number" id="maxRating" value={maxRating}  onChange={(e) => setMaxRating(e.target.value)}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Rating: {minRating} - {maxRating}</p>
                    </div>
                </div>
                <div className="categories">
                    <h4>Product Categories</h4>
                    {categories.map((category, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`category${index}`} onChange={(e) => categoryFilter(category, e.target.checked)}/>
                            <label htmlFor={`category${index}`}>{category}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="products">
                <div className="banner">
                    <span>Only This Week</span>
                    <h1>Grocery store with different<br />treasures</h1>
                    <p>We have prepared special discounts for you on grocery products...</p>
                    <a href="#">Shop Now</a>
                </div>
                <div className="list">
                    {products.filter(product => (selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true) && product.price >= minPrice && product.price <= maxPrice && product.rating >= minRating && product.rating <= maxRating).map((product, index) => (
                        <div key={index} className="product">
                            <div className="img">
                                <img src={product.images[0]} alt="Product" />
                            </div>
                            <Link to={`/product/${product.id}`} className="name">{product.title}</Link>
                            <Stars rating={product.rating} />
                            <p className="price"><Price price={product.price} /></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;