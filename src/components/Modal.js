import React, { useState, Fragment } from "react";

const Modal = () => {
  let [showMod, setModal] = useState(true);

  const showModal = () => setModal(true);

  const hideModal = () => setModal(false);

  return (
    <div>
      <button onClick={showModal}>Show modal</button>
      {showMod ? (
        <div className="modal-container">
          <div className="modal" id="modal">
            <h2>Congratulations!</h2>
            <div className="content">You won!</div>
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
