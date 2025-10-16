import styles from "../styles/App.module.css";
type Props = {
  randomNumber: () => void;
  handleResetCount: () => void;
};
const Buttons: React.FC<Props> = ({ randomNumber, handleResetCount }) => {
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

export default Buttons;
