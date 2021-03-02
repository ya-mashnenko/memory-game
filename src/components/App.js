import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GameBoard from "./GameBoard";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "./Theme";
// import { GlobalStyles } from "./Style";
import { generateCards } from "./helpers";

const App = () => {
  const localStorageCards = Array.from(
    JSON.parse(localStorage.getItem("cards"))
  );
  const [cards, setCards] = useState(localStorageCards || generateCards(true));
  const onNewGame = () => setCards(generateCards(true));

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <Header onNewGame={onNewGame} />
      <GameBoard cards={cards} setCards={setCards} />
      <Footer />
    </>
  );
};

export default App;
