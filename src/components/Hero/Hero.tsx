import Grid from "../Grid/Grid";
import AutoHackedText from "../HackedText/AutoHackedTexts/AutoHackedText/AutoHackedText";
import AutoHackedTexts from "../HackedText/AutoHackedTexts/AutoHackedTexts";
import HoverHackedText from "../HackedText/HoverHackedText";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.Hero} id="#hero">
      <div className={styles.Hero__maxWidthWrapper}>
        <h1 className={styles.Hero__title}>
          Hi, I'm
          <br />
          <AutoHackedText
            text="Delbert Luo"
            characterStyles={
              {
                fontSize: "1.2em",
                fontWeight: "600",
                width: "0.6em",
              } as React.CSSProperties
            }
          />
        </h1>
        <span className={styles.Hero__subtitle}>
          <AutoHackedTexts
            texts={[
              "Third Year @ UWaterloo",
              "Software Engineer",
              "Rock Climber",
              "Math Lover",
            ]}
            characterStyles={
              {
                fontSize: "1em",
                width: "0.6em",
                fontWeight: "900",
              } as React.CSSProperties
            }
          />
        </span>
      </div>
    </div>
  );
}
{
  /* <div style={{ width: "400px" }}>
<Grid shrinkWidth={true}>
  <HoverHackedText
    text="dell test 123"
    characterStyles={
      {
        fontSize: "40px",
        width: "30px",
      } as React.CSSProperties
    }
  />
</Grid>
</div> */
}
export default Hero;
