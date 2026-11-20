const patterMatching = (pattern, source) => {
  let match = 0;
  const size = pattern.length;
  const vowels = /[aeiouy]/;
  
  for (let i = 0; i <= source.length - size; i++) {
  let count = 0;
  
  for (let j = 0; j < size; j++) {
    if (pattern[j] === '0' && vowels.test(source[i + j])) {
      count++;
    } else if (pattern[j] === '1' && !vowels.test(source[i + j])) {
      count++;
    }
  }
  if (count === size) {
    match++;
  }
  }
  
  return match;
  };
  console.log(patterMatching("010", "amazing"))