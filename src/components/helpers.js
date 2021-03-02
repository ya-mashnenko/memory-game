import { v4 as uuid } from "uuid";

const LONG_GAME_CARDS_AMOUNT = 16;
const SHORT_GAME_CARDS_AMOUNT = 8;

export const generateCards = (isLong) =>
  [...Array(isLong ? LONG_GAME_CARDS_AMOUNT : SHORT_GAME_CARDS_AMOUNT).keys()]
    .map((item, i) => ({
      id: uuid(),
      state: "FLIPPED",
      src: `https://picsum.photos/200/250?random=${i % 2 ? i : i + 1}`,
    }))
    .sort(() => Math.random() - 0.5);
