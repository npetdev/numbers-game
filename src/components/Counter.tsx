import styles from "../styles/App.module.scss";
import type { CountProps } from "../types/appTypes";

const RollCount: React.FC<CountProps> = ({ count }) => {
  return <h4 className={styles.counter}>Roll Count: {count}</h4>;
};
export default RollCount;
