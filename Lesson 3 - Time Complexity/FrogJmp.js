// Time complexity O(1) and space complexity O(1)

function solution(x, y, d) {
  let remaining = Math.abs(y - x);
  return Math.ceil(remaining / d);
}
