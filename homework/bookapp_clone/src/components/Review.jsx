import React from "react";
import Stars from "./Stars";

class Review extends React.Component {
    render() {
        return (
            <div className="review">
                <div className="user">
                    <img src={this.props.img} width={70}/>
                    <div className="desc">
                        <a href="#">{this.props.name}</a>
                        <Stars count={this.props.stars} size={15} rating={this.props.rating} />
                    </div>
                </div>
                <h2>{this.props.header}</h2>
                <p className="gray_text">{this.props.review}</p>
            </div>
        );
    }
}

export default Review;