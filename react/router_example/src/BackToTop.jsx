import { useState } from "react";
import icon from "./img/back-to-top.png";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    window.addEventListener("scroll", () => {
        if(window.scrollY > 20) {
            setShow(true);
        } else {
            setShow(false);
        }
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="back-to-top" onClick={scrollToTop} style={{display: show ? "flex" : "none"}}>
            <img src={icon}/>
        </div>
    );
}

export default BackToTop;