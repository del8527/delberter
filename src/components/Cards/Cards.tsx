import Grid from "../Grid/Grid";
import IconContainer from "../IconContainer/IconContainer";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";
import vite from "../../assets/vite.svg";
import react from "../../assets/react.svg";

function Cards() {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__content}>
        {array.map(() => {
          return (
            <Grid>
              <Card
                imgSrc={vite}
                description="CamelBak Insulated Podium Apple Pencil Chopsticks Popeyes iPhone has
                  the and mouse"
                technologyIcons={
                  <IconContainer>
                    <img src={react} height={30} width={30} />
                  </IconContainer>
                }
              />
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
