import styles from "../styles/App.module.scss";
import type { CountProps } from "../types/appTypes";

const RollCount: React.FC<CountProps> = ({ score }) => {
  return <h4 className={styles.counter}>Roll Count: {score}</h4>;
};
export default RollCount;
