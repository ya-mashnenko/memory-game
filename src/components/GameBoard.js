import React, { useState } from "react";

const imagesForCards = [
  { img: "https://picsum.photos/200/250?random=1", key: 1 },
  { img: "https://picsum.photos/200/250?random=1", key: 2 },
  { img: "https://picsum.photos/200/250?random=2", key: 3 },
  { img: "https://picsum.photos/200/250?random=2", key: 4 },
  { img: "https://picsum.photos/200/250?random=3", key: 5 },
  { img: "https://picsum.photos/200/250?random=3", key: 6 },
  { img: "https://picsum.photos/200/250?random=4", key: 7 },
  { img: "https://picsum.photos/200/250?random=4", key: 8 },
];

// const result = () => {
//   const finalCards = document.getElementsByClassName("guessed");
//   finalCards.length===8?console.log('you won!'):console.log('not yet');
// }

const Card = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick} key={item.key}>
      <img src={item.img} alt="remember this card" className="front" />
      <div className="back" />
    </div>
  );
};

const GameBoard = () => {
  const [stayOpen, openCard] = useState(false);
  const [checkPair, addCard] = useState(0);

  const matchCards = (arr) => {
    const [firstCard, secondCard] = arr;
    openCard(firstCard === secondCard);

    const selectedCards = Array.from(document.getElementsByClassName("flip"));

    arr.splice(0, 2);

    console.log("match func", arr);
    return stayOpen
      ? selectedCards.map((card) => {
          card.onclick = function () {};
          card.classList.remove("flip");
          card.classList.add("guessed");
          return card;
        })
      : setTimeout(
          () => selectedCards.map((card) => card.classList.remove("flip")),
          1000
        );
  };

  const cardPair = [];

  const turnCard = (event) => {
    const currentCard = event.target;
    currentCard.classList.add("flip");
    const image = currentCard.getElementsByTagName("img")[0];

    console.log(event.target);

    cardPair.push(image.src);
    addCard(checkPair + 1);

    console.log(cardPair);
  };

  if (checkPair === 2) {
    console.log("length of checkPair");
    matchCards(cardPair);
    addCard(0);
  }

  return (
    <div className="board">
      {imagesForCards
        .sort(() => Math.random() - 0.5)
        .map((item) => (
          <Card key={item.key} item={item} onClick={turnCard} />
        ))}
    </div>
  );
};

export default GameBoard;
