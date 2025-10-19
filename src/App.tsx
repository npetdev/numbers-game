import { useState } from "react";
import InstructionsPage from "./pages/InstructionsPage";
import StartNumber from "./components/startNumber";
import RollCount from "./components/Counter";
import Items from "./components/Items";
import ActionButtons from "./components/ActionButtons";
import WinnerPage from "./pages/WinnerPage";
import { initNumbers } from "./utils/initNumbers";
import styles from "./styles/App.module.scss";
import type { NumbersProps } from "./types/appTypes";

const App: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [numbers, setNumbers] = useState<NumbersProps>(initNumbers);
  const [count, setCount] = useState<number>(0);
  const [heldNumber, setHeldNumber] = useState(0);
const handleStartGame = () => {
    setShowInstructions(false);
  };
const rollNumber = () => {
    if (!heldNumber) return;
    setNumbers((prev) =>
      prev.map((item) =>
        !item.hold ? { ...item, num: Math.ceil(Math.random() * 6) } : item
      )
    );
    numbers.every((item) => item.hold)
      ? setCount((prev) => prev)
      : setCount((prev) => prev + 1);
  };
const setHoldTrue = (id: number) => {
    if (numbers.some((number) => typeof number.num === "string")) return;
    setNumbers((prev) =>
      prev.map((item) =>
        item.id === id && heldNumber === item.num
          ? { ...item, hold: true }
          : item
      )
    );
  };
 const handleResetCount = () => {
    setNumbers(initNumbers);
    setHeldNumber(0);
    setCount(0);
    setShowInstructions(true);
  };
const handleSetNumber = (number: number) => {
    setHeldNumber(number);
  };
return (
    <div className={styles.mainWrapper}>
      {showInstructions ? (
        <InstructionsPage handleStartGame={handleStartGame} />
      ) : !numbers.every((item) => item.hold) ? (
        <>
          <StartNumber
            heldNumber={heldNumber}
            handleSetNumber={handleSetNumber}
          />
          <RollCount count={count} />
          <Items numbers={numbers} setHoldTrue={setHoldTrue} />
          <ActionButtons
            handleRollNumber={rollNumber}
            handleResetCount={handleResetCount}
          />
        </>
      ) : (
        <WinnerPage count={count} handleResetCount={handleResetCount} />
      )}
    </div>
  );
};
export default App;
