// time O(n)
// space O(1)

function solution(arr) {
  let value = null;
  let size = 0;
  for (let i = 0; i < arr.length; i++) {
    if (size === 0) {
      size += 1;
      value = arr[i];
    } else {
      if (arr[i] !== value) {
        size -= 1;
      } else {
        size += 1;
      }
    }
  }
  let candidate = -1;
  let counter = 0;
  if (size > 0) candidate = value;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      counter += 1;
    }
  }
  if (counter < arr.length / 2) return 0;
  let equiCounter = 0;
  let countToLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      countToLeft++;
    }
    if (
      countToLeft > (i + 1) / 2 &&
      counter - countToLeft > (arr.length - i - 1) / 2
    ) {
      equiCounter += 1;
    }
  }
  return equiCounter;
}

solution([4, 3, 4, 4, 4, 2]);
