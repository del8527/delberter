const hackedTextEffect = (
  hackedText: Array<string>,
  setHackedText: React.Dispatch<React.SetStateAction<Array<string>>>,
  originalText: string
) => {
  const special_unicode = "₯₳₴₻ℂℌℝℳⅉℰ⅊ⅅ!?Ψ";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + special_unicode;
  let iterations = 0;

  const interval = setInterval(() => {
    setHackedText(
      hackedText.map((character, index) => {
        if (index < iterations) {
          return originalText[index];
        } else {
          return characters[Math.floor(Math.random() * characters.length)];
        }
      })
    );
    if (iterations >= originalText.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 40);
};

export default hackedTextEffect;
