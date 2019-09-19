function twoSum(arr, target) {
  let twoSumArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        twoSumArr.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(twoSumArr);
}

twoSum([1,2,3,4,5], 10);