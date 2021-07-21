// Memoization is an optimation technique used primarily to speed up computer
// programs by storing the results of expensive function calls
const fibonacci = (num, memo) => {
  memo = memo || {};
  if (num <= 1) return 1;
  if (memo[num]) return memo[num];
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
};

// Recursion

// const fib = n => {
//   if (num <= 1) return 1;

//   return fib(n - 1) + fib(n - 2);
// };

console.log(fibonacci(10));
