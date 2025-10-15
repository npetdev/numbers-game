import styles from "./WinnerPage.module.css";

type Reset = { handleResetCount: () => void };

const WinnerPage = ({ handleResetCount }: Reset) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎉 Congratulations !!! 🎉</h1>
      <p className={styles.text}>You won the game!</p>
      <button className={styles.button} onClick={handleResetCount}>
        🔄 New Game
      </button>
    </div>
  );
};

export default WinnerPage;
