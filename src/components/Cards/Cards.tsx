import Card from "../Card/Card";
import styles from "./Cards.module.scss";

function Cards() {
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__content}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
