import React, { useState } from "react";
import {
  handleTimer,
  handleResetGame,
  handleGameLength,
} from "./MenuListFunctions";

const MenuList = () => {
  return (
    <div className="menu-list">
      <div className="menu-option" id="newGame" onClick={handleResetGame}>
        New Game
      </div>
      <div className="menu-option" id="gameLength" onClick={handleGameLength}>
        Short Game
      </div>
      <div className="menu-option">
        <input type="checkbox" id="sound" name="sound" value="Sound" />
        <label for="sound"> Sound </label>
      </div>
      <div className="menu-option">
        <input
          type="checkbox"
          id="timer"
          name="timer"
          value="Timer"
          onChange={handleTimer}
        />
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
