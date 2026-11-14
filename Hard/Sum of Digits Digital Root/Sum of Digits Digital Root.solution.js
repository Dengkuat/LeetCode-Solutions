const digitalRoot = n => {
  let check = n;
  do {
    check = check.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
  } while (check > 9);
  return check;
};
