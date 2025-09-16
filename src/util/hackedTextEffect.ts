const hackedTextEffect = (
  hackedText: Array<string>,
  setHackedText: React.Dispatch<React.SetStateAction<Array<string>>>,
  originalText: string,
  hackDuration: number = 0
) => {
  const special_unicode = "₯₳₴₻ℂℌℝℳⅉℰ⅊ⅅ!?Ψ";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + special_unicode;
  let iterations = 0;
  const startTime = Date.now();

  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    
    if (elapsed < hackDuration) {
      setHackedText(
        originalText.split('').map(() => 
          characters[Math.floor(Math.random() * characters.length)]
        )
      );
    } else {
      setHackedText(
        hackedText.map((_character, index) => {
          if (index < iterations) {
            return originalText[index];
          } else if (index < originalText.length) {
            return characters[Math.floor(Math.random() * characters.length)];
          } else {
            return "";
          }
        })
      );
      
      if (iterations >= originalText.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }
  }, 20);
};

export default hackedTextEffect;
