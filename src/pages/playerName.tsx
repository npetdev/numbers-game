import React from "react";
import styles from "../styles/PlayerInput.module.scss";

type PlayerProps = {
  playerName: string;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
};

const PlayerInput: React.FC<PlayerProps> = ({ playerName, setPlayerName }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Enter Your Name</h3>
      <input
        type="text"
        className={styles.input}
        placeholder="Type your name..."
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
    </div>
  );
};

export default PlayerInput;
