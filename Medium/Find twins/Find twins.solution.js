const elimination = arr => {
  arr = arr.sort((x, y) => x - y);
  const imposter = arr.find((_, i) => arr[i] === arr[i+1]);
  return imposter?imposter:null;
}
console.log(elimination([
  0,
  5,
  84,
  0,
  15,
  42,
  3
]));
console.log(elimination([2,5,34,1,22,1]));
console.log(elimination([2,2,34,1,22]));
console.log(elimination([2,5,34,1,22]));