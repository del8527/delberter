import { ProjectCards } from "../../util/allCards";
import Cards from "../Cards/Cards";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div className={styles.Projects}>
      <h1 className={styles.Projects__header}>Projects</h1>
      <Cards cards={ProjectCards} />
    </div>
  );
}

export default Projects;
