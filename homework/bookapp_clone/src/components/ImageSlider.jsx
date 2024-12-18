import React from "react";
import Slider from "./Slider";

// Import images
import img1 from "../img/slider_1.jpg";
import img2 from "../img/slider_2.jpg";
import img3 from "../img/slider_3.jpg";


class ImageSlider extends React.Component {
    render(){
        return (
            <Slider>
                <img src={img1} alt="img1"/>
                <img src={img2} alt="img2"/>
                <img src={img3} alt="img3"/>
            </Slider>
        );
    }
}

export default ImageSlider;