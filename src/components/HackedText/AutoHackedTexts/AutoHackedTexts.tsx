import { useEffect, useState } from "react";
import styles from "./AutoHackedTexts.module.scss";
import AutoHackedText from "./AutoHackedText/AutoHackedText";

interface IAutoHackedTextsProps {
  texts: Array<string>;
  characterStyles?: React.CSSProperties;
}
function AutoHackedTexts({ texts, characterStyles }: IAutoHackedTextsProps) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previousIndex) => {
        if (previousIndex === texts.length - 1) {
          return 0;
        }

        return previousIndex + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <AutoHackedText text={texts[index]} characterStyles={characterStyles} />
  );
}

export default AutoHackedTexts;
