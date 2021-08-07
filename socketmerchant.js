function sockMerchant(n, ar) {
  // Write your code here
  var res = 0;
  ar.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      res++;
    }
  }
  return res;
}
