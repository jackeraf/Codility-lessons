// O(n^2) solution:

/*
function solution(arr, min = Infinity, p = 1){
      let sumUntilP = 0;
      let sumFromPToEnd = 0;
      let difference = 0;
      
      if(p === arr.length){
        return min;
      }
      // sum until P:
      for(let i = 0; i < p; i++){
        const num = arr[i];
        sumUntilP += num;
      }
      // sum from P until end of array:
      for(let i = p; i < arr.length; i++){
        const num = arr[i];
        sumFromPToEnd += num;
      }
      difference = Math.abs(sumFromPToEnd - sumUntilP);

      min = Math.min(min, difference);
      p +=1;
      return solution(arr, min, p);
    }

    solution([3,1,2,4,3]);
*/

// Time complexity 0(n + n)

function solution(arr) {
  if (arr.length === 0) return -1;

  let left = arr[0];
  // right will be the total sum first time thats why the 1st loop
  let right = 0;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    right += num;
  }
  // subtract 3 from 10 sum
  right -= left;

  for (let i = 1; i < arr.length; i++) {
    let difference = Math.abs(left - right);
    left += arr[i];
    right -= arr[i];

    min = Math.min(min, difference);
  }
  // 0(n + n)
  return min;
}
