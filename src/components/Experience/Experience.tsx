import { ExperienceCards } from "../../util/allCards";
import Cards from "../Cards/Cards";
import styles from "./Experience.module.scss";

function Experience() {
  return (
    <div className={styles.Experience} id="experience">
      <h1 className={styles.Experience__header}>Experience</h1>
      <p className={styles.Experience__subtitle}>I’m not looking for a new role right now.</p>
      <Cards cards={ExperienceCards} />
    </div>
  );
}

export default Experience;
