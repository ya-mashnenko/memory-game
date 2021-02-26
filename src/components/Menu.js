import React, { useState } from "react";
import { menuList } from "./Utilities";

// const handleGameLength = (event) => {
//   const [shortGame, setGameLength] = useState(false);

// const longGame = (title) => {
//   <GameBoard arr={imagesForLongGame}/>;
// title = "Short " + title;
// }

// const shortGame = (title) => {
//   <GameBoard arr={imagesForShortGame}/>;
//   title = "Long " + title;
// }
//   setGameLength(!shortGame)
//   shortGame?shortGame(event.title):longGame(event.title);
// }

// const handleResetGame = () => {
//   useEffect(setTimeout(
//     () => {
//       Array.from(document.getElementsByClassName("guessed")).map((card) =>
//         card.classList.remove("guessed"));
//         Array.from(document.getElementsByClassName("flip")).map((card) =>
//         card.classList.remove("flip")
//       )},
//     1000
//   ))
// };

// const handleTimer = (event) => {
//   const [isTimer, setTimer] = useState(false);
//  setTimer(!isTimer);
//   isTimer?event.title='Close Timer':event.title='Play with Time';
// return isTimer?<Timer />:null
// }

// const MenuList = () => {
//   return (
//     <ul className="menu-list">
//       {menuList.map((option) => (
//         <li className="menu-option" id={option.id} key={option.id}>
//           {option.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const menuList = [
//   { title: "New Game", id: "newGame" },
//   { title: "Short Game", id: "gameLength" },
//   { title: "Sound", id: "sound" },
//   { title: "Play with Time", id: "timer" },
//   { title: "Dark Theme", id: "theme" },
// ];

const MenuList = () => {
  return (
    <div className="menu-list">
      <div className="menu-option" id="newGame">
        New Game
      </div>
      <div className="menu-option" id="gameLength">
        Short Game
      </div>
      <div className="menu-option">
        <input type="checkbox" id="sound" name="sound" value="Sound" />
        <label for="sound"> Sound </label>
      </div>
      <div className="menu-option">
        <input type="checkbox" id="timer" name="timer" value="Timer" />
        <label for="timer"> Play with Time</label>
      </div>
      <div className="menu-option">
        <input type="checkbox" id="theme" name="theme" value="Theme" />
        <label for="theme"> Dark Theme</label>
      </div>
    </div>
  );
};

export default MenuList;
