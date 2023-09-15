import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.Header}>
      <nav className={styles.Navigation}>
        <ul className={styles.Navigation__navbar}>
          <li className={styles.Navigation__item}>
            <a href="#hero" className={styles.Navigation__item__link}>
              Home
            </a>
          </li>
          <li className={styles.Navigation__item}>
            <a href="#experience" className={styles.Navigation__item__link}>
              Experience
            </a>
          </li>
          <li className={styles.Navigation__item}>
            <a href="#projects" className={styles.Navigation__item__link}>
              Projects
            </a>
          </li>
          <li className={styles.Navigation__item}>
            <a href="#contact" className={styles.Navigation__item__link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
