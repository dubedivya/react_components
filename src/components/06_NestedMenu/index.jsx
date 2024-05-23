import React from "react";
import MenuList from "./MenuList.jsx";
import "./style.css";

const NestedMenu = ({ menu }) => {
  return (
    <div className="nested-menu-container">
      <MenuList list={menu} />
    </div>
  );
};

export default NestedMenu;
