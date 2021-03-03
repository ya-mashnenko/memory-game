import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GameBoard from "./GameBoard";
import { generateCards } from "./helpers";

const App = () => {
  const localStorageCards = Array.from(
    JSON.parse(localStorage.getItem("cards"))
  );
  const localStorageSound = localStorage.getItem("soundOn") === "true";
  const localStorageGameLength = localStorage.getItem("gameLong") === "true";
  const [isGameLong, setGameLength] = useState(localStorageGameLength ?? true);
  const [cards, setCards] = useState(
    localStorageCards || generateCards(isGameLong)
  );
  const [isSoundOn, setSound] = useState(localStorageSound ?? true);
  const [timeOver, setTimeOver] = useState(false);
  const onNewGame = (isGameLong) => setCards(generateCards(isGameLong));

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("soundOn", isSoundOn);
  }, [isSoundOn]);

  useEffect(() => {
    localStorage.setItem("gameLong", isGameLong);
  }, [isGameLong]);

  return (
    <>
      <Header
        onNewGame={onNewGame}
        switchSound={setSound}
        isSoundOn={isSoundOn}
        setGameLength={setGameLength}
        isGameLong={isGameLong}
        setTimeOver={setTimeOver}
        timeOver={timeOver}
      />
      <GameBoard
        cards={cards}
        setCards={setCards}
        isSoundOn={isSoundOn}
        onNewGame={onNewGame}
        timeOver={timeOver}
      />
      <Footer />
    </>
  );
};

export default App;
