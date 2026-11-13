const isAnagram = (test, original) => {
  if(test.length !== original.length) return false;
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
};
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("ound", "round"));
console.log(isAnagram("foefet", "toffee"))

//so we will iterate through aq zDSFSWq ed1rq1§edfq desf  aA    AÀnd just check if each character exist otherwise then its not anagram