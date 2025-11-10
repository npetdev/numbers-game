import React from "react";
import styles from "../styles/RootGamePage.module.scss";
import DiceLogo from "../assets/DiceLogo.svg";
const RootGamePage: React.FC = () => {
  return (
    <div className={styles.rootGamePage}>
      <div className={styles.intro}>
        <h1>Welcome to the Game!</h1>
        <p>
          Get ready for an exciting adventure. Roll the dice, face challenges,
          and have fun!
        </p>
        <img src={DiceLogo} alt="Dice Logo" className={styles.introImage} />
      </div>
      <div className={styles.startButtonWrapper}></div>
    </div>
  );
};
export default RootGamePage;
