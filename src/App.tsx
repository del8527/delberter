import styles from "./App.module.scss";

import Cards from "./components/Cards/Cards";
import HackedText from "./components/HackedText/HackedText";

function App() {
  return (
    <div className={styles.App}>

      <Cards />
      <HackedText text="PLACEHOLDER" />
    </div>
  );
}

export default App;
