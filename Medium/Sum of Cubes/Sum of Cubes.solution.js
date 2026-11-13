const sumCubes = n => {
  let allIntegers = [];
  for(let i = 1; i <= n; i++){
    allIntegers.push(i);
  }
  return allIntegers.reduce((acc, curr) => acc+Math.pow((curr), 3), 0);
}
