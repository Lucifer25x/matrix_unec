import { RiArrowDownSLine, RiMenuLine, RiMapPinLine, RiUserLine, RiHeartLine, RiShoppingCartLine } from "@remixicon/react";
import logo from "../img/logo.webp";
import "../css/Navbar.css";

function Navbar() {
    return (
        <nav>

            <div className="top">
                <div className="left">
                    <a href="#">About Us</a>
                    <a href="#">My Account</a>
                    <a href="#">Wishlish</a>
                    <p>We deliver to you every day from <strong>7:00 to 23:00</strong></p>
                </div>
                <div className="right">
                    <a href="#">English <RiArrowDownSLine size={20} /></a>
                    <a href="#">USD <RiArrowDownSLine size={20} /></a>
                    <a href="#">Order Tracking</a>
                </div>
            </div>


            <div className="nav">
                <div className="left">
                    <a href="#"><img src={logo} alt="Logo" width={150} /></a>
                    <div className="deliver">
                        <RiMapPinLine size={20} />
                        <p>Deliver to <br /><span>all</span></p>
                    </div>
                </div>
                <input type="text" placeholder="Search for products, categories or brands..." />
                <div className="right">
                    <div className="el">
                        <RiUserLine size={25} />
                        <p>Account</p>
                    </div>
                    <div className="el">
                        <RiHeartLine size={25} />
                        <p>Wishlist</p>
                    </div>
                    <div className="el">
                        <RiShoppingCartLine size={25} />
                        <p>Your Cart</p>
                    </div>
                </div>
            </div>


            <div className="mobile_nav">
                <RiMenuLine size={25} />
                <a href="#"><img src={logo} alt="Logo" width={150} /></a>
                <div className="el">
                    <RiShoppingCartLine size={25} />
                    <p>Your Cart</p>
                </div>
            </div>


            <div className="links">
                <div className="left">
                    <a href="#">Home <RiArrowDownSLine size={20} /></a>
                    <a href="#" className="active">Shop <RiArrowDownSLine size={20} /></a>
                    <a href="#">Fruits & Vegetables</a>
                    <a href="#">Beverages</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
                <div className="right">
                    <a href="#">Trending Products <RiArrowDownSLine size={20} /></a>
                    <a href="#">Almost Finished <RiArrowDownSLine size={20} /></a>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;