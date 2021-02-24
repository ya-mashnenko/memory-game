import React, { useState } from "react";
import imagesForCards from "./Utilities";

const Card = ({ img, onClick }) => {
  return (
    <div onClick={(event) => onClick(event, img)} className="card">
      <img src={img.src} alt="remember this card" className="front" />
    </div>
  );
};

const GameBoard = () => {
  const [openedCardInfo, setOpenedCardInfo] = useState({ src: "", id: null });
  const [isItTimeToMatch, setTimeToMatch] = useState(false);

  const guessedBehaviour = () => {
    const selectedCards = Array.from(document.getElementsByClassName("flip"));
    selectedCards.map((card) => {
      card.classList.remove("flip");
      card.classList.add("guessed");
      return card;
    });
  };

  const hideCards = () => {
    setTimeout(
      () =>
        Array.from(document.getElementsByClassName("flip")).map((card) =>
          card.classList.remove("flip")
        ),
      1000
    );
  };

  const handleCardClick = (event, img) => {
    console.log(img);
    const currentCard = event.target;
    currentCard.classList.add("flip");

    if (isItTimeToMatch) {
      img.src === openedCardInfo.src && img.id !== openedCardInfo.id
        ? guessedBehaviour()
        : hideCards();
      setOpenedCardInfo({ src: "", id: null });
      setTimeToMatch(false);
    } else {
      setOpenedCardInfo({ ...img });
      setTimeToMatch(true);
    }
  };

  return (
    <div className="board">
      {imagesForCards.map((img) => (
        <Card key={img.id} img={img} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default GameBoard;
