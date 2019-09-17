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
  // method 1, accounting for negative that gets dropped on reverse
  const reversedNumStr = n.toString().split('').reverse().join('');
  
  // this conditional is expensive
  // if (n < 0) {
  //   return parseInt(reversedNumStr) * -1;
  // }
  // return parseInt(reversedNumStr);

  // efficient using Math.sign

  return parseInt(reversedNumStr) * Math.sign(n);
}

module.exports = reverseInt;
