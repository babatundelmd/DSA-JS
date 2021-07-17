function plusMinus(arr) {
  // Write your code here
  let positives = 0,
    negatives = 0,
    zeros = 0;
  const length = arr.length;
  if (length > 0 && length <= 100) {
    arr.map(elem => {
      if (elem > 0) {
        positives++;
      } else if (elem < 0) {
        negatives++;
      } else {
        zeros++;
      }

      return elem;
    });
  }

  console.log(positives / length || 0);
  console.log(negatives / length || 0);
  console.log(zeros / length || 0);
}
