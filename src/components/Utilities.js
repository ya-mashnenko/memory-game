const imagesForCards = [
  { src: "https://picsum.photos/200/250?random=1" },
  { src: "https://picsum.photos/200/250?random=1" },
  { src: "https://picsum.photos/200/250?random=2" },
  { src: "https://picsum.photos/200/250?random=2" },
  { src: "https://picsum.photos/200/250?random=3" },
  { src: "https://picsum.photos/200/250?random=3" },
  { src: "https://picsum.photos/200/250?random=4" },
  { src: "https://picsum.photos/200/250?random=4" },
];

// const imagesForShortGame = imagesForCards
//   .slice(0, 4)
//   .sort(() => Math.random() - 0.5)
//   .forEach((item) => (item.id = Math.round(Math.random() * 10000)));
// console.log(imagesForShortGame);

// const imagesForLongGame =
imagesForCards
  .sort(() => Math.random() - 0.5)
  .forEach((item) => (item.id = Math.round(Math.random() * 10000)));

const menuList = [
  { title: "New Game", id: "newGame" },
  { title: "Short Game", id: "gameLength" },
  { title: "Sound", id: "sound" },
  { title: "Play with Time", id: "timer" },
  { title: "Dark Theme", id: "theme" },
];

export { menuList, imagesForCards };
