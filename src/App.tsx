import styles from "./App.module.scss";

import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
