type Numbers = { id: number; num: number | string; hold: boolean }[];

export const initNumbers = (): Numbers =>
  Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    num: "$",
    hold: false,
  }));
