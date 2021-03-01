import React, { useState } from "react";
import { imagesForLongGame, imagesForShortGame } from "./Utilities";
import Modal from "./Modal";
import useSound from "use-sound";

const Card = ({ img, onClick, indx, onKeyDown }) => {
  return (
    <div
      onClick={(event) => onClick(event, img)}
      className="card"
      onKeyDown={(event) => onKeyDown(event, indx)}
    >
      <img src={img.src} alt="remember this card" className="front" />
    </div>
  );
};

const GameBoard = () => {
  const [openedCardInfo, setOpenedCardInfo] = useState({ src: "", id: null });
  const [isItTimeToMatch, setTimeToMatch] = useState(false);
  const [isWinner, setWinner] = useState(false);
  const [clickCard] = useSound("public/sounds/water-click.mp3");

  const getWinner = () => {
    const cardsWinners = Array.from(document.getElementsByClassName("guessed"));
    setWinner(cardsWinners.length === imagesForShortGame.length);
    if (isWinner) {
      setTimeout(
        () =>
          Array.from(document.getElementsByClassName("guessed")).map(
            (card) => card.classList.remove("guessed")

            // card.addEventListener("click", handleCardClick);
            // return card;
          ),
        2000
      );
    }
  };

  const guessedBehaviour = () => {
    const selectedCards = Array.from(document.getElementsByClassName("flip"));
    selectedCards.map((card) => {
      card.classList.remove("flip");
      card.classList.add("guessed");
      return card;
    });

    // const winCards = Array.from(document.getElementsByClassName("guessed"));
    // winCards.map((card) => card.removeEventListener("click", handleCardClick));

    getWinner();
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
    const currentCard = event.target;
    currentCard.classList.add("flip");
    clickCard();
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

  const handleKeyPress = (event, indx) => {
    event.key === indx + 1
      ? console.log(`pressed ${event.code}`)
      : console.log(`doesn't work ${event.code}`);
  };

  return (
    <>
      <div className="board">
        {imagesForShortGame.map((img, indx) => (
          <Card
            key={img.id}
            img={img}
            onClick={handleCardClick}
            indx={indx}
            onKeyDown={handleKeyPress}
          />
        ))}
      </div>
      <>{isWinner ? <Modal result={true} /> : null}</>
    </>
  );
};

export default GameBoard;
