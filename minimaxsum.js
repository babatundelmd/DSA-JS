function miniMaxSum(input) {
  // Write your code here

  var arrClone1 = input.slice();
  var arrClone2 = input.slice();

  var arrMinor = arrClone1.sort(function(a, b) {
    return a - b;
  });
  arrMinor.pop();

  var arrMajor = arrClone2.sort(function(a, b) {
    return b - a;
  });
  arrMajor.pop();

  function getSum(a, b) {
    return a + b;
  }

  var result1 = arrMinor.reduce(getSum);
  var result2 = arrMajor.reduce(getSum);

  return console.log(`${result1} ${result2}`);
}
