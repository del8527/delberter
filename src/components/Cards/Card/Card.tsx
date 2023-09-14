import styles from "./Card.module.scss";
import { useRef, useState } from "react";

interface ICardProps {
  imageSource: string;
  title: string;
  date?: string;
  role?: string;
  description: string;
  technologies: Array<string>;
}

function Card({
  imageSource,
  title,
  date,
  role,
  description,
  technologies,
}: ICardProps) {
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
          <img src={imageSource} alt="image" />
        </div>
        <div className={styles.Card__gradient}></div>
        <div className={styles.Card__characters} style={cardCharactersStyle}>
          {cardCharacters}
        </div>
      </div>
      <div className={styles.MetaContainer}>
        <div className={styles.MetaContainer__title}>
          {title}
          <span className={styles.MetaContainer__title__date}>{date}</span>
        </div>
        <span className={styles.MetaContainer__role}>{role}</span>

        <div className={styles.MetaContainer__description}>{description}</div>

        <div className={styles.MetaContainer__technologies}>
          {technologies.map((technology) => {
            return (
              <span
                key={technology}
                className={styles.MetaContainer__technologies__item}
              >
                {technology}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
