import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import useSound from "use-sound";
import { useHotkeys } from "react-hotkeys-hook";

const Header = ({
  onNewGame,
  switchSound,
  isSoundOn,
  setGameLength,
  isGameLong,
  setTimeOver,
  timeOver,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTimer, setTimer] = useState(false);
  const [clickMenu] = useSound("../public/sounds/short-click.mp3");
  useHotkeys("esc", () => setMenuOpen(false));

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
      <>
        {showTimer ? (
          <Timer
            setTimeOver={setTimeOver}
            timeOver={timeOver}
            showTimer={showTimer}
            setTimer={setTimer}
          />
        ) : null}
      </>
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
                onClick={() => {
                  onNewGame(isGameLong);
                  setMenuOpen(false);
                }}
              >
                New Game
              </div>
              <div
                className="menu-option"
                onClick={() => {
                  setGameLength(!isGameLong);
                  onNewGame(!isGameLong);
                  setMenuOpen(false);
                }}
              >
                {isGameLong ? "Short Game" : "Long Game"}
              </div>
              <label className="menu-option">
                <input
                  type="checkbox"
                  name="sound"
                  checked={isSoundOn}
                  onChange={() => {
                    switchSound(!isSoundOn);
                    setMenuOpen(false);
                  }}
                />
                <span className="check-mark"></span>
                {isSoundOn ? "Sound Off" : "Sound On"}
              </label>
              <div
                className="menu-option"
                onClick={() => {
                  handleTimer();
                  setMenuOpen(false);
                }}
              >
                Play with Time
              </div>
            </div>
          ) : null}
        </>
      </div>
    </header>
  );
};

export default Header;
