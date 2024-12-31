import {RiGithubFill} from "@remixicon/react";
import "../css/Profile.css";

const Profile = ({data}) => {
    return (
        <div className="profile">
            <div className="img">
                <img src={data.avatar_url} alt="profile" />
                <div className="shimmer"></div>
            </div>
            <a href={`/${data.login}`} style={{fontSize: ".9em"}}><RiGithubFill size={20}/>{data.login}</a>
        </div>
    );
}

export default Profile;