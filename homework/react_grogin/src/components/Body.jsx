import { useState, useEffect } from "react";
import "../css/Body.css";

const apiUrl = "https://dummyjson.com/products";

function Body() {
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

        // console.log(data.products);
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
        // console.log(selectedCategories)
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
                            <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Price: ${minPrice} - ${maxPrice}</p>
                        <button>Filter</button>
                    </div>
                </div>
                <div className="filter">
                    <h4>Rating filter</h4>
                    <div className="controls">
                        <div className="el">
                            <label htmlFor="minRating">Min rating</label>
                            <input type="number" id="minRating" value={minRating} onChange={(e) => setMinRating(e.target.value)}/>
                        </div>
                        <div className="el">
                            <label htmlFor="maxRating">Max price</label>
                            <input type="number" id="maxRating" value={maxRating} onChange={(e) => setMaxRating(e.target.value)}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Rating: {minRating} - {maxRating}</p>
                        <button>Filter</button>
                    </div>
                </div>
                <div className="categories">
                    <h4>Product Categories</h4>
                    {/* <div>
                        <input type="checkbox" id="category1" />
                        <label htmlFor="category1">Category 1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="category2" />
                        <label htmlFor="category2">Category 2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="category3" />
                        <label htmlFor="category3">Category 3</label>
                    </div> */}
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
                    <div className="product">
                        <div className="img">
                            <img src="https://via.placeholder.com/150" alt="Product" />
                            <p>Product Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;