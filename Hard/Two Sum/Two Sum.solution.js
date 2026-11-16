function twoSum(numbers, target) {
  let solutions = [];
  for(let i = 0; i < numbers.length; i++){
    const finding = target - numbers[i];
   
    for(let j = i+1; j < numbers.length; j++){
      if(numbers[j] === finding){
        solutions.push(i, j)
      }
    }
    
  }
  return solutions;
}