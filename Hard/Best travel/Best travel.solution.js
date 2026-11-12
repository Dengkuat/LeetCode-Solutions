function chooseBestSum(t, k, ls) {
  let combination = [];

  function getCombinations(start, current) {
    if (current.length === k) {
      combination.push([...current]);
      return;
    }

    for (let i = start; i < ls.length; i++) {
      current.push(ls[i]);

      getCombinations(i + 1, current);

      current.pop();
    }
  }
  getCombinations(0, []);

  const allSum = combination.map(x => {
    return x.reduce((acc, curr) => acc + curr, 0);
  });

  const filtered = allSum
    .filter(x => x <= t)
    .sort((a, b) => a - b);

  return filtered[filtered.length - 1] ?? null;
}