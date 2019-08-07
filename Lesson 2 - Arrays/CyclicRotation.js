// time O(n) space O(n)

function solution(arr, k) {
  let rotatedA = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    //rotarrted index needs to "wrap" around end of array
    let rotatedIndex = (i + k) % arr.length;

    rotatedA[rotatedIndex] = arr[i];
  }
  return rotatedA;
}
