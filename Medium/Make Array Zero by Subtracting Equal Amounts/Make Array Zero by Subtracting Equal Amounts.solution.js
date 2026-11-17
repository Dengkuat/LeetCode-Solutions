const minimumOperations = nums => {
  let sum = nums.reduce((a, c) => a + c, 0);
  let count = 0;

  while (sum !== 0) {
    const smallest = Math.min(...nums.filter(num => num > 0));

    nums = nums.map(num => {
      if (num > 0) {
        return num - smallest;
      }

      return num;
    });

    count++;
    sum = nums.reduce((a, c) => a + c, 0);
  }

  return count;
};