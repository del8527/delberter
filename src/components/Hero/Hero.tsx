import Grid from "../Grid/Grid";
import AutoHackedText from "../HackedText/AutoHackedTexts/AutoHackedText/AutoHackedText";
import AutoHackedTexts from "../HackedText/AutoHackedTexts/AutoHackedTexts";
import HoverHackedText from "../HackedText/HoverHackedText";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.Hero}>
      Delbert Luo
      <AutoHackedText
        text="I'm a."
        characterStyles={
          {
            "font-size": "40px",
            width: "30px",
          } as React.CSSProperties
        }
      />
      <AutoHackedTexts
        texts={["superlong", "longer", "short"]}
        characterStyles={
          {
            "font-size": "50px",
            width: "30px",
            "font-weight": "900",
          } as React.CSSProperties
        }
      />
      <div style={{ width: "400px" }}>
        <Grid shrinkWidth={true}>
          <HoverHackedText
            text="dell test 123"
            characterStyles={
              {
                "font-size": "40px",
                width: "30px",
              } as React.CSSProperties
            }
          />
        </Grid>
      </div>
    </div>
  );
}

export default Hero;
