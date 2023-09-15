import { SingleCard } from "../../util/allCards";
import Grid from "../Grid/Grid";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

interface ICardsProps {
  cards: Array<SingleCard>;
  short?: boolean;
}
function Cards({ cards, short = false }: ICardsProps) {
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__content}>
        {cards.map((cardData) => {
          return (
            <Grid key={cardData.title}>
              <Card {...cardData} short={short} />
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
