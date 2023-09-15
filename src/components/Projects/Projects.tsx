import { ProjectCards } from "../../util/allCards";
import Cards from "../Cards/Cards";
import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div className={styles.Experience}>
      <Cards cards={ProjectCards} />
    </div>
  );
}

export default Projects;
