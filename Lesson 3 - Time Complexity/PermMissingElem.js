// time complexity O(n + n) space complexity O(4)

function solution(arr) {
  if (arr.length == 0) return 1;
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
  }
  let sumN = 0;
  for (let i = 1; i <= arr.length + 1; i++) {
    sumN = sumN + i;
  }
  if (sumArr == sumN) return arr.length;
  return sumN - sumArr;
}
