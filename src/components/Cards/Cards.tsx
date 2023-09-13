import Card from "./Card/Card";
import styles from "./Cards.module.scss";

function Cards() {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__content}>
        {array.map(() => {
          return (
            <div className={styles.Grid}>
              <Card />
              <span className={styles.Grid__corner}></span>
              <span className={styles.Grid__corner}></span>
              <span className={styles.Grid__corner}></span>
              <span className={styles.Grid__corner}></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
