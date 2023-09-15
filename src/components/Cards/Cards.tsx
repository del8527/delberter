import { SingleCard } from "../../util/allCards";
import Grid from "../Grid/Grid";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

interface ICardProps {
  cards: Array<SingleCard>;
}
function Cards({ cards }: ICardProps) {
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__content}>
        {cards.map((cardData) => {
          return (
            <Grid key={cardData.title}>
              <Card {...cardData} />
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
