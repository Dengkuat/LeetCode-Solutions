const autocomplete = (input, dictionary) => {
  input = input.replace(/[^a-z]/gi, '').toLowerCase()
  return dictionary.filter((x) => x.toLowerCase().startsWith(input)).slice(0, 5);
}
console.log(autocomplete('ai', ['airplane','airport','apple','ball']));
console.log(autocomplete('a$0i', ['airplane','airport','apple','ball']));