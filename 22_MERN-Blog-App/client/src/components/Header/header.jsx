import React from "react";
import classes from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <h3>MERN Blog App</h3>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Add New Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
