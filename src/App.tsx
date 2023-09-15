import styles from "./App.module.scss";

import Cards from "./components/Cards/Cards";
import Hero from "./components/Hero/Hero";
import { ExperienceCards, ProjectCards } from "./util/allCards";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Cards cards={ExperienceCards} />
      <Cards cards={ProjectCards} />
    </div>
  );
}

export default App;
