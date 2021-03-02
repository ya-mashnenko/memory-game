import { v4 as uuid } from "uuid";

export const generateCards = (isLong) =>
  [...Array(isLong ? 4 : 8).keys()]
    .map((item, i) => ({
      id: uuid(),
      state: "closed",
      src: `https://picsum.photos/200/250?random=${i % 2 ? i : i + 1}`,
    }))
    .sort(() => Math.random() - 0.5);
