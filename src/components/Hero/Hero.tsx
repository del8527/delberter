import AutoHackedText from "../HackedText/AutoHackedTexts/AutoHackedText/AutoHackedText";
import AutoHackedTexts from "../HackedText/AutoHackedTexts/AutoHackedTexts";
import styles from "./Hero.module.scss";
import { useIsMobile } from "../../hooks/useIsMobile";
// import DelbertPFP from "../../assets/Delbert.jpg"

function Hero() {
  const { isMobile, isLoading } = useIsMobile(); // isLoading is used to prevent the component from rendering before the hook is loaded

  if (isLoading) {
    return null;
  }

  return (
    <div className={styles.Hero} id="hero">
      <div className={styles.Hero__maxWidthWrapper}>
        <div>
          <h1 className={styles.Hero__title}>
            Hi, I'm
            <br />
            <div className={styles.Hero__title__name}>
              {isMobile ? (
                <>
                  <AutoHackedText
                    text="Delbert"
                    characterStyles={
                      {
                        fontSize: "1.2em",
                        fontWeight: "600",
                        width: "0.6em",
                      } as React.CSSProperties
                    }
                    hackDuration={300}
                  />
                  <AutoHackedText
                    text="Luo"
                    characterStyles={
                      {
                        fontSize: "1.2em",
                        fontWeight: "600",
                        width: "0.6em",
                      } as React.CSSProperties
                    }
                    hackDuration={1000}
                  />
                </>
              ) : (
                <AutoHackedText
                  text="Delbert Luo"
                  characterStyles={
                    {
                      fontSize: "1.2em",
                      fontWeight: "600",
                      width: "0.6em",
                    } as React.CSSProperties
                  }
                  hackDuration={300}
                />
              )}
            </div>
          </h1>
          <span className={styles.Hero__subtitle}>
            <AutoHackedTexts
              texts={[
                // "Prev Software Eng Intern @ Tesla",
                "Incoming Software Engineer, Oct 2026",
                "Soccer and Dodgeball Captain",
                "Dog Lover",
                "Rock Climber",
                "Math Lover",
                // "Badminton Player",
              ]}
              characterStyles={
                {
                  fontSize: "1em",
                  fontWeight: "900",
                } as React.CSSProperties
              }
            />
          </span>
        </div>
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
