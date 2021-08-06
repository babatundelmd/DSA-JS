// function sortDuplicates() {
//   const arr = [2, 3, 3, 4, 4, 2, 1, 3, 5, 5, 5, 7, 8, 9, 9, 6, 6, 2, 2, 1, 1];
//   sortedArray = {};
//   arr.sort((a, b) => a - b);

//   for (let i = 1; i <= arr.length; i++) {
//     sortedArray[arr[i]] = (sortedArray[arr[i]] || 0) + 1;
//   }

//   return sortedArray;
// }

// console.log(sortDuplicates());
// Using reduce()

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);
