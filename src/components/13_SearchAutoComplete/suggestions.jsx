import React from "react";

const Suggestions = ({ users, handleClick }) => {
  return (
    <ul className="suggestion-list">
      {users && users.length
        ? users.map((item, index) => (
            <li onClick={handleClick} key={index} className="suggested-user">
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;
