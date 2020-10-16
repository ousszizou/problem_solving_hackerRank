// nums = [1,2,3,4,5]
// nums1 = [5,5,5,5,5] (special case)

// i = 0 , nums[0] num = 1 , [2,3,4,5] => sum = 14
// i = 1 , nums[1] num = 2 , [1,3,4,5] => sum = 13
// i = 2 , nums[2] num = 3 , [1,2,4,5] => sum = 12
// i = 3 , nums[3] num = 4 , [1,2,3,5] => sum = 11
// i = 4 , nums[4] num = 5 , [1,2,3,4] => sum = 10

// minMaxSum = [14,13,12,11,10] , sort => [10,11,12,13,14]

// min Sum => 10 (minMaxSum[0])
// max Sum => 14 (minMaxSum[4]) 

const filterNums = (nums, i) => {
  const isSameNum = nums.every((num) => num == nums[0]);
  if (isSameNum) {
    return nums[0] * 4;
  }
  return nums.filter((num) => num != nums[i]).reduce((a,b) => a + b);
}

const miniMaxSum = (arr) => {
  let minMaxSum = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = filterNums(arr, i);
    minMaxSum.push(sum);
  }
  minMaxSum.sort((a,b) => a - b);
  return minMaxSum[0] + " " + minMaxSum[minMaxSum.length - 1];
}

console.log(miniMaxSum([1,2,3,4,5]));
console.log(miniMaxSum([5,5,5,5,5]));
