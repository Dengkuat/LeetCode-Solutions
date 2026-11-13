const lengthOfLongestSubstring = s => {
  let currentLength = 0;
  let maxLength = 0;
  let subString = [];

  for(let i = 0; i < s.length; i++){
    if(!subString.includes(s[i])){
      subString.push(s[i]);
    }else{
      const last = subString.indexOf(s[i]);
      subString.splice(0, last + 1);
      subString.push(s[i]);
    }

    currentLength = subString.length;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};  