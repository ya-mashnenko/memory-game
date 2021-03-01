const imagesForLongGame = [
  { src: "https://picsum.photos/200/250?random=1" },
  { src: "https://picsum.photos/200/250?random=1" },
  { src: "https://picsum.photos/200/250?random=2" },
  { src: "https://picsum.photos/200/250?random=2" },
  { src: "https://picsum.photos/200/250?random=3" },
  { src: "https://picsum.photos/200/250?random=3" },
  { src: "https://picsum.photos/200/250?random=4" },
  { src: "https://picsum.photos/200/250?random=4" },
];

console.log(imagesForLongGame);

const imagesForShortGame = imagesForLongGame.slice(0, 4);

imagesForShortGame
  .sort(() => Math.random() - 0.5)
  .forEach((item) => (item.id = Math.round(Math.random() * 10000)));
console.log(imagesForShortGame);

imagesForLongGame
  .sort(() => Math.random() - 0.5)
  .forEach((item) => (item.id = Math.round(Math.random() * 10000)));

export { imagesForShortGame, imagesForLongGame };
