import React from "react";
import Card from "./Card";

const url = "https://fakestoreapi.com/products";
const categories = ["electronics","jewelery","men's clothing","women's clothing"];

class Cards extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [],
            backup: []
        }
    }

    componentDidMount(){
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data, backup: data}))
    }
    
    filterByCategory = (category) => {
        if(category === "All"){
            this.setState({products: this.state.backup})
        } else {
            this.setState({products: this.state.backup.filter(product => product.category === category)})
        }
    }

    showPopup = (product) => {
        this.setState({
            showPopup: true,
            product: product
        })
        document.body.style.overflow = "hidden";
    }

    closePopup = () => {
        this.setState({
            showPopup: false
        })
        document.body.style.overflow = "auto";
    }

    render(){
        return (
            <>
                <div className={this.state.showPopup ? "popup show" : "popup"}>
                    <div>
                        <button onClick={this.closePopup}>x</button>    
                        <div className="content">
                            <p>Category: {this.state.product?.category}</p>
                            <h1>{this.state.product?.title}</h1>
                            <p>Description: {this.state.product?.description}</p>
                            <br />
                            <p>Price: {this.state.product?.price}</p>
                            <p>Rate: {this.state.product?.rating?.rate}</p>
                            <p>Rating Count: {this.state.product?.rating?.count}</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="buttons">
                        {categories.map(category => (
                            <button key={category} onClick={() => this.filterByCategory(category)}>{category}</button>
                        ))}
                        <button onClick={() => this.componentDidMount()}>All</button>
                    </div>
                    <div className="content">
                        {this.state.products.map(product => (
                            <Card
                                key={product.id}
                                img={product.image}
                                category={product.category}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                rate={product.rating.rate}
                                count={product.rating.count}
                                clicked={() => this.showPopup(product)}
                            />
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Cards;