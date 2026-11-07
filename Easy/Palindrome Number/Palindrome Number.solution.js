//using built in functions
const isPalindrome1 = x => {
    const reversed = Number(x.toString().split('').reverse().join(''));
    return x === reversed;
};

//manually checking;
const isPalindrome2 = x => {
  x = String(x)
  let reversed = ''
  for(let i = x.length-1; i >= 0 ; i--){
    reversed+=x[i];
  }
  return reversed === x;
};

//Follow up: Could you solve it without converting the integer to a string?
const isPalindrome3 = x => {
  if (x < 0) return false;
  const original = x;
  let reversed = 0;
  while (x > 0) {
      const lastDigit = x % 10;
      reversed = reversed * 10 + lastDigit;
      x = Math.floor(x / 10);
  }
  return original === reversed;
};