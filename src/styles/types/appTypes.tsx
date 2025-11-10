export type NumbersProps = {
  id: number;
  num: number | string;
  hold: boolean;
}[];
export type initNumber = {
  heldNumber: number;
  handleSetNumber: (heldNumber: number) => void;
};
export type CountProps = {
  score: number;
};
export type ButtonsProps = {
  handleRollNumber: () => void;
  handleResetCount: () => void;
};
export type ItemsProps = {
  numbers: NumbersProps;
  setHoldTrue: (id: number) => void;
};
export type WinnerPageProps = {
  player_name: string;
  score: number;
  handleResetCount: () => void;
  onEndGame: () => void;
};

