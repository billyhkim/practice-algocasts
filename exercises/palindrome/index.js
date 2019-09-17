// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // method 1
  // let reversedStr = str.split('').reverse().join('');
  
  // if (str === reversedStr) {
  //   return true;
  // } else {
  //   return false;
  // }

  // more efficient comparison return
  // return str === reversedStr;

  // method 2 using every array helper method
  // not preferred way, however interesting approach in comparing str character to its mirror
  return str.split('').every((character, index) => {
    return character === str[str.length - index - 1]
  })
}

module.exports = palindrome;
