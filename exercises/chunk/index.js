// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let containerArray = [];
  let chunkArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (chunkArray.length !== size) {
      chunkArray.push(array[i]);
    } else if (chunkArray.length === size) {
      containerArray.push(chunkArray);
      chunkArray = [];
      chunkArray.push(array[i]);
    } else if (i === array.length) {
      chunkArray.push(array[i]);
      containerArray.push(chunkArray);
    }
  }
  return containerArray;
}

module.exports = chunk;
