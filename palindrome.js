function isPalindrome(string) {
  const len = string.length;
  const mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[len - 1 - i]) return false;
  }
  return true;
}

// console.log(isPalindrome('CAT'));

const isPalindrome$ = string => {
  const str = string
    .split('')
    .reverse()
    .join('');

  if (string === str) return true;
};

console.log(isPalindrome$('GYU'));
