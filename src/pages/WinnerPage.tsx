import styles from "../styles/WinnerPage.module.scss";
import type { WinnerPageProps } from "../types/appTypes";
const WinnerPage: React.FC<WinnerPageProps> = ({
  handleResetCount,
  count,
  playerName,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎉 Congratulations {playerName} !!! 🎉</h1>
      <p className={styles.text}>you won the game with {count} rolls!</p>
      <button className={styles.button} onClick={handleResetCount}>
        🔄 Back to Start
      </button>
    </div>
  );
};
export default WinnerPage;
