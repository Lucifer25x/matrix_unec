import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiGroupFill, RiHistoryFill, RiGithubFill } from "@remixicon/react";
import Repo from "./Repo";
import "../css/User.css";

const apiUrl = 'https://api.github.com';

const User = () => {
    const { userId } = useParams();
    const [data, setData] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });

        fetch(`${apiUrl}/users/${userId}/repos`)
            .then(response => response.json())
            .then(data => {
                setRepos(data);
            });
    }, [userId]);

    return (
        <div className="user">
            <div className="container">
                <div className="left">
                    <img src={data.avatar_url} />
                    <h1>{data.name}</h1>
                    <h3>{data.login}</h3>
                    {data.bio && <p>{data.bio}</p>}
                    <p className="followers"><RiGroupFill size={20}/> {data.followers} followers - {data.following} following</p>
                    <p className="created"><RiHistoryFill size={20}/> Created at: {data.created_at}</p>
                    <hr />
                    <a href={data.html_url}><RiGithubFill size={20}/> Go to GitHub</a>
                </div>
                <div className="right">
                    <h2>Repositories</h2>
                    {repos.length === 0 && <p>No repositories found</p>}
                    <div className="repos">
                        {repos.map(repo => (
                            <Repo key={repo.id} repo={repo}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;