import React, { useEffect, useState } from "react";
import "./style.css";
import UserData from "./userData.jsx";

const GithubProfileFinder = () => {
  const [username, setUserName] = useState("dubedivya");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(username);

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    console.log("aaaaa");
    fetchGithubUserData();
  }, []);

  return (
    <div className="github-profile-container">
      <h1>Github Profile</h1>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search github user name.."
          name="search-github-user"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserData user={userData} /> : null}

      {loading && (
        <div>
          <p>Loading Profile...Please wait!</p>
        </div>
      )}
    </div>
  );
};

export default GithubProfileFinder;
