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
//   .splice(4, 4)
//   .sort(() => Math.random() - 0.5)
//   .forEach((item) => (item.id = Math.round(Math.random() * 10000)));
// console.log(imagesForShortGame);

// const imagesForLongGame =
imagesForCards
  .sort(() => Math.random() - 0.5)
  .forEach((item) => (item.id = Math.round(Math.random() * 10000)));

const menuList = [
  "New Game",
  "Short Game",
  "Sound",
  "Play with Time",
  "Dark Theme",
];

export { menuList, imagesForCards };
