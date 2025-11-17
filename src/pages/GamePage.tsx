import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useGame } from "../hooks/useGame";
import RootGamePage from "./RootGamePage";
import ChoosenNumber from "../components/ChoosenNumber";
import RollCount from "../components/Counter";
import Items from "../components/Items";
import ActionButtons from "../buttons/ActionButtons";
import WinnerPage from "../pages/WinnerPage";
import StartGameButton from "../buttons/StartGameButton";
import styles from "../styles/App.module.scss";

const App: React.FC = () => {
  const { playerName } = useAuth();
  const {
    numbers,
    score,
    heldNumber,
    rollNumber,
    setHoldTrue,
    resetGame,
    setNumber,
  } = useGame();

  const [showInstructions, setShowInstructions] = useState(true);

  const handleStartGame = () => setShowInstructions(false);

  // Always scroll to top when any "screen" changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showInstructions, heldNumber, numbers]);

  return (
    <div className={styles.mainWrapper}>
      {showInstructions ? (
        <>
          <RootGamePage />
          <StartGameButton handleStartGame={handleStartGame} />
        </>
      ) : !numbers.every((item) => item.hold) ? (
        <>
          {!heldNumber ? (
            <div className={styles.textBlock}>
              <h2>Hello {playerName || "Player"}!</h2>
              <p>Please choose a number to hold before rolling.</p>
              <ChoosenNumber
                heldNumber={heldNumber}
                handleSetNumber={setNumber}
              />
            </div>
          ) : (
            <>
              <div className={styles.textBlock}>
                <h4>Roll and find {` ${heldNumber}`}</h4>
              </div>
              <RollCount score={score} />
              <Items numbers={numbers} setHoldTrue={setHoldTrue} />
              <ActionButtons
                handleRollNumber={rollNumber}
                handleResetCount={resetGame}
              />
            </>
          )}
        </>
      ) : (
        <WinnerPage score={score} resetGame={resetGame} />
      )}
    </div>
  );
};

export default App;
