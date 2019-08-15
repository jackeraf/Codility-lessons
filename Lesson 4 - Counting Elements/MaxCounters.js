// time O(n*m) space O(n*m)

function solution(n, arr){
    let maxCounters = new Array(n).fill(0);
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        const index = x -1;
        if(x === n +1){
          maxCounters = maxCounters.fill(max);
        }else if(1 <= x <= n){
          maxCounters[index] +=1;
          max = Math.max(max, maxCounters[index]);
        }
        arr[i] = maxCounters;
    }
    return maxCounters;
}

solution(5, [3, 4, 4, 6, 1, 4, 4]);