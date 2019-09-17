// time O(n)
// space O(n)

// function solution(arr) {
//   if (arr.length === 0) return -1;
//   if (arr.length === 1) return 0;
//   let leader = null;
//   let frequency = {};
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (!(num in frequency)) {
//       frequency[num] = {
//         freq: 1,
//         dominators: [i]
//       };
//     } else {
//       frequency[num].freq++;
//       if (frequency[num].freq > max) {
//         leader = num;
//         max = frequency[num].freq;
//         frequency[num].dominators.push(i);
//       }
//     }
//   }
//   return max > arr.length / 2 ? frequency[leader].dominators[0] : -1;
// }

// time O(2n) or O(n+n)
// space O(1)

function solution(arr) {
  const n = arr.length;
  let size = 0;
  let value = null;
  for (let i = 0; i < arr.length; i++) {
    if (size === 0) {
      size += 1;
      value = arr[i];
    } else {
      if (value !== arr[i]) {
        size -= 1;
      } else {
        size += 1;
      }
    }
  }
  let candidate = -1;
  if (size > 0) candidate = value;
  let leader = -1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count += 1;
    }
    if (count > arr.length / 2) {
      leader = i;
      return leader;
    }
  }
  return leader;
}

// solution([4,6,6,6,6,8,8]);
solution([3, 4, 3, 2, 3, -1, 3, 3]);
