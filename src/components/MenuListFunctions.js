import useSound from "use-sound";

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
//     const [play, { stop }] = useSound(sound, {
//       sprite: {
//         clickMenu: "public/sounds/short-click.mp3",
//         clickHeader: "public/sounds/water-click.mp3",
//       }
//     });

//     const playSound = (e) => {
//       e.preventDefault();
//       play(e.target.id);
//     };
//   }

export { handleTimer, handleResetGame };
