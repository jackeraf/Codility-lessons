// time complexity O(n^2) space O(1)

// function solution(arr){
//     arr.sort((a,b)=> a - b);
//     for(let i = 1; i < arr.length; i++){
//         const prevNum = arr[i-1];
//         const currentNum = arr[i];
//         let difference = currentNum - prevNum;
//         if(prevNum > 0 && currentNum > 0 && difference > 1){
//           return prevNum +1;
//         }
//     }
//     const last = arr[arr.length -1];
//     return last > 0 ? last +1 : 1;
// }

// solution( [-1, -3]);

//  time O(2n) space O(n)

function solution(arr) {
  let seen = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (0 < num <= arr.length) {
      seen[num - 1] = true;
    }
  }
  for (let i = 0; i < seen.length; i++) {
    if (seen[i] === undefined) {
      return i + 1;
    }
  }
  return arr.length + 1;
}

solution([1, 3, 6, 4, 1, 2]);
