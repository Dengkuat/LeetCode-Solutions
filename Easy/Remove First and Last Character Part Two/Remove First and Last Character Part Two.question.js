const array = string => {
  if (string.split(',').length <= 2) return null;

  return string.split(',')
    .filter((x, y, z) => y !== 0 && y !== z.length - 1)
    .join(' ');
};