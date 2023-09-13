import { useState } from "react";
import styles from "./HackedText.module.scss";
import hackedTextEffect from "../../util/hackedText";

interface IHackedTextProps {
  text: string;
}
function HackedText({ text }: IHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>([...text]);
  const handleMouseEnter = () => {
    hackedTextEffect(hackedText, setHackedText, text);
  };

  return (
    <div className={styles.HackedText} onMouseEnter={handleMouseEnter}>
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
