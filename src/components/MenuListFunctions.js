import useSound from "use-sound";
import React, { useState, useEffect } from "react";

// const handleGameLength = () => {
//   const [shortGame, setGameLength] = useState(false);
//   setGameLength(!shortGame);
//   shortGame ? (
//     <GameBoard arr={imagesForShortGame} />
//   ) : (
//     <GameBoard arr={imagesForLongGame} />
//   );
//   setGameLength(!shortGame);

// const longGame = () => {
//   <GameBoard arr={imagesForLongGame} />;
//   title = "Short " + title;
// };

// const shortGame = () => {
//   <GameBoard arr={imagesForShortGame} />;
//   title = "Long " + title;
// };
// setGameLength(!shortGame);
// shortGame ? shortGame(event.title) : longGame(event.title);
// };

const handleResetGame = () => {
  useEffect(
    setTimeout(() => {
      Array.from(document.getElementsByClassName("guessed")).map((card) =>
        card.classList.remove("guessed")
      );
      Array.from(document.getElementsByClassName("flip")).map((card) =>
        card.classList.remove("flip")
      );
    }, 1000)
  );
};

const handleTimer = (event) => {
  const [isTimer, setTimer] = useState(false);
  setTimer(!isTimer);
  isTimer ? (event.title = "Close Timer") : (event.title = "Play with Time");
  return isTimer ? <Timer /> : null;
};

// const switchSound = () => {
//   const [isSoundOn, setSound] = useState(true);
//   const [clickCard] = useSound("public/sounds/water-click.mp3");
//   setSound(!isSoundOn);

//   const cards = Array.from(document.getElementsByClassName("card"));

//   isSoundOn
//     ? cards.map((card) => card.addEventListener("click", clickCard))
//     : cards.map((card) => card.removeEventListener("click", clickCard));
// };

export { handleTimer, handleResetGame };
