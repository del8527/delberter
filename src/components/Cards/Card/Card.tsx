import styles from "./Card.module.scss";
import { useRef, useState } from "react";

interface ICardProps {
  imgSrc: string;
  description: string;
  technologyIcons: JSX.Element;
}

function Card({ imgSrc, description, technologyIcons }: ICardProps) {
  const cardRef = useRef(null);
  const [cardCharacters, setCardCharacters] = useState<string>("");
  const [cardXPosition, setCardXPosition] = useState<number>(0);
  const [cardYPosition, setCardYPosition] = useState<number>(0);

  const special_unicode = "ℌℝℳℂⅉ⅊ⅅΨ";
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" +
    special_unicode;
  const randomChar = () => {
    return characters[Math.floor(Math.random() * (characters.length - 1))];
  };
  const randomString = (length: number) => {
    return Array.from(Array(length)).map(randomChar).join("");
  };

  const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
    handleOnMove(e.clientX, e.clientY);
  };
  const handleTouchMove = (e: React.TouchEvent<Element>) => {
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
      setCardCharacters(randomString(1500));
    }
  };

  const cardCharactersStyle = {
    "--x": `${cardXPosition}px`,
    "--y": `${cardYPosition}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.Wrapper}>
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
          <img src={imgSrc} alt="image" />
        </div>
        <div className={styles.Card__gradient}></div>
        <div className={styles.Card__characters} style={cardCharactersStyle}>
          {cardCharacters}
        </div>
      </div>
      <div className={styles.MetaContainer}>
        <div className={styles.MetaContainer__description}>{description}</div>

        <div className={styles.MetaContainer__technologies}>
          {technologyIcons}
        </div>
      </div>
    </div>
  );
}

export default Card;
