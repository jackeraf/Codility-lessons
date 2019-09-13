// Time 0(n * log(n))
// space O(1)

function solution(arr) {
  if (arr.length < 3) return 0;
  arr.sort((a, b) => a - b);
  return Math.max(
    arr[0] * arr[1] * arr[arr.length - 1],
    arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1]
  );
}

// solution([-3,1,2,-2,5,6]);
solution([-5, 5, -5, 4]); // 125
