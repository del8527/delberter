import { ExperienceCards } from "../../util/allCards";
import Cards from "../Cards/Cards";
import styles from "./Experience.module.scss";

function Experience() {
  return (
    <div className={styles.Experience}>
      <Cards cards={ExperienceCards} />
    </div>
  );
}

export default Experience;
