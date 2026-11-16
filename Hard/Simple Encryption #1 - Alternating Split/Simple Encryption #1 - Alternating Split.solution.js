function encrypt(text, n) {
  if (!text || n <= 0) return text;

  let count = 0;
  let s = text;

  do {
    let odd = '';
    let even = '';

    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        even += s[i];
      } else {
        odd += s[i];
      }
    }

    s = odd + even;
    count++;

  } while (count < n);

  return s;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  
  let count = 0;
  let s = encryptedText;
  
  do {
  const middle = Math.floor(s.length / 2);
  const odd = s.slice(0, middle);
  const even = s.slice(middle);
  
  let original = '';
  for (let i = 0; i < even.length; i++) {
    original += even[i];
    if (i < odd.length) {
      original += odd[i];
    }
  }
  s = original;
  count++;
  
  } while (count < n);
  
  return s;
  }