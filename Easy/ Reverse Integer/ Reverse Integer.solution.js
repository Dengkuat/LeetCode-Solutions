const reverse = x => {
  let reversed = Number(Math.abs(x).toString().split('').reverse().join(''))
  if(x<0) reversed = reversed * -1;
  if(reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) return 0;
  return reversed;
};
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))

// [-231, 231 - 1] this is the range of values we need to be at else we return 0;
