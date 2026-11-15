const nth_root_equals_digit_sum = n => {
  let range = [];
  for(let i = 0; i <= 50; i++){
    range.push(i)
  }
  let powered = range.map(x => Math.pow(x, 3));

  return powered.map(x => {
    const result =  x.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
  })
}
console.log(nth_root_equals_digit_sum(2));

//the length of the integers should be from 2 5o 50 only
//we check if the number power 3 solution all totaled would return to the actuall number we power by 3