// const handleGameLength = (event) => {
//   const [shortGame, setGameLength] = useState(false);

//   const longGame = (title) => {
//     <GameBoard arr={imagesForLongGame} />;
//     title = "Short " + title;
//   };

//   const shortGame = (title) => {
//     <GameBoard arr={imagesForShortGame} />;
//     title = "Long " + title;
//   };
//   setGameLength(!shortGame);
//   shortGame ? shortGame(event.title) : longGame(event.title);
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

export { handleTimer, handleResetGame, handleGameLength };
