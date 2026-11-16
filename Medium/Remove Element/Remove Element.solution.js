const removeElement = (nums, val) => {
  const filtered = nums.filter((x) => x !== val)
  nums.splice(0, nums.length, ...filtered);
  return nums.length
}