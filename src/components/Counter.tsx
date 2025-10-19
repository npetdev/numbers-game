import styles from "../styles/App.module.scss";
import type { Count } from "../types/appTypes";

const RollCount: React.FC<Count> = ({ count }) => {
  return <h4 className={styles.counter}>Roll Count: {count}</h4>;
};
export default RollCount;
