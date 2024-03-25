import styles from "./Marco.module.css";
import UseContextStructure from "./UseContextStructure";
import UseContextSteps from "./UseContextSteps";

const Marco = () => {
  return (
    <div className={styles.main_marco_container}>
      <div className={styles.main_marco_cointainer_top}>
        <img src="titlecontext.png" alt="" />
        <div className={styles.main_marco_container_top_title}>
          PROBLEM <br />I need to pass state/s or other stuff <br />
          into multiple deeply nested child components??? <br /> HOOOOOOOOOOW?
        </div>
        <div className={styles.main_marco_container_bottom_title}>
          USE CONTEXT TO THE RESCUEEEEE!
          <br />
          LEEEET'S GOOOOO! 🍄
        </div>
      </div>

      <div className={styles.titles_container}>
        <div>
          <h2 className={styles.W_titles}>WHAT? ✌️</h2>
          <div>
            In very simple terms:
            <div>
              It's a system to PASS DATA THROUGH your REACT APP without manually
              passing props down the Tree.
            </div>
            <div>
              It allows us to "broadcast" a global state to the entire App!
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.W_titles}>WHERE? 😅</h2>
          <div>DUH, in you React Application!</div>
        </div>
        <div>
          <h2 className={styles.W_titles}>WHY? 💪</h2>
          <div>
            WHY NOT? I mean, do you really want to drill and drill and drill
            props down the Tree component? JEEEZZZZZ!
          </div>
        </div>
      </div>
      <UseContextStructure />
      <UseContextSteps />
    </div>
  );
};

export default Marco;
