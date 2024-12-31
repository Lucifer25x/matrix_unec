import { RiStarFill, RiGitForkFill } from "@remixicon/react";

const Repo = ({ repo }) => {
    return (
        <div className="repo">
            <a className="name" href={repo.html_url}>{repo.name}</a>
            <p className="description">{repo.description}</p>
            <div className="flex">
                <p><RiStarFill size={20}/> {repo.stargazers_count}</p>
                <p><RiGitForkFill size={20}/> {repo.forks_count}</p>
            </div>
        </div>
    );
}

export default Repo;