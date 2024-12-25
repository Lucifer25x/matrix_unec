import "../css/Body.css";

function Body() {
    return (
        <div className="body">
            <div className="sidebar">
                <div className="filter">
                    <h4>Widget price filter</h4>
                    <div className="controls">
                        <div className="el">
                            <label htmlFor="minPrice">Min price</label>
                            <input type="number" id="minPrice" value={0} />
                        </div>
                        <div className="el">
                            <label htmlFor="maxPrice">Max price</label>
                            <input type="number" id="maxPrice" value={100} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Price: $0 - $50</p>
                        <button>Filter</button>
                    </div>
                </div>
                <div className="filter">
                    <h4>Rating filter</h4>
                    <div className="controls">
                        <div className="el">
                            <label htmlFor="minRating">Min rating</label>
                            <input type="number" id="minRating" value={0} />
                        </div>
                        <div className="el">
                            <label htmlFor="maxRating">Max price</label>
                            <input type="number" id="maxRating" value={10} />
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Rating: 0 - 10</p>
                        <button>Filter</button>
                    </div>
                </div>
                <div className="categories">
                    <h4>Product Categories</h4>
                    <div>
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
                    </div>
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