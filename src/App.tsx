import styles from "./App.module.scss";

import Cards from "./components/Cards/Cards";
import HackedText from "./components/HackedText/HackedText";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Cards />
      <HackedText text="PLACEHOLDER" />
    </div>
  );
}

export default App;
