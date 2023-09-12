import { useState } from "react";
import styles from "./HackedText.module.scss";

interface IHackedTextProps {
  text: string;
}
function HackedText({ text }: IHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>(text.split(""));
  const special_unicode = "₯₳₴₻ℂℌℝℳⅉℰ⅊ⅅ!?Ψ";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + special_unicode;
  const onMouseOver = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setHackedText(
        hackedText.map((letter, index) => {
          if (index < iterations) {
            return text[index];
          } else {
            return letters[Math.floor(Math.random() * letters.length)];
          }
        })
      );
      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 40);
  };

  return (
    <div
      className={styles.HackedText}
      onMouseOver={() => {
        onMouseOver();
      }}
    >
      {hackedText.map((character, index) => {
        return (
          <span key={index} className={styles.HackedText__character}>
            {character}
          </span>
        );
      })}
    </div>
  );
}

export default HackedText;
