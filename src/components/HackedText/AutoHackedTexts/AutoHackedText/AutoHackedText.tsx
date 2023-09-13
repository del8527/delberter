import { useEffect, useState } from "react";
import styles from "./AutoHackedText.module.scss";
import hackedTextEffect from "../../../../util/hackedTextEffect";

interface IAutoHackedTextProps {
  text: string;
}
function AutoHackedText({ text }: IAutoHackedTextProps) {
  const [hackedText, setHackedText] = useState<Array<string>>([...text]);

  useEffect(() => {
    hackedTextEffect(hackedText, setHackedText, text);
  }, []);

  return (
    <div className={styles.AutoHackedText}>
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

export default AutoHackedText;
