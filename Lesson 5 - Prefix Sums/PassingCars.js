// Time O(n^2) space O(1)

// function solution(arr){
//     let passingCarCounter = 0;

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i +1; j < arr.length; j++){
//             const difference = arr[i] - arr[j];
//             if(difference === -1) passingCarCounter++;
//         }
//     }
//     return passingCarCounter;
// }

// Time O(n) space O(1)

function solution(arr) {
  if (arr.length === 1) return 0;
  let totalPairs = 0;
  let carsEast = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) carsEast++;
    else totalPairs += carsEast;
  }
  return totalPairs > 1000000000 ? -1 : totalPairs;
}

solution([0, 1, 0, 1, 1]);
