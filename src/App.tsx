import styles from "./App.module.scss";

import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
