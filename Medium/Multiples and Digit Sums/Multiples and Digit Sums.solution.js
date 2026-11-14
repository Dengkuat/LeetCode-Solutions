function procedure(n){
  let multiples = [];
  for(let i = n; i <= 100; i++){
    if(i % n === 0){
       multiples.push(i);
    }
  }

  const sumMultiples = multiples.map(x => x.toString().split('').reduce((acc, curr) => acc + Number(curr), 0));

  return sumMultiples.reduce((acc, curr) => acc + curr, 0)
}

