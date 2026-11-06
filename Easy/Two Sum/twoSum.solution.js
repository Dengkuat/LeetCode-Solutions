const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
      const reminder = target - nums[i];
      if (nums.includes(reminder)) {
          const firstIndex = i;
          const secondIndex = nums.indexOf(reminder, i + 1);
          if (secondIndex !== -1) {
              return [firstIndex, secondIndex];
          }
      }
  }
};