// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reverse = '';
  for (let i = n.length - 1; i >= 0; i -= 1) {
    reverse += n[i];
    console.log(n[i])
  }
  (reverse[-1] === '-') ? `-${(reverse.slice(0, -2))}` : reverse;
  console.log(reverse)
  return reverse;
}
reverseInt(124)
console.log(reverseInt(132))

module.exports = reverseInt;
