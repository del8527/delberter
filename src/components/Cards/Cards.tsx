import { ExperienceCards } from "../../util/allCards";
import Grid from "../Grid/Grid";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

function Cards() {
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__content}>
        {ExperienceCards.map((cardData) => {
          return (
            <Grid>
              <Card {...cardData} />
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
