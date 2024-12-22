import React from "react";

class Card extends React.Component {
    constructor(){
        super();
        this.max_title_len = 25;
        this.max_desc_len = 200;
    }

    showPopup = () => {
        this.props.clicked();
    }

    render(){
        return (
            <div className="card" onClick={this.showPopup}>
                <div className="img">
                    <img src={this.props.img}/>
                </div>
                <div className="details">
                    <span className="category">{this.props.category}</span>
                    <div className="content">
                        <div className="top">
                            <h3>{this.props.title.length > this.max_title_len ? this.props.title.slice(0, this.max_title_len) + "..." : this.props.title}</h3>
                            <p>{this.props.description.length > this.max_desc_len ? this.props.description.slice(0, this.max_desc_len) + "..." : this.props.description}</p>
                        </div>
                        <div className="bottom">
                            <span>${this.props.price}</span>
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;