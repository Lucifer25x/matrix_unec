import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import "./css/App.css";

const apiUrl = 'https://api.github.com/users';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
      });
  }, []);

  return (
    <>
      <h1>GitHub Profiles</h1>
      <div className="profiles">
        {profiles.map(profile => (
          <Profile key={profile.id} data={profile}/>
        ))}
      </div>
    </>
  )
}

export default App;