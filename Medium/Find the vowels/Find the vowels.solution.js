const vowelIndices = word => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let vow = [];
  for(let i =0; i < word.length; i++){
    if(vowels.includes(word[i].toLowerCase())){
      vow.push(i+1);
    }
  }
  return vow;
}