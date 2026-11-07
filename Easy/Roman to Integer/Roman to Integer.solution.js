const romanToInt = s => {
  const search = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  }
  let num = 0;
  for(i = 0; i<s.length; i++){
    let next = search[s[i+1]];
    let current = search[s[i]];
    if(current < next){
      num -= current;
    }else{
      num += current;
    }
  }
  return num
};
console.log(romanToInt("II"));
console.log(romanToInt("III"));
console.log(romanToInt("MMXXVI"));
console.log(romanToInt("IV"));


