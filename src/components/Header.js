import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import MenuList from "./Menu";
import { handleGameLength } from "./MenuListFunctions";
import useSound from "use-sound";

const Header = () => {
  const [isMenuOpen, setMenuCondition] = useState(false);
  const [showTimer, setTimer] = useState(false);
  const [clickMenu] = useSound("public/sounds/short-click.mp3");

  const handleResetGame = () => {
    Array.from(document.getElementsByClassName("guessed")).map((card) =>
      card.classList.remove("guessed")
    );
    Array.from(document.getElementsByClassName("flip")).map((card) =>
      card.classList.remove("flip")
    );
  };

  const handleTimer = () => {
    setTimer(!showTimer);
  };

  const handleClick = (e) => {
    setMenuCondition(!isMenuOpen);
    clickMenu;

    // window.addEventListener("click", (e) => {
    //   const [menu] = document.getElementsByClassName("menu-list");
    //   e.target !== menu ? setMenuCondition(false) : null;
    // });
  };

  return (
    <header>
      <div className="game-name">Memory Game</div>
      <>{showTimer ? <Timer /> : null}</>
      <div className="menu">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAOUlEQVRoge3XMQEAIAwDQcC/5yCiQ4beKciPOQd2u0nSHjHx2gOmBAAAwF4eWZsAAADYyyNrEwB0feFZDApmsPdrAAAAAElFTkSuQmCC"
          onClick={(e) => handleClick(e)}
        />
        <>
          {isMenuOpen ? (
            <div className="menu-list">
              <div
                className="menu-option"
                id="newGame"
                onClick={handleResetGame}
              >
                New Game
              </div>
              <div
                className="menu-option"
                id="gameLength"
                onClick={handleGameLength}
              >
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
          ) : null}
        </>
      </div>
    </header>
  );
};

export default Header;
