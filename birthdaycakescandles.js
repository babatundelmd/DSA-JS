function birthdayCakeCandles(candles) {
  // Write your code here
  let maxHeight = Math.max(...candles);
  let biggest = 0;
  let count = 0;
  // let sorted = candles.sort((a, b) => a - b)
  for (let i = 0; i <= candles.length; i++) {
    if (candles[i] === maxHeight) {
      count++;
    }

    // if(candles[i] >= biggest) {
    //     biggest = candles[i]
    //     count++
    // }
  }

  return count;
}
