import React, { useState, useEffect } from "react";
import useSound from "use-sound";

const Modal = ({ isWinner, isSoundOn, onNewGame }) => {
  const [showMod, setModal] = useState(true);
  const [winnerSound] = useSound("public/sounds/win-sound.mp3");
  const [looserSound] = useSound("public/sounds/loose-sound.mp3");

  // isSoundOn ? (isWinner ? winnerSound() : looserSound()) : null;

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
              {isWinner ? "You won!" : "You loose!"}
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
