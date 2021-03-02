import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GameBoard from "./GameBoard";
import { generateCards } from "./helpers";
import useSound from "use-sound";

const App = () => {
  const localStorageCards = Array.from(
    JSON.parse(localStorage.getItem("cards"))
  );
  const localStorageSound = localStorage.getItem("soundOn") === "true";
  const [isGameLong, setGameLength] = useState(true);
  const [cards, setCards] = useState(
    localStorageCards || generateCards(isGameLong)
  );
  const [isSoundOn, setSound] = useState(localStorageSound || true);
  const onNewGame = (isGameLong) => setCards(generateCards(isGameLong));

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("soundOn", isSoundOn);
  }, [isSoundOn]);

  return (
    <>
      <Header
        onNewGame={onNewGame}
        switchSound={setSound}
        isSoundOn={isSoundOn}
        setGameLength={setGameLength}
        isGameLong={isGameLong}
      />
      <GameBoard
        cards={cards}
        setCards={setCards}
        isSoundOn={isSoundOn}
        onNewGame={onNewGame}
      />
      <Footer />
    </>
  );
};

export default App;
