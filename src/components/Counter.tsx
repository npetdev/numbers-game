import React from "react";
import styles from "../styles/App.module.css";

type count = {
  count: number;
};
const RollCount: React.FC<count> = ({ count }) => {
  return (
    <div className={styles.rollCount}>
      <h4 className={styles.counter}>Roll Count: {count}</h4>
    </div>
  );
};

export default RollCount;
