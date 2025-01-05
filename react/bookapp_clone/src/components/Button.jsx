import React from "react";

// Get the content of button as children
class Button extends React.Component {
    render() {
        if(this.props.effect) {
            return (
                <a href="#" className="btn effect"><span>{this.props.children}</span></a>
            )
        } else {
            return (
                <a href="#" className="btn no_effect"><span>{this.props.children}</span></a>
            )
        }
    }
}

export default Button;