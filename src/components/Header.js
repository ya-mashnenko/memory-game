import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import useSound from "use-sound";

const Header = ({
  onNewGame,
  switchSound,
  isSoundOn,
  setGameLength,
  isGameLong,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTimer, setTimer] = useState(false);
  const [clickMenu] = useSound("public/sounds/short-click.mp3");

  const handleTimer = () => {
    setTimer(!showTimer);
  };

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
    isSoundOn ? clickMenu() : null;
  };

  return (
    <header>
      <div className="game-name">Memory Game</div>
      <>{showTimer ? <Timer /> : null}</>
      <div className="menu">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAOUlEQVRoge3XMQEAIAwDQcC/5yCiQ4beKciPOQd2u0nSHjHx2gOmBAAAwF4eWZsAAADYyyNrEwB0feFZDApmsPdrAAAAAElFTkSuQmCC"
          onClick={handleClick}
        />
        <>
          {isMenuOpen ? (
            <div className="menu-list">
              <div
                className="menu-option"
                id="newGame"
                onClick={() => {
                  onNewGame(isGameLong);
                  setMenuOpen(false);
                }}
              >
                New Game
              </div>
              <div
                className="menu-option"
                id="gameLength"
                onClick={() => {
                  setGameLength(!isGameLong);
                  onNewGame(!isGameLong);
                }}
              >
                {isGameLong ? "Short Game" : "Long Game"}
              </div>
              <label className="menu-option">
                <input
                  type="checkbox"
                  id="sound"
                  name="sound"
                  checked={isSoundOn}
                  onChange={() => {
                    switchSound(!isSoundOn);
                  }}
                />
                <span className="check-mark"></span>
                {isSoundOn ? "Sound Off" : "Sound On"}
              </label>
              <label className="menu-option">
                <input
                  type="checkbox"
                  id="timer"
                  name="timer"
                  value="Timer"
                  onChange={() => {
                    handleTimer();
                    // setMenuOpen()
                  }}
                />
                <span className="check-mark"></span>
                Play with Time
              </label>
            </div>
          ) : null}
        </>
      </div>
    </header>
  );
};

export default Header;
