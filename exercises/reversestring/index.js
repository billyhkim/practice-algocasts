// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // method 1 using reverse method
  // return str.split('').reverse().join('');

  // method 2 without reverse method
  // use a for loop to iterate backwards thru the string and concat it to some variable
  // let reversedStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr += str[i];
  // }
  // return reversedStr;

  // method 3 by concatting in front
  let reversedStr = '';
  for (let character of str) {
    reversedStr = character + reversedStr;
    console.log(reversedStr);
  }
  return reversedStr;
}

module.exports = reverse;
