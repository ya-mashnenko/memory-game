import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GameBoard from "./GameBoard";
import Modal from "./Modal";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { GlobalStyles } from "./Style";

const App = () => {
  // const [theme, setTheme] = useState("light");

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
      <Header />
      <GameBoard />
      {/* <Modal /> */}
      <Footer />
    </>
    // </ThemeProvider>
  );
};

export default App;
