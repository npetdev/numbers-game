import styles from "../styles/WinnerPage.module.css";

type Reset = { handleResetCount: () => void };
type Props = {
  count: number;
} & Reset;

const WinnerPage: React.FC<Props> = ({ handleResetCount, count }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎉 Congratulations !!! 🎉</h1>
      <p className={styles.text}>You won the game with {count} rolls!</p>
      <button className={styles.button} onClick={handleResetCount}>
        🔄 New Game
      </button>
    </div>
  );
};

export default WinnerPage;
