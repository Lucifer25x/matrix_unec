import {RiHome9Fill, RiPantoneFill, RiNewsFill, RiPenNibFill, RiChat3Fill, RiChatQuoteFill, RiPagesFill, RiUserFill} from "@remixicon/react";
import "../css/FloatingSidebar.css";

const FloatingSidebar = () => {
    return (
        <div className="floating_sidebar">
            <a href="#home" className="active"><RiHome9Fill size={30}/></a>
            <a href="#about"><RiPantoneFill size={30}/></a>
            <a href="#services"><RiNewsFill size={30}/></a>
            <a href="#skills"><RiPenNibFill size={30}/></a>
            <a href="#portfolio"><RiChat3Fill size={30}/></a>
            <a href="#testimonial"><RiChatQuoteFill size={30}/></a>
            <a href="#blog"><RiPagesFill size={30}/></a>
            <a href="#contact"><RiUserFill size={30}/></a>
        </div>
    )
}

export default FloatingSidebar;