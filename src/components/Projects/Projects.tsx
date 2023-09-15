import { BigProjectCards, SmallProjectCards } from "../../util/allCards";
import Cards from "../Cards/Cards";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div className={styles.Projects}>
      <h1 className={styles.Projects__header}>Projects</h1>
      <Cards cards={BigProjectCards} short={false} />
      <Cards cards={SmallProjectCards} short={true} />
    </div>
  );
}

export default Projects;
