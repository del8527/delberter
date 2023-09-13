import { useState } from "react";
import styles from "./HackedText.module.scss";
import hackedTextEffect from "../../util/hackedTextEffect";

interface IHackedTextProps {
  text: string;
  autoRefreshTexts?: Array<string>;
}
function HackedText({ text, autoRefreshTexts }: IHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>([...text]);
  const handleMouseEnter = () => {
    hackedTextEffect(hackedText, setHackedText, text);
  };

  return autoRefreshTexts ? (
    <div>auto</div>
  ) : (
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
