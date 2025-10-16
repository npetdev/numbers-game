import { useState } from "react";
import { initNumbers } from "./utils/initNumbers";
import RollCount from "./components/Counter";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import WinnerPage from "./WinnerPage";
type Numbers = { id: number; num: number | string; hold: boolean }[];

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<Numbers>(initNumbers);
  const [count, setCount] = useState<number>(0);

  const randomNumber = () => {
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
          item.id === id ? { ...item, hold: true } : item
        )
      );
    }
  };
  const handleResetCount = () => {
    setNumbers(initNumbers);
    setCount(0);
  };

  return (
    <>
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
        <WinnerPage handleResetCount={handleResetCount} />
      )}
    </>
  );
};

export default App;
