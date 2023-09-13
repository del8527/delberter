import { useState } from "react";
import styles from "./HoverHackedText.module.scss";
import hackedTextEffect from "../../util/hackedTextEffect";

interface IHoverHackedTextProps {
  text: string;
}
function HoverHackedText({ text }: IHoverHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>([...text]);
  const handleMouseEnter = () => {
    hackedTextEffect(hackedText, setHackedText, text);
  };

  return (
    <div className={styles.HoverHackedText} onMouseEnter={handleMouseEnter}>
      {hackedText.map((character, index) => {
        return (
          <span key={index} className={styles.HoverHackedText__character}>
            {character}
          </span>
        );
      })}
    </div>
  );
}

export default HoverHackedText;
