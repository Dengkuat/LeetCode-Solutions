function findOdd(A) {
  A = A.sort((a, b) => a-b);
  let counter = 1;
  let savedNumber = [];
  for(let i = 0; i < A.length; i++){
    if(A[i] === A[i+1]){
      counter++;
    }else{
      savedNumber.push([A[i], counter]);
      counter = 1;
    }
  }
  const returnValue = savedNumber.find(x => x[1] % 2 !== 0)
  return returnValue[0];
}