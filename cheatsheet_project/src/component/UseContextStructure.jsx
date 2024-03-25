import styles from "./UseContextStructure.module.css";
function UseContextStructure() {
  return (
    <div className={styles.title_container}>
      <h1>Main Structure</h1>
      <h2 className={styles.provider_title}>1 PROVIDER</h2>
      <li>special component</li>
      <li>gives to all child/ren components access to VALUE</li>
      <li>normally it's at the very top of the tree, in main.jsx</li>
      <h2 className={styles.value_title}>2 VALUE</h2>
      <li>
        data that we want to make available to other components (usually a state
        or a function, but it could be anything)
      </li>
      <h2 className={styles.consumers_title}>3 CONSUMERS</h2>
      <li>all the components that read the provided context VALUE</li>
      <li>we can create as many as needed that consume the same VALUE</li>
    </div>
  );
}

export default UseContextStructure;
