import React, { useState, useEffect } from "react";
import useSound from "use-sound";

const Modal = ({ result }) => {
  const [showMod, setModal] = useState(true);
  const [winnerSound] = useSound("public/sounds/win-sound.mp3");
  const [looserSound] = useSound("public/sounds/loose-sound.mp3");
  const isWinner = result;

  isWinner ? winnerSound() : looserSound();
  const hideModal = () => setModal(false);

  useEffect(() => {
    return setModal(true);
  });

  return (
    <div>
      {/* <button onClick={showModal}>Show modal</button> */}
      {showMod ? (
        <div className="modal-container">
          <div className="modal" id="modal">
            <h2>{isWinner ? "Congratulations!" : "Time is up!"}</h2>
            <div className="content">
              {isWinner ? "You won!" : "You loose!"}
            </div>
            <div className="actions">
              <button className="toggle-button" onClick={hideModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
