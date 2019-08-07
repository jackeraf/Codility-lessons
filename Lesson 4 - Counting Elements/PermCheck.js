/*
Two possible solutions:
    1) sort first and if the difference is greater than 1 then return 0
    time complexity O(n ^ 2), space complexity O(1)
    2) get the max and add a counter variable. The counter should be equal to the max value. That will mean that for [1,2,3,5] the max is 5 BUT the array length (counter in our case) will be 4. Therefore it is not the result we want.
    time complexity O(n), space complexity O(2) => O(1)
*/

/*
1) 
function solution(arr) {
      arr.sort((a,b)=> a-b);
 
      for(let i = 0; i < arr.length -1; i++){
        if(arr[i] + 1 !== arr[i+1]) return 0;
      }
      return 1;
    }
*/

function solution(arr) {
  if (arr.length === 1 && arr[0] > 1) return 0;
  if (arr.length === 1 && arr[0] === 1) return 1;
  let max = -Infinity;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
    counter++;
  }
  return counter === max ? 1 : 0;
}
