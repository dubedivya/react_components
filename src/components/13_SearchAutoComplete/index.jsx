import React, { useEffect, useRef, useState } from "react";
import Suggestions from "./suggestions.jsx";
import "./style.css";
import useOutsideClick from "../16_CustomHooks/useOutsideClick/index.jsx";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowDropdown(false));

  const handleChange = (e) => {
    let query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      let filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };
  // fetch Users
  const fetchUsersList = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      setError(e.message);
    }
  };

  function handleClick(e) {
    console.log(e.target.innerText);
    setShowDropdown(false);
    setSearchParams(e.target.innerText);
    setFilteredUsers([]);
  }

  console.log(users, filteredUsers);

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <div className="search-autocomplete-container">
      <h1>Search Users here...</h1>
      <input
        type="text"
        name="search-users"
        placeholder="Search Users here....."
        onChange={handleChange}
        value={searchParams}
      />
      {loading && <h2>Loading data....Please wait!</h2>}
      {showDropdown && (
        <Suggestions
          ref={ref}
          users={filteredUsers}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default SearchAutoComplete;
