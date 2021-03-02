import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import useSound from "use-sound";

const Card = ({ img, onClick }) => {
  return (
    <div onClick={onClick} className={`card ${img.state}`}>
      <img src={img.src} alt="remember this card" className="front" />
    </div>
  );
};

const GameBoard = ({ cards, setCards, isSoundOn, onNewGame }) => {
  const [isWinner, setWinner] = useState(false);
  const [clickCard] = useSound("public/sounds/water-click.mp3");

  // const getWinner = () => {
  //   setWinner(cards.every((img) => img.state === "guessed"));
  //   if (isWinner) {
  //     setTimeout(
  //       () => setCards(cards.map((card) => ({ ...card, state: "closed" }))),
  //       2000
  //     );
  //   }
  // };

  useEffect(() => {
    const flippedCards = cards.filter((card) => card.state === "flipped");
    const hasTwoFlipped = flippedCards.length === 2;

    if (!hasTwoFlipped) return;

    const hasMatchedCards = flippedCards[0].src === flippedCards[1].src;
    const state = hasMatchedCards ? "guessed" : "closed";

    setTimeout(() => {
      setCards(
        cards.map((card) =>
          card.state === "flipped" ? { ...card, state } : card
        )
      );
    }, 1000);
  }, [cards]);

  useEffect(() => {
    const isWinner = cards.every((img) => img.state === "guessed");
    setWinner(isWinner);
    // localStorage.removeItem("cards");

    // if (isWinner) {
    //   setTimeout(() => {
    //     localStorage.removeItem("cards");
    //   }, 2000);
  }, [cards]);

  const handleCardClick = ({ id, src }) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { id, src, state: "flipped" } : card
      )
    );
    isSoundOn ? clickCard() : null;
  };

  return (
    <div className="board-container">
      <div className="board">
        {cards.map((img) => (
          <Card key={img.id} img={img} onClick={() => handleCardClick(img)} />
        ))}
      </div>
      <>
        {isWinner ? (
          <Modal isWinner={true} isSoundOn={isSoundOn} onNewGame={onNewGame} />
        ) : null}
      </>
    </div>
  );
};

export default GameBoard;
