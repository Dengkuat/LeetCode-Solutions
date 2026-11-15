function isValidIP(str) {
  const octalCheck = str.split('.');
  if(octalCheck.length !== 4) return false;
  str =  str.split('.');
  const nonNumeric = /^\d+$/;
  for(let i = 0; i< str.length; i++){
    if(str[i] < 0 || str[i] > 255) return false;
    if(str[i].startsWith("0") && str[i].length > 1) return false;
    if(!nonNumeric.test(str[i])) return false;
  }
  return true;
}
