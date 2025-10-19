import React from "react";
import styles from "../styles/App.module.scss";
import type { InstructionsPageProps } from "../types/appTypes";
const InstructionsPage: React.FC<InstructionsPageProps> = ({ handleStartGame }) => {
  return (
    <div className={styles.mainWrapper}>
      <h1>🎲 Welcome to the Game!</h1>
      <div className={styles.instructionsPage}>
        <p>How to Play:</p>
        <ol>
          <li>
            At the start, choose <strong>one number between 1 and 6</strong>.
            This will be your <strong>starting number</strong> and the target
            for the game.
          </li>
          <li>
            Clicking the <strong>Roll</strong> button will randomly change all
            numbers that are not “held” (1–6).
          </li>
          <li>
            After each roll, click on the numbers that match your chosen number
            to “hold” them. Held numbers will no longer change.
          </li>
          <li>
            The goal is to make <strong>all rolling numbers</strong> match your
            chosen number.
          </li>
          <li>
            The game ends successfully when all numbers are held and match your
            chosen number. Try to achieve this with as few{" "}
            <strong>rolls</strong> as possible!
          </li>
        </ol>
      </div>
      <div className={styles.controls}>
      <button className={styles.rollButton} onClick={handleStartGame}>
        Start Game
      </button>
      </div>
    </div>
  );
};
export default InstructionsPage;
