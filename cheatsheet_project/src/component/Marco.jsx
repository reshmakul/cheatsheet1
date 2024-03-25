import styles from "./Marco.module.css";
import UseContextStructure from "./UseContextStructure";
import UseContextSteps from "./UseContextSteps";

const Marco = () => {
  return (
    <div className={styles.main_marco_container}>
      <div className={styles.main_marco_cointainer_top}>
        <img src="titlecontext.png" alt="" />
        <h2>
          PROBLEM <br />I need to pass state/s <br />
          or other stuff <br />
          into multiple deeply nested child components??? <br /> HOOOOOOOOOOW?
        </h2>
        <h3>
          USE CONTEXT TO THE RESCUEEEEE!
          <br />
          LEEEET'S GOOOOO! 🍄
        </h3>
      </div>

      <div className={styles.titles_container}>
        <div>
          <h2>WHAT? ✌️</h2>
          <div>
            In very simple terms:
            <p>
              It's a system to PASS DATA THROUGH your REACT APP without manually
              passing props down the Tree.
            </p>
            <p>It allows us to "broadcast" a global state to the entire App!</p>
          </div>
        </div>
        <div>
          <h2>WHERE? 😅</h2>
          <div>DUH, in you React Application!</div>
        </div>
        <div>
          <h2>WHY? 💪</h2>
          <div>
            WHY NOT? I mean, do you really want to drill and drill drill props
            down the Tree component? JEEEZZZZZ
          </div>
        </div>
      </div>
      <UseContextStructure />
      <UseContextSteps />
    </div>
  );
};

export default Marco;
