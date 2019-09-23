// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let charMap1 = {};
  let charMap2 = {};

  let string1 = stringA.toLowerCase();
  for (let char of string1) {
    if (char === ' ' || char === '!' || char === ',' || char === '.') {
      continue;
    } else if (!charMap1[char]) {
      charMap1[char] = 1;
    } else if (charMap1[char]) {
      charMap1[char]++;
    }
  }

  let string2 = stringB.toLowerCase();
  for (let char of string2) {
    if (char === ' ' || char === '!' || char === ',' || char === '.') {
      continue;
    } else if (!charMap2[char]) {
      charMap2[char] = 1;
    } else if (charMap2[char]) {
      charMap2[char]++;
    }
  }

  if (charMap1 === charMap2) {
    return true;
  } else {
    return false;
  }
}

module.exports = anagrams;
