import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import MobileMenu from "./MobileMenu";
import {RiMenu2Line, RiMailFill} from "@remixicon/react";
import logo from "../img/logo1.png";
import "../css/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     console.log(isOpen)
    // }, [isOpen]);

    return (
        <>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="Ovro" width={150}/>
                </div>
                <div className="right">
                    <Toggle />
                    <a href="#">HIRE ME <RiMailFill size={25}/></a>
                    <RiMenu2Line size={30} style={{cursor: "pointer"}} onClick={() => {setIsOpen(true)}}/>
                </div>
            </div>
        </>
    )
}

export default Navbar;