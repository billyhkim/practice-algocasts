// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCountObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!charCountObj.hasOwnProperty(str[i])) {
      charCountObj[str[i]] = 1;
    } else {
      charCountObj[str[i]]++;
    }
  }
  return Object.keys(charCountObj).reduce((a, b) => charCountObj[a] > charCountObj[b] ? a : b);
}

module.exports = maxChar;
