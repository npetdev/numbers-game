import React from "react";
import styles from "../styles/WinnerPage.module.scss";
import { useAuth } from "../hooks/useAuth";
import type { WinnerPageProps } from "../types/appTypes";

const WinnerPage: React.FC<WinnerPageProps> = ({ score, resetGame }) => {
  const { playerName } = useAuth();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        🎉 Congratulations {playerName ? playerName : "Player"} !!! 🎉
      </h1>
      <p className={styles.text}>You won the game with {score} rolls!</p>
      <button className={styles.button} onClick={resetGame}>
        🔄 Back to Start
      </button>
    </div>
  );
};

export default WinnerPage;
