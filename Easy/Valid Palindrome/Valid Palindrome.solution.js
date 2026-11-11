const isPalindrome = s => {
  const alphabets = /^[a-z0-9]$/i;
  s = s.toLowerCase().split('').filter(char => alphabets.test(char)).join('')
  const filtered = s.toLowerCase().split('').filter(char => alphabets.test(char)).reverse().join('');
    return filtered === s;
};