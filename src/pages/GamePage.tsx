import { useState } from "react";
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
  return (
    <div className={styles.mainWrapper}>
      {showInstructions ? (
        <>
          <RootGamePage />
          <StartGameButton handleStartGame={handleStartGame} />
        </>
      ) : !numbers.every((item) => item.hold) ? (
        <>
          <h2>Hello {playerName || "Player"}!</h2>
          <ChoosenNumber heldNumber={heldNumber} handleSetNumber={setNumber} />
          <RollCount score={score} />
          <Items numbers={numbers} setHoldTrue={setHoldTrue} />
          <ActionButtons
            handleRollNumber={rollNumber}
            handleResetCount={resetGame}
          />
        </>
      ) : (
        <WinnerPage
        score={score}
        resetGame={resetGame}
        />
      )}
    </div>
  );
};

export default App;
