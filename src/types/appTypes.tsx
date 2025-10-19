export type Numbers = {
  id: number;
  num: number | string;
  hold: boolean;
}[];
export type Count = {
  count: number;
};
export type Buttons = {
  handleRollNumber: () => void;
  handleResetCount: () => void;
};
export type ItemsProps = {
  numbers: Numbers;
  setHoldTrue: (id: number) => void;
};
export type WinnerPage = {
  count: number;
  handleResetCount: () => void;
};
export type InstructionsPage = {
  handleStartGame: () => void;
};
