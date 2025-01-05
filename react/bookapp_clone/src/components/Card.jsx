import React from "react";
import {RiMapPinLine, RiHeartLine} from '@remixicon/react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img} />
                <div className="desc">
                    <p className="gray_text">Barber Shop</p>
                    <h3>{this.props.title}</h3>
                    <span className="gray_text">{this.props.author}</span>
                    <p className="gray_text"><RiMapPinLine size={15}/>{this.props.location}</p>
                    <p>{this.props.price} <span style={{textDecoration: "line-through"}} className="gray_text">{this.props.old_price}</span></p>
                    <a href="#">Book now</a>
                </div>
                <RiHeartLine size={20} className="heart"/>
            </div>
        );
    }
}

export default Card;