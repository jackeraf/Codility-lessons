// Time O(n)
// space O(min(n))

// function solution(arr) {
//   let unique = {};
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     if (!(num in unique)) {
//       unique[num] = true;
//       counter++;
//     }
//   }
//   return counter;
// }

// time O(n long(n))
// space O(1)

function solution(arr) {
  if (arr.length === 0) return 0;
  let counter = 1;
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (current !== next) counter++;
  }
  return counter;
}

solution([2, 1, 1, 2, 3, 1]);
