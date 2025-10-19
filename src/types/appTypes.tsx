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
  count: number;
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
  count: number;
  handleResetCount: () => void;
};
export type InstructionsPageProps = {
  handleStartGame: () => void;
};
