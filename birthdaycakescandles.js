function birthdayCakeCandles(candles) {
  // Write your code here
  let maxHeight = Math.max(...candles);
  let biggest = 0;
  let count = 0;
  for (let i = 0; i <= candles.length; i++) {
    if (candles[i] === maxHeight) {
      count++;
    }
  }

  return count;
}
