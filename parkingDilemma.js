function carParkingRoof(cars, k) {
  let sortedCars = cars.sort((a, b) => a - b);
  const len = cars.length;
  let res = sortedCars[len - 1] - sortedCars[0] + 1;
  for (let i = 0; i + k - 1 < len; i++) {
    res = Math.min(res, sortedCars[i + k - 1] - sortedCars[i] + 1);
  }
  return res;
}
