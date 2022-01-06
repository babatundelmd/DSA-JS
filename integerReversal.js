

function reversedInt(n) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

console.log(reversedInt(6783))