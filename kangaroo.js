function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let result;
  if (v1 > v2 && (x2 - x1) % (v2 - v1) === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
  (result = x1), v1, x2, v2.split();
  return (result = kangaroo(x1, v1, x2, v2));
}

console.log(kangaroo(0, 3, 4, 2));
