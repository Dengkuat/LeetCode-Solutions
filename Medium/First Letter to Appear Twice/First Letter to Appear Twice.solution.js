const repeatedCharacter = s => {
  const seen = [];
  for (let i = 0; i < s.length; i++) {
    if (seen.includes(s[i])) {
      return s[i];
    }
    seen.push(s[i]);
  }
  return seen
};
console.log(repeatedCharacter("abccbaacz"));