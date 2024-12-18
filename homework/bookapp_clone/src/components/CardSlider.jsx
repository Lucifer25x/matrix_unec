import React from "react";

import Card from "./Card";
import Slider from "./Slider";

class CardSlider extends React.Component {
    render(){
        return (
            <Slider>
                <Card img="https://via.placeholder.com/150" title="City Tower Barber Shop 1" author="Elshen" location="City tower, Road : 1285, Usa" price="$350" old_price="$400" />
                <Card img="https://via.placeholder.com/150" title="City Tower Barber Shop 2" author="Emil" location="City tower, Road : 1285, Usa" price="$350" old_price="$400" />
                <Card img="https://via.placeholder.com/150" title="City Tower Barber Shop 3" author="Eshqin" location="City tower, Road : 1285, Usa" price="$350" old_price="$400" />
                <Card img="https://via.placeholder.com/150" title="City Tower Barber Shop 4" author="Elxan" location="City tower, Road : 1285, Usa" price="$350" old_price="$400" />
                <Card img="https://via.placeholder.com/150" title="City Tower Barber Shop 5" author="Elcin" location="City tower, Road : 1285, Usa" price="$350" old_price="$400" />
            </Slider>
        )
    }
}

export default CardSlider;