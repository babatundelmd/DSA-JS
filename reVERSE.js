// function isPalindrome(string) {
//   const len = string.length;
//   const mid = Math.floor(len / 2);
//   for (let i = 0; i < mid; i++) {
//     if (string[i] !== string[len - 1 - i]) return false;
//   }
//   return true;
// }

// const isPalindrome$ = (string) => {
//   const str = string.split('').reverse().join('');

//   if (string === str) return true;
//   else return false
// };

// console.log(isPalindrome$('GYU'));

// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
 return str.split('').reduce((rev, char) => char + rev, '')
}



console.log(reverse('Babatunde'))