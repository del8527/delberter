import styles from "./App.module.scss";

import Cards from "./components/Cards/Cards";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
