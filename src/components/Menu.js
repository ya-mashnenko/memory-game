import React, { useState } from "react";
import useSound from "use-sound";
import {
  handleTimer,
  handleResetGame,
  handleGameLength,
} from "./MenuListFunctions";

const MenuList = () => {
  // const [isSoundOn, setSound] = useState(false);
  // const [clickCard] = useSound("public/sounds/water-click.mp3");
  // const [click] = useSound("public/sounds/water-click.mp3");

  // const switchSound = () => {
  //   setSound(!isSoundOn);
  //   const cards = Array.from(document.getElementsByClassName("card"));
  //   const [menuButton] = document.getElementsByClassName("menu");
  //   const [gameButton] = document.getElementsByClassName("game-name");

  //   console.log(menuButton);

  //   const turnSoundOn = () => {
  //     cards.map((card) => card.addEventListener("click", clickCard));
  //     menuButton.addEventListener("click", clickCard);
  //     gameButton.addEventListener("click", click);
  //   };

  //   const turnSoundOff = () => {
  //     cards.map((card) => card.removeEventListener("click", clickCard));
  //     menuButton.removeEventListener("click", clickCard);
  //     gameButton.removeEventListener("click", click);
  //   };

  //   isSoundOn ? turnSoundOn() : turnSoundOff();
  // };

  return (
    <div className="menu-list">
      <div className="menu-option" id="newGame" onClick={handleResetGame}>
        New Game
      </div>
      <div className="menu-option" id="gameLength" onClick={handleGameLength}>
        Short Game
      </div>
      <label className="menu-option">
        <input
          type="checkbox"
          id="sound"
          name="sound"
          value="Sound"
          // onChange={switchSound}
        />
        <span className="check-mark"></span>
        Sound
      </label>
      <label className="menu-option">
        <input
          type="checkbox"
          id="timer"
          name="timer"
          value="Timer"
          onChange={handleTimer}
        />
        <span className="check-mark"></span>
        Play with Time
      </label>
      <label className="menu-option">
        <input type="checkbox" id="theme" name="theme" value="Theme" />
        <span className="check-mark"></span>
        Dark Theme
      </label>
    </div>
  );
};

export default MenuList;
