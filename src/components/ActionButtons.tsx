import styles from "../styles/App.module.scss";
import type { ButtonsProps } from "../types/appTypes";
const ActionButtons: React.FC<ButtonsProps> = ({ handleRollNumber: randomNumber, handleResetCount }) => {
  return (
    <div className={styles.controls}>
      <button className={styles.rollButton} onClick={randomNumber}>
        Roll
      </button>
      <button className={styles.resetButton} onClick={handleResetCount}>
        Reset
      </button>
    </div>
  );
};
export default ActionButtons;
