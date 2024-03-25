import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <NavLink className={styles.navbar_link} to="/">
        Home{" "}
      </NavLink>
      <NavLink className={styles.navbar_link} to="/Maiwand">
        Maiwand{" "}
      </NavLink>
      <NavLink className={styles.navbar_link} to="/Marco">
        Marco{" "}
      </NavLink>
      <NavLink className={styles.navbar_link} to="/Reshma">
        Reshma{" "}
      </NavLink>
    </div>
  );
};

export default Navbar;
