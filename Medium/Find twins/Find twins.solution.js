const elimination = arr => {
  arr = arr.sort((x, y) => x - y);
  const imposter = arr.find((_, i) => arr[i] === arr[i+1]);
  return imposter?imposter:null;
}