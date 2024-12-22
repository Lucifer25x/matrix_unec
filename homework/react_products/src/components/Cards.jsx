import React from "react";
import Card from "./Card";
import PopupAboutCard from "./PopupAboutCard";

const url = "https://fakestoreapi.com/products";
const categories = ["electronics","jewelery","men's clothing","women's clothing"];

class Cards extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data}))
    }

    filterByCategory = (category) => {
        fetch(`${url}/category/${category}`)
            .then(response => response.json())
            .then(data => this.setState({products: data}))
    }

    showPopup = (product) => {
        this.setState({
            showPopup: true,
            product: product
        })
    }

    render(){
        return (
            <>
                <PopupAboutCard category={this.state.product?.category} title={this.state.product?.title} description={this.state.product?.description} price={this.state.product?.price} rate={this.state.product?.rating.rate} count={this.state.product?.rating.count}
                    show={this.state.showPopup}/>
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