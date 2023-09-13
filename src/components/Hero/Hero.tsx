import Grid from "../Grid/Grid";
import AutoHackedText from "../HackedText/AutoHackedTexts/AutoHackedText/AutoHackedText";
import AutoHackedTexts from "../HackedText/AutoHackedTexts/AutoHackedTexts";
import HackedText from "../HackedText/HackedText";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.Hero}>
      Hello. My name is Delbert Luo
      <HackedText text="I like math" />
      <AutoHackedText text="Razor microsoft mouse." />
      <AutoHackedTexts texts={["apple", "banana", "california"]} />
      <div style={{ width: "400px" }}>
        <Grid shrinkWidth={true}>
          <HackedText text="test 123" />
        </Grid>
      </div>
    </div>
  );
}

export default Hero;
