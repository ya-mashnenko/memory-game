import React, { useState } from "react";
import { menuList } from "./Utilities";

// const longGame = (value) => {
//   <GameBoard arr={imagesForLongGame}/>;
// value = "Short " + value;
// }

// const shortGame = (value) => {
//   <GameBoard arr={imagesForShortGame}/>;
//   value = "Long " + value;
// }

// const handleGameLength = (event) => {
//   const [shortGame, setGameLength] = useState(false);
//   setGameLength(!shortGame)
//   shortGame?shortGame(event.value):longGame(event.value);
// }

const MenuList = () => {
  return (
    <ul className="menu-list">
      {menuList.map((option) => (
        <li className="menu-option" id={option.id} key={option.id}>
          {option.title}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
