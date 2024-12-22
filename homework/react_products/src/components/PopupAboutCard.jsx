import React from "react";

class PopupAboutCard extends React.Component {
    constructor(){
        super();
        this.state = {
            classNames: "popup show"
        }
    }

    closePopup = () => {
        this.setState({
            classNames: "popup"
        })
    }

    render(){
        return (
            <div className={this.props.show ? this.state.classNames : "popup"}>
                <div>
                    <button onClick={this.closePopup}>Close</button>    
                    <div className="content">
                        <p>Category: {this.props.category}</p>
                        <h1>{this.props.title}</h1>
                        <p>Description: {this.props.description}</p>
                        <br />
                        <p>Price: {this.props.price}</p>
                        <p>Rate: {this.props.rate}</p>
                        <p>Rating Count: {this.props.count}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupAboutCard;