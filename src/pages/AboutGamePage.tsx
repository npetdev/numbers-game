import React from "react";
import styles from "../styles/App.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AboutGame: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainWrapper}>
      <h1>🎲 Welcome to the Dice Challenge!</h1>
      <div className={styles.instructionsPage}>
        <p>
          Test your luck and strategy in this fast-paced dice game! 
          Your goal is simple — make <strong>all dice show the same number</strong>.  
          But there’s a twist: <strong>you choose which number</strong> you’re aiming for!
        </p>

        <h2>🧩 How to Play</h2>
        <ol>
          <li>
            Choose a <strong>target number</strong> from <strong>1 to 6</strong>.
          </li>
          <li>
            Press the <strong>Roll</strong> button to roll all the dice. 
            Each die will change to a random number between 1 and 6.
          </li>
          <li>
            When a die shows your target number, click it to{" "}
            <strong>hold</strong> it. Held dice stay locked and won’t roll again.
          </li>
          <li>
            Keep rolling until <strong>all dice</strong> match your target number.
          </li>
        </ol>

        <h2>🏆 How to Win</h2>
        <p>
          You win when every die on the board shows your chosen number.  
          Try to do it in the <strong>fewest rolls possible</strong> and beat your personal best!
        </p>

        <h2>💡 Pro Tips</h2>
        <ul>
          <li>Be strategic — hold dice wisely to save rolls.</li>
          <li>Luck matters, but smart choices make the real difference!</li>
          <li>Experiment with different target numbers and strategies.</li>
        </ul>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p style={{ marginBottom: "1rem" }}>
            Ready to roll? Head back to the home screen and start your first game!
          </p>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/")}
          >
            Go to Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
