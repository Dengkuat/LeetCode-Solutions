function narcissistic(value) {
  const digits = value.toString()
  const sum = digits.split('').reduce((acc, curr) => acc + Math.pow(Number(curr), digits.length),0)
  return sum === value
}