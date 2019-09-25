function threeSum(arr, target) {
  let threeSumArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          threeSumArr.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  console.log(threeSumArr);
}

twoSum([1,2,3,4,5,6,7], 10);