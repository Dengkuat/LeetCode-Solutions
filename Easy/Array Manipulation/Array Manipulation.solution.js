const arrayManipulation = a => {
  let b = [];

  for (let i = 0; i < a.length; i++) {
    b.push((a[i - 1] ?? 0) + a[i] + (a[i + 1] ?? 0));
  }
  return b
}
console.log(arrayManipulation([4, 0, 1, -2, 3]));

//so my steps are
//l will have to iterate through the array and for each item
//we will have to get the value such as as index - 1 + value + index + 1
//if it is the first then we fill in the previous value with 0 and if its the last then we also full the previoud value with 0
