import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Modal from "./Modal";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { GlobalStyles } from "./Style";
import { generateCards } from "./Utilities";

const App = () => {
  // const [theme, setTheme] = useState("light");
  const [cards, setCards] = useState(generateCards(true));
  const onNewGame = () => setCards(generateCards(true));

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  // const saveProgress = window.localStorage;

  return (
    // <ThemeProvider theme={lightTheme}>
    <>
      {/* <GlobalStyles /> */}
      <Header onNewGame={onNewGame} />
      <GameBoard imagesForLongGame={cards} />
      {/* <Modal /> */}
      <Footer />
    </>
    // </ThemeProvider>
  );
};

export default App;
