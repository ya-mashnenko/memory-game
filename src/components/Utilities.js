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

imagesForCards
  .sort(() => Math.random() - 0.5)
  .forEach((item) => (item.id = Math.round(Math.random() * 100)));
console.log(imagesForCards);

export default imagesForCards;
