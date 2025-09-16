import { useEffect, useState } from "react";
import styles from "./AutoHackedText.module.scss";
import hackedTextEffect from "../../../../util/hackedTextEffect";
import clsx from "clsx";

interface IAutoHackedTextProps {
  text: string;
  characterStyles?: React.CSSProperties;
  hackDuration?: number; // Duration in milliseconds
}
function AutoHackedText({ text, characterStyles, hackDuration = 0 }: IAutoHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>([...text]);

  useEffect(() => {
    hackedTextEffect(hackedText, setHackedText, text, hackDuration);
  }, [text, hackDuration]);

  return (
    <div className={styles.AutoHackedText}>
      {hackedText.map((character, index) => {
        // const hackedCharacter = text[index] !== character;
        return (
          <span
            key={index}
            className={clsx(
              styles.AutoHackedText__character
              // hackedCharacter && styles["AutoHackedText__character--hacked"]
            )}
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
