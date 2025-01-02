import {RiTwitterXFill, RiInstagramFill, RiFacebookFill, RiLinkedinFill, RiDribbbleFill} from "@remixicon/react";
import "../css/Profile.css";
import profile_img from "../img/profile.png";

const Profile = () => {
    return (
        <div className="profile" data-aos="fade-right" data-aos-duration="1000">
            <div className="img">
                <img src={profile_img}/>
            </div>
            <div className="info">
                <h2>Alex Carry</h2>
                <p>Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.</p>
                <div className="links">
                    <a href="#"><RiTwitterXFill size={25}/></a>
                    <a href="#"><RiInstagramFill size={25}/></a>
                    <a href="#"><RiFacebookFill size={25}/></a>
                    <a href="#"><RiLinkedinFill size={25}/></a>
                    <a href="#"><RiDribbbleFill size={25}/></a>
                </div>
                <a className="download" href="#">DOWNLOAD NOW</a>
                <p>© 2024 OVRO. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Profile;