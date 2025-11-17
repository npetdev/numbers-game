import styles from "../styles/App.module.scss";
import type { CountProps } from "../types/appTypes";

const RollCount: React.FC<CountProps> = ({ score }) => {
  return <h5 className={styles.counter}>Score: {score}</h5>;
};
export default RollCount;
