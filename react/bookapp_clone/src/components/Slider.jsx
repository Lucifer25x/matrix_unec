import React from "react";
import {RiArrowLeftLine, RiArrowRightLine} from "@remixicon/react";

class Slider extends React.Component {
    constructor(){
        super();
        this.state = {
            current: 0,
            len: 0
        }
        
    }

    componentDidMount(){
        this.setState({
            len: this.props.children.length
        });
    }

    prevSlide = () => {
        this.setState({
            current: this.state.current === 0 ? this.state.len - 1 : this.state.current - 1
        });
    }

    nextSlide = () => {
        this.setState({
            current: this.state.current === this.state.len - 1 ? 0 : this.state.current + 1
        });
    }

    render() {
        return (
            <div className="slider">
                <button onClick={this.prevSlide}><RiArrowLeftLine size={20}/></button>
                {this.props.children[this.state.current]}
                <button onClick={this.nextSlide}><RiArrowRightLine size={20}/></button>
            </div>
        );
    }
}
export default Slider;