type Numbers = { id: number; num: number | string; hold: boolean }[];
export const initNumbers = (): Numbers =>
  Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    num: "🎲",
    hold: false,
  }));
export const chooseNumber = [1, 2, 3, 4, 5, 6];
