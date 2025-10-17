import { useState } from "react";
import { initNumbers } from "./utils/initNumbers";
import RollCount from "./components/Counter";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import WinnerPage from "./pages/WinnerPage";
import StartNumber from "./components/startNumber";
type Numbers = { id: number; num: number | string; hold: boolean }[];

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<Numbers>(initNumbers);
  const [count, setCount] = useState<number>(0);
  const [heldNumber, setHeldNumber] = useState(0);

  const randomNumber = () => {
    if (!heldNumber) {
      return;
    }
    setNumbers((prevCount) =>
      prevCount.map((item) =>
        !item.hold ? { ...item, num: Math.ceil(Math.random() * 6) } : item
      )
    );
    numbers.every((item) => item.hold)
      ? setCount((prev) => prev)
      : setCount((prev) => prev + 1);
  };
  const setHoldTrue = (id: number) => {
    // Preventing user from holding number if any number is still a string
    if (numbers.some((number) => typeof number.num === "string")) {
      return;
    } else {
      setNumbers((prevCount) =>
        prevCount.map((item) =>
          // hold only choosen number from start
          item.id === id && heldNumber === item.num
            ? { ...item, hold: true }
            : item
        )
      );
    }
  };
  const handleResetCount = () => {
    setNumbers(initNumbers);
    setHeldNumber(0);
    setCount(0);
  };
  const handleSetNumber = (number: number) => {
    setHeldNumber(number);
  };
  return (
    <>
      <StartNumber heldNumber={heldNumber} handleSetNumber={handleSetNumber} />
      {!numbers.every((item) => item.hold) ? (
        <>
          <Items numbers={numbers} setHoldTrue={setHoldTrue} />
          <RollCount count={count} />
          <Buttons
            randomNumber={randomNumber}
            handleResetCount={handleResetCount}
          />
        </>
      ) : (
        <WinnerPage count={count} handleResetCount={handleResetCount} />
      )}
    </>
  );
};

export default App;
