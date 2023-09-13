import { useEffect, useState } from "react";
import styles from "./AutoHackedTexts.module.scss";

interface IAutoHackedTextsProps {
  texts: Array<string>;
}
function AutoHackedTexts({ texts }: IAutoHackedTextsProps) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval123 = setInterval(() => {
      setIndex((previousIndex) => {
        if (previousIndex === texts.length - 1) {
          return 0;
        }

        return previousIndex + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval123);
    };
  }, [texts.length]);

  return <div className={styles.AutoHackedTexts}>{texts[index]}</div>;
}

export default AutoHackedTexts;
