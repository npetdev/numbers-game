import styles from "../styles/WinnerPage.module.scss";
import type { WinnerPageProps } from "../types/appTypes";

const WinnerPage: React.FC<WinnerPageProps> = ({
  handleResetCount,
  score,
  player_name,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎉 Congratulations {player_name} !!! 🎉</h1>
      <p className={styles.text}>You won the game with {score} rolls!</p>
      <button className={styles.button} onClick={handleResetCount}>
        🔄 Back to Start
      </button>
    </div>
  );
};

export default WinnerPage;
