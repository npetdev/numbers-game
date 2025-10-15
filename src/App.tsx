import { useState } from "react";
import { initNumbers } from "./utils/initNumbers";
import styles from "./styles/App.module.css";
import WinnerPage from "./WinnerPage";
type Numbers = { id: number; num: number | string; hold: boolean }[];

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<Numbers>(initNumbers);
  const [count, setCount] = useState(0);

  console.log(numbers);
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
        <div>
          <div className={styles.container}>
            <h3>Roll Count: {count}</h3>
            <div className={styles.count}>
              {numbers.map((item) => (
                <h4
                  onClick={() => setHoldTrue(item.id)}
                  key={item.id}
                  style={{
                    backgroundColor: item.hold
                      ? "#4CAF50"
                      : "rgb(255, 255, 255)",
                  }}
                >
                  {item.num}
                </h4>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button className={styles.rollButton} onClick={randomNumber}>
              Roll
            </button>
            <button className={styles.resetbutton} onClick={handleResetCount}>
              Reset
            </button>
          </div>
        </div>
      ) : (
        <WinnerPage handleResetCount={handleResetCount} />
      )}
    </>
  );
};

export default App;
