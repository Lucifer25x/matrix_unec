import React from "react";
import {RiGlobalLine, RiLoginBoxLine} from '@remixicon/react';
import Button from "./Button";

class Sidebar extends React.Component {
    render() {
        return (
        <div className={this.props.active ? "sidebar active" : "sidebar"}>
            <a href="#">Home <div>+</div></a>
            <a href="#">Services <div>+</div></a>
            <a href="#">Vendors <div>+</div></a>
            <a href="#">Pages <div>+</div></a>
            <a href="#">Blog <div>+</div></a>
            <a href="#">Contact</a>

            <div className="buttons">
                <p><RiGlobalLine size={20}/> Eng</p>
                <Button effect="1"><span><RiLoginBoxLine size={20}/> Login</span></Button>
            </div>
        </div>
        );
    }
}

export default Sidebar;