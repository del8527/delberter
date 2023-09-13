import Grid from "../Grid/Grid";
import HackedText from "../HackedText/HackedText";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.Hero}>
      Hello. My name is Delbert Luo
      <div style={{ width: "400px" }}>
        <Grid shrinkWidth={true}>
          <HackedText text="test 123" />
        </Grid>
      </div>
    </div>
  );
}

export default Hero;
