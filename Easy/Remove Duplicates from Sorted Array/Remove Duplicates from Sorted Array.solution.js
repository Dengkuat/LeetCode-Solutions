const removeDuplicates = nums => {
  const unique = [...new Set(nums)];
  nums.splice(0, nums.length, ...unique);    
  return unique.length;
};
