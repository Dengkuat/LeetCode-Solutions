const towerBuilder = nFloors => {
  let tower = [];

  for (let i = 1; i <= nFloors; i++) {
    let floor = "";

    for (let j = 1; j <= nFloors - i; j++) {
      floor += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      floor += "*";
    }

    for (let j = 1; j <= nFloors - i; j++) {
      floor += " ";
    }
    tower.push(floor);
  }
  return tower;
};