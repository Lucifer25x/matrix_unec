import React from "react";
import { RiArrowUpLine, RiInstagramFill, RiDribbbleFill, RiTwitterFill, RiYoutubeFill } from "@remixicon/react";
import Button from "./Button";

class Footer extends React.Component {
    constructor(){
        super();
        this.scrollToTop = this.scrollToTop.bind(this); 
    }

    scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    render() {
        return (
            <footer>
                <button onClick={this.scrollToTop}><RiArrowUpLine size={30}/></button>
                <div className="main">
                    <div className="brand">
                        <div className="line"></div>
                        <div className="name">Bookapp</div>
                        <div className="line"></div>
                    </div>
                    <div className="body">
                        <a href="mailto:live@example.com">live@example.com</a>
                        <a href="tel:+99922335555">+999 22 33 5555</a>
                        <div className="socials">
                            <div className="social"><RiInstagramFill size={20}/></div>
                            <div className="social"><RiDribbbleFill size={20}/></div>
                            <div className="social"><RiTwitterFill size={20}/></div>
                            <div className="social"><RiYoutubeFill size={20}/></div>
                        </div>
                        <div className="subscribe">
                            <input type="email" name="email" id="email" placeholder="Enter email here..." autoComplete="off"/>
                            <Button>Subscribe</Button>
                        </div>
                        <div className="links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Shops</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    Copyright  &copy; 2024 <a href="#">Bookapp</a>. All Rights Reserved 
                </div>
            </footer>
        );
    }
}

export default Footer;