import {RiGithubFill} from "@remixicon/react";
import "../css/Profile.css";

const Profile = ({data}) => {
    return (
        <div className="profile">
            <img src={data.avatar_url} alt="profile" />
            <a href={data.html_url}><RiGithubFill size={20}/>{data.login}</a>
        </div>
    );
}

export default Profile;