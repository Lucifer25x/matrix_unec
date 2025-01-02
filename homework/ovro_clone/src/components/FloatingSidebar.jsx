import {RiHome9Fill, RiPantoneFill, RiNewsFill, RiPenNibFill, RiChat3Fill, RiChatQuoteFill, RiPagesFill, RiUserFill} from "@remixicon/react";
import "../css/FloatingSidebar.css";

const FloatingSidebar = () => {
    return (
        <div className="floating_sidebar">
            <a href="#" className="active"><RiHome9Fill size={30}/></a>
            <a href="#"><RiPantoneFill size={30}/></a>
            <a href="#"><RiNewsFill size={30}/></a>
            <a href="#"><RiPenNibFill size={30}/></a>
            <a href="#"><RiChat3Fill size={30}/></a>
            <a href="#"><RiChatQuoteFill size={30}/></a>
            <a href="#"><RiPagesFill size={30}/></a>
            <a href="#"><RiUserFill size={30}/></a>
        </div>
    )
}

export default FloatingSidebar;