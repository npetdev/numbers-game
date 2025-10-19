import styles from "../styles/App.module.scss";
import type { ItemsProps } from "../types/appTypes";
const Items: React.FC<ItemsProps> = ({ numbers, setHoldTrue }) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.count}>
        {numbers.map((item) => (
          <button
            key={item.id}
            onClick={() => setHoldTrue(item.id)}
            className={item.hold ? styles.activeButton : ""}
          >
            {item.num}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Items;
