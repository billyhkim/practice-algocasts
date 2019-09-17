// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // 1. create map of character freq obj
  let characterMapObj = {};
  // 1a. using for loop with nested conditional
  // for (let i = 0; i < str.length; i++) {
  //   if (!characterMapObj.hasOwnProperty(str[i])) {
  //     characterMapObj[str[i]] = 1;
  //   } else {
  //     characterMapObj[str[i]]++;
  //   }
  // }

  // 1b. map character obj using for of
  for (let character of str) {
    characterMapObj[character] ? characterMapObj[character]++ : characterMapObj[character] = 1;
  }

  // 2. iterate over characterMapObj and determine max value key
  // 2a. using reduce after turning keys into array
  // return Object.keys(characterMapObj).reduce((a, b) => characterMapObj[a] > characterMapObj[b] ? a : b);

  // 2b. using for in
  let max = 0;
  let maxCharacterKey = '';
  for (let character in characterMapObj) {
    if (characterMapObj[character] > max) {
      max = characterMapObj[character];
      maxCharacterKey = character;
    }
  }
  return maxCharacterKey;
}

module.exports = maxChar;
