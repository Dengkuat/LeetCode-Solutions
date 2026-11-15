const pigIt = str => {
  const wordValue = str.split(' ').map(word => {
    if (/[,.?!]$/.test(word)) {
      const punc = word.at(-1);
      word = word.slice(0, -1);
      if (!word) return punc;
      const firstChar = word.charAt(0);
      const otherCharacters = word.slice(1);
      return otherCharacters + firstChar + "ay" + punc;
    }

    if (/[,.?!]/.test(word)) return word;
    const firstChar = word.charAt(0);
    const otherCharacters = word.slice(1);
    return otherCharacters + firstChar + "ay";
  });

  return wordValue.join(' ');
};