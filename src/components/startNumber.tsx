import { chooseNumber } from "../utils/initNumbers";
import styles from "../styles/App.module.scss";
import type { initNumber } from "../types/appTypes";
const StartNumber: React.FC<initNumber> = ({ heldNumber, handleSetNumber }) => {
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
