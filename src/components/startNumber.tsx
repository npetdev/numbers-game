import { chooseNumber } from "../utils/initNumbers";
import styles from "../styles/StartNumbers.module.css";
type props = {
  heldNumber: number;
  handleSetNumber: (heldNumber: number) => void;
};
const StartNumber: React.FC<props> = ({ heldNumber, handleSetNumber }) => {
  return heldNumber ? (
    <div className={styles.startcontainer}>
      <button> {heldNumber}</button>
    </div>
  ) : (
    <div className={styles.startcontainer}>
      {chooseNumber.map((number) => (
        <button key={number} onClick={() => handleSetNumber(number)}>
          {number}{" "}
        </button>
      ))}
    </div>
  );
};
export default StartNumber;
