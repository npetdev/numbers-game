import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useGame } from "../hooks/useGame";
import { updatePlayerScore } from "../services/players";
import InstructionsPage from "../pages/InstructionsPage";
import ChoosenNumber from "../components/ChoosenNumber";
import RollCount from "../components/Counter";
import Items from "../components/Items";
import ActionButtons from "../buttons/ActionButtons";
import WinnerPage from "../pages/WinnerPage";
import styles from "../styles/App.module.scss";
import StartGameButton from "../buttons/StartGameButton";
const App: React.FC = () => {
  const { user, playerName } = useAuth();
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

  const handleStartGame = () => {
    setShowInstructions(false);
  };

  const handleEndGame = async () => {
    if (user) await updatePlayerScore(user.id, score);
    resetGame();
    setShowInstructions(true);
  };

  return (
    <div className={styles.mainWrapper}>
      {showInstructions ? (
        <>
          {" "}
          <InstructionsPage user={user} />
          <StartGameButton handleStartGame={handleStartGame} />
        </>
      ) : !numbers.every((item) => item.hold) ? (
        <>
          <h2>Hello, {playerName}!</h2>
          <ChoosenNumber heldNumber={heldNumber} handleSetNumber={setNumber} />
          <RollCount score={score} />
          <Items numbers={numbers} setHoldTrue={setHoldTrue} />
          <ActionButtons
            handleRollNumber={rollNumber}
            handleResetCount={() => resetGame()}
          />
        </>
      ) : (
        <WinnerPage
          score={score}
          handleResetCount={handleEndGame}
          player_name={playerName}
          onEndGame={handleEndGame}
        />
      )}
    </div>
  );
};

export default App;
