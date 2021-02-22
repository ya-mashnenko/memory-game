import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import GameBoard from "./GameBoard";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <GameBoard />
      <Footer />
    </React.Fragment>
  );
};

export default App;
