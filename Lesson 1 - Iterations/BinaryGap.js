// time O(n) space 0 (1)

function solution(n) {
  let binary = (n >>> 0).toString(2);
  let max = -Infinity;
  let gapStart = false;
  let zeroCounter = 0;

  for (let i = 0; i < binary.length; i++) {
    const number = +binary[i];
    if (number === 1 && !gapStart) {
      gapStart = true;
    } else if (number === 1 && gapStart) {
      max = Math.max(max, zeroCounter);
      zeroCounter = 0;
    } else {
      zeroCounter++;
    }
  }
  return max === -Infinity ? 0 : max;
}
