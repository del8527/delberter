import styles from "./Card.module.scss";
import { useRef, useState } from "react";
import vite from "../../assets/vite.svg";

function Card() {
  const cardRef = useRef(null);
  const [cardLetters, setCardLetters] = useState<string>("");
  const [cardXPosition, setCardXPosition] = useState<number>(0);
  const [cardYPosition, setCardYPosition] = useState<number>(0);

  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomChar = () => {
    return chars[Math.floor(Math.random() * (chars.length - 1))];
  };
  const randomString = (length: number) => {
    return Array.from(Array(length)).map(randomChar).join("");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleOnMove(e.clientX, e.clientY);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    handleOnMove(touch.clientX, touch.clientY);
  };
  const handleOnMove = (clientX: number, clientY: number) => {
    const rect = (
      cardRef.current as HTMLDivElement | null
    )?.getBoundingClientRect();
    if (rect) {
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      setCardXPosition(x);
      setCardYPosition(y);
      setCardLetters(randomString(1500));
    }
  };

  const cardLettersStyle = {
    "--x": `${cardXPosition}px`,
    "--y": `${cardYPosition}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.CardTrack}>
      <div className={styles.CardTrack__wrapper}>
        <div
          className={styles.Card}
          ref={cardRef}
          onMouseMove={(e: React.MouseEvent) => {
            handleMouseMove(e);
          }}
          onTouchMove={(e: React.TouchEvent) => {
            handleTouchMove(e);
          }}
        >
          <div className={styles.Card__image}>
            <img src={vite} alt="image" />
          </div>
          <div className={styles.Card__gradient}></div>
          <div className={styles.Card__letters} style={cardLettersStyle}>
            {cardLetters}
          </div>
        </div>
        <div className={styles.Card__corners}>
          <span className={styles.Card__corners__corner}></span>
          <span className={styles.Card__corners__corner}></span>
          <span className={styles.Card__corners__corner}></span>
          <span className={styles.Card__corners__corner}></span>
        </div>
      </div>
    </div>
  );
}

export default Card;
