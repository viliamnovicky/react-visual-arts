import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.link}>
          <NavLink className={styles.anchor} to="domov">Domov</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={styles.anchor} to="portfolio">portfolio</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={styles.anchor} to="obchod">obchod</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={styles.anchor} to="cenník">cenník</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={styles.anchor} to="about">o mne / kontakt</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink className={styles.anchor} to="blog">blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
