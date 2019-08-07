// First 66% solution using a hashmap
// time O(N)

// function solution(arr) {
//   let nums = {};
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if (!(num in nums)) {
//       nums[num] = false;
//     } else {
//       nums[num] = true;
//     }
//   }
//   for (let key in nums) {
//     if (!nums[key]) return +key;
//   }
//   return 0;
// }

// time O(n^2) space O(1)

function solution(arr) {
  let length = arr.length;
  if (length === 1) {
    return arr[0];
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < length - 1; i += 2) {
    if (arr[i] != arr[i + 1]) {
      return arr[i];
    }
  }
  return arr[length - 1];
}

// Solution suggested with Exclusive operator (XOR) time O(n) space O(1) ?

// function solution(arr) {
//   let result = 0;
//   for (let number of arr) {
//     result ^= number;
//   }
//   return result;
// }
