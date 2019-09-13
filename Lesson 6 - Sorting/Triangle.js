// time O(N*log(N))
// space O(1)

function solution(arr) {
  if (arr.length < 3) return 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] > arr[i + 2]) return 1;
  }
  return 0;
}

solution([10, 2, 5, 1, 8, 20]); // 1
solution([10, 50, 5, 1]); // 0
