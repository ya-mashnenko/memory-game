import React, { useState } from "react";

const imagesForCards = [
  { img: "https://picsum.photos/200/250?random=1", key: 1 },
  { img: "https://picsum.photos/200/250?random=2", key: 2 },
  { img: "https://picsum.photos/200/250?random=1", key: 3 },
  { img: "https://picsum.photos/200/250?random=2", key: 4 },
  { img: "https://picsum.photos/200/250?random=3", key: 5 },
  { img: "https://picsum.photos/200/250?random=4", key: 6 },
  { img: "https://picsum.photos/200/250?random=4", key: 7 },
  { img: "https://picsum.photos/200/250?random=3", key: 8 },
];

// const frontImg = "../public/sigmund-XlMD1fGBnAg-unsplash.jpg";

const Card = (item) => {
  let [cardPair, addCard] = useState([]);

  const turnToFront = (event) => {
    const currentPic = event.currentTarget;
    // // flipCard("visible");
    currentPic.classList.toggle("active");
    addCard(currentPic);
    // const toLog = currentPic.getElementsByTagName("img");
    // console.log(currentPic.getElementsByTagName("img").src);
    // console.log(this.toLog.src);
  };
  return (
    <li key={item.key}>
      <div className="flipCard" onClick={turnToFront}>
        <div className="front">
          <img src={item.img} />
        </div>
        <div className="back" />
      </div>
    </li>
  );
};

const GameBoard = () => {
  return (
    <div className="imageList">
      <ul>
        {imagesForCards
          .sort(() => Math.random() - 0.5)
          .map((item) => Card(item))}
      </ul>
    </div>
  );
};

export default GameBoard;
