import styles from "../styles/App.module.scss";
type StartGameButtonProps = {
  handleStartGame: () => void;
};
const StartGameButton: React.FC<StartGameButtonProps> = ({
  handleStartGame,
}) => {
  return (
    <div className={styles.controls}>
      <button className={styles.rollButton} onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartGameButton;
