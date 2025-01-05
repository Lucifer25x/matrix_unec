import { RiCloseFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiPinterestFill, RiYoutubeFill } from "@remixicon/react";
import "../css/MobileMenu.css";
import logo from "../img/logo1.png";

const MobileMenu = ({ isOpen, setIsOpen}) => {
    return (
        <div className={`mobile_menu ${isOpen ? "" : "hidden"}`}>
            <RiCloseFill size={30} style={{cursor: "pointer"}} onClick={() => {setIsOpen(false)}}/>
            <img src={logo} width={130}/>
            <div className="links">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT US</a>
                <a href="#services">SERVICES</a>
                <a href="#skills">SKILLS</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#testimonial">TESTIMONIAL</a>
                <a href="#blog">BLOG</a>
                <a href="#contact">CONTACT</a>
            </div>
            <a href="#">GET IN TOUCH NOW</a>
            <h2>SOCIAL LINKS</h2>
            <div className="socials">
                <a href="#"><RiFacebookFill size={20}/></a>
                <a href="#"><RiInstagramFill size={20}/></a>
                <a href="#"><RiLinkedinFill size={20}/></a>
                <a href="#"><RiPinterestFill size={20}/></a>
                <a href="#"><RiYoutubeFill size={20}/></a>
            </div>
            <h2>SUBSCRIBE TO NEWSLETTER</h2>
            <div className="subscribe">
                <input type="text" placeholder="Email Address*"/>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default MobileMenu;