import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const Modal = ({ isWinner, isSoundOn, onNewGame, sound }) => {
  const [showMod, setModal] = useState(true);
  useHotkeys("esc", () => setModal(false));
  useHotkeys("enter", () => handleClick());

  isSoundOn ? sound() : null;

  const handleClick = () => {
    onNewGame();
    setModal(!showMod);
  };

  return (
    <>
      {showMod ? (
        <div className="modal-container">
          <div className="modal" id="modal">
            <h2>{isWinner ? "Congratulations!" : "Time is up!"}</h2>
            <div className="content">
              {isWinner ? `You won!!` : "You loose!"}
            </div>
            <div className="actions">
              <button className="toggle-button" onClick={handleClick}>
                New Game
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
