import { Link, NavLink } from "react-router";
import {RiShoppingBasketFill, RiSearchLine} from "@remixicon/react";
import logo from "./img/logo.png";

const Navbar = () => {
    return (
        <nav>
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
                <RiShoppingBasketFill size={25} />
                <RiSearchLine size={25} />
            </div>
        </nav>
    )
}

export default Navbar;