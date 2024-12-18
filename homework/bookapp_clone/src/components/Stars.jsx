import React from "react";
import {RiStarLine, RiStarFill} from '@remixicon/react';

// Get the count of active stars as props (default is 0, and there are 5 stars)
class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count,
            grayCount: 5 - this.props.count
        }
    }

    render() {
        return (
            <div className="stars">
                {[...Array(this.state.count)].map((e, i) => <RiStarFill key={i} size={this.props.size} />)}
                {[...Array(this.state.grayCount)].map((e, i) => <RiStarLine key={i} size={this.props.size} />)}
                <span className="gray_text">({this.props.rating})</span>
            </div>
        );
    }
}

export default Stars;