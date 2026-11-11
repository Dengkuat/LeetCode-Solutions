const singleNumber = nums => nums.sort((a, b) => a-b).find((v, i) => v !== nums[i+1] && v !== nums[i-1])
