import { useEffect, useState } from "react";
import styles from "./AutoHackedText.module.scss";
import hackedTextEffect from "../../../../util/hackedTextEffect";

interface IAutoHackedTextProps {
  text: string;
  characterStyles?: React.CSSProperties;
}
function AutoHackedText({ text, characterStyles }: IAutoHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>([...text]);

  useEffect(() => {
    hackedTextEffect(hackedText, setHackedText, text);
  }, [text]);

  return (
    <div className={styles.AutoHackedText}>
      {hackedText.map((character, index) => {
        return (
          <span
            key={index}
            className={styles.AutoHackedText__character}
            style={characterStyles}
          >
            {character}
          </span>
        );
      })}
    </div>
  );
}

export default AutoHackedText;
