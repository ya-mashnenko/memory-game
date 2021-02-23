import React, { useState, Fragment } from "react";

const Modal = () => {
  let [showMod, setModal] = useState(false);

  const showModal = () => setModal(true);

  const hideModal = () => setModal(false);

  return (
    <div>
      <button onClick={showModal}>Show modal</button>
      {showMod ? (
        <div className="modal" id="modal">
          <h2>Congratulations!</h2>
          <div className="content">You win!</div>
          <div className="actions">
            <button className="toggle-button" onClick={hideModal}>
              Close modal
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
