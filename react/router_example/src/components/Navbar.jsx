import { Link, NavLink } from "react-router";
import {RiShoppingBasketFill, RiSearchLine} from "@remixicon/react";
import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <>
            <div className="banner">
                <div className="content">
                    <div>Phone : (+88 - 123456789)</div>
                    <div>Opening Hours : Monday To Saturday - 8AM TO 8PM</div>
                    <div>KA-62/1, Kuril, Progoti, Canada</div>
                </div>
            </div>
            <nav>
                <div className="content">
                    <Link to="/"><img src={logo} width={100}/></Link>
                    <div className="links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/products">Cart Products</NavLink>
                        <NavLink to="/pages">Our Pages</NavLink>
                        <NavLink to="/blog">Latest Blog</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                    <div className="right">
                        <div>
                            <RiShoppingBasketFill size={25} />
                        </div>
                        <div>
                            <RiSearchLine size={25} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;