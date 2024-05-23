import React from "react";

const UserData = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    name,
    public_repos,
    login,
    html_url,
    created_at,
  } = user;

  const created_date = new Date(created_at);
  return (
    <div className="user-data">
      <div className="user">
        <img src={avatar_url} alt="profile-image" className="avatar" />
      </div>
      <div className="user-name">
        <a href={html_url}>{name || login || "Divya Dube"}</a>
        <p>
          User joined on :{" "}
          {`${created_date.getDate()} ${created_date.toLocaleString("en-us", { month: "short" })} ${created_date.getFullYear()}`}
        </p>
      </div>
      <div className="repos-detail">
        <div>
          <p>Public Repos: {public_repos}</p>
        </div>
        <div>
          <p>Following: {following}</p>
        </div>
        <div>
          <p>Followers : {followers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
