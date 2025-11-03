import { useState } from "react";
import { Button, Modal, Space } from "antd";
import { useAuth } from "./hooks/useAuth";
import { useGame } from "./hooks/useGame";
import { updatePlayerScore } from "./services/players";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import InstructionsPage from "./pages/InstructionsPage";
import ChoosenNumber from "./components/ChoosenNumber";
import RollCount from "./components/Counter";
import Items from "./components/Items";
import ActionButtons from "./buttons/ActionButtons";
import WinnerPage from "./pages/WinnerPage";
import StartGameButton from "./buttons/StartGameButton";
import styles from "./styles/App.module.scss";

const App: React.FC = () => {
  const { user, logout, playerName } = useAuth();
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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleStartGame = () => setShowInstructions(false);

  const handleEndGame = async () => {
    if (user) await updatePlayerScore(user.id, score);
    resetGame();
    setShowInstructions(true);
  };

  return (
    <div className={styles.mainWrapper}>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        {user ? (
          <Button danger onClick={logout}>
            Logout
          </Button>
        ) : (
          <Space>
            <Button onClick={() => setIsLoginModalOpen(true)}>Login</Button>
            <Button type="primary" onClick={() => setIsSignUpModalOpen(true)}>
              Sign Up
            </Button>
          </Space>
        )}
      </div>
      <Modal
        open={isLoginModalOpen}
        onCancel={() => setIsLoginModalOpen(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <LogInPage />
      </Modal>
      <Modal
        open={isSignUpModalOpen}
        onCancel={() => setIsSignUpModalOpen(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <SignUpPage />
      </Modal>

      {showInstructions ? (
        <>
          <InstructionsPage user={user} />
          <StartGameButton handleStartGame={handleStartGame} />
        </>
      ) : !numbers.every((item) => item.hold) ? (
        <>
          <h2>Hello {playerName}!</h2>
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
          handleResetCount={handleEndGame}
          player_name={playerName}
          onEndGame={handleEndGame}
        />
      )}
    </div>
  );
};

export default App;
