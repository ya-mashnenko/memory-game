import React, { useState } from "react";
import { menuList } from "./Utilities";

const MenuList = () => {
  return (
    <ul className="menu-list">
      {menuList.map((option) => (
        <li className="menu-option">{option}</li>
      ))}
    </ul>
  );
};

export default MenuList;
