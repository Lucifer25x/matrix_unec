import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import "./css/App.css";

const apiUrl = 'https://api.github.com';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
      });
  }, []);

  const searchUsers = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/search/users?q=${search}`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data.items);
      });
  }

  return (
    <>
      <h1 style={{textAlign: "center", marginTop: "20px"}}>GitHub Profiles</h1>
      <div className="container">
        <form className="search" onSubmit={searchUsers}>
          <input type="text" placeholder="Write the username here..." onChange={e => setSearch(e.target.value)} autoComplete="off" required/>
          <button type="submit">Search</button>
        </form>
        {profiles.length === 0 && <p style={{textAlign: "center", marginTop: "20px"}}>No results found</p>}
        <div className="profiles">
          {profiles.map(profile => (
            <Profile key={profile.id} data={profile}/>
          ))}        
        </div>
      </div>
    </>
  )
}

export default App;