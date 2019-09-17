// time O(n)
// space O(1)

function solution(arr) {
  if (arr.length === 1) return arr[0];
  let maxIteration = 0;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    maxIteration = Math.max(arr[i], arr[i] + maxIteration);
    max = Math.max(maxIteration, max);
  }
  return max;
}
solution([3, 2, -6, 4, 0]);
