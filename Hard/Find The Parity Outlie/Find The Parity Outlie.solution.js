//higher order function method 
function findOutlier1(integers){
  const even = integers.filter(num => num%2===0);
  const odd = integers.filter(num => num%2!==0);
  return even.length === 1? even[0]:odd[0];
}

// traditonal for loop 
function findOutlier2(integers){
  const odd = [];
  const even = [];
  for(let i = 0; i < integers.length; i++){
    integers[i] % 2 === 0 ? even.push(integers[i]) : odd.push(integers[i])
  }
  return odd.length === 1? odd[0]:even[0]

}
