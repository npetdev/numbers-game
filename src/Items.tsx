import styles from "./styles/App.module.css";

type Numbers = { id: number; num: number | string; hold: boolean }[];
type Props = {
    numbers: Numbers;
    setHoldTrue: (id: number) => void;
};
// Assuming numbers and setHoldTrue are passed as props or managed via context
const Items:React.FC<Props> = ({numbers, setHoldTrue}) => {
  return (
    <>
     <div className={styles.container}>
            <div className={styles.count}>
              {numbers.map((item) => (
                <h4
                  onClick={() => setHoldTrue(item.id)}
                  key={item.id}
                  style={{
                    backgroundColor: item.hold
                      ? "#4CAF50"
                      : "rgb(255, 255, 255)",
                  }}
                >
                  {item.num}
                </h4>
              ))}
            </div>
          </div>
    </>
  )
}

export default Items