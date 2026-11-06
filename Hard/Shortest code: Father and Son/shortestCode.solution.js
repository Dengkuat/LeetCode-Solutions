const sc = s =>  {
  let result = '';
    for (let i = 0; i<s.length; i++){
      if (s.includes(s[i].toLowerCase()) && s.includes(s[i].toUpperCase())) result += s[i];
    }
    return result;
}

//test cases
// "Aab" --> "Aa"
// "AabBc" -->  "AabB"
// "AaaaAaab" --> "AaaaAaa"
// "aAAAaAAb" --> "aAAAaAA"

