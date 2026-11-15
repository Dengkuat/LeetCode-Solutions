const isPangram = string => {
  const sorted = string.replace(/\s/g, "").toLowerCase().split('').sort().join('');
  for(let i = 0; i <= sorted.length; i++){
    return sorted[i] !== sorted[i+1]?true:false
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram"));
