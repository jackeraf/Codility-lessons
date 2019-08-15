// time O(n^2) because of sorting ?? space 0(min(n))

// function solution(x, arr){
//     let nums = {};
//     let position = -1;

//     for(let i = 0; i < arr.length; i++){
//         const num = arr[i];
//         if(!(num in nums)){
//             nums[num] = +num;
//         }
//         if(num === x) position = i;
//     }
//     let uniqueNumsSorted = Object.values(nums).sort((a,b)=> a -b);
//     for(let i = 1; i < uniqueNumsSorted.length; i++){
//         const prevNum = uniqueNumsSorted[i-1];
//         const currentNum = uniqueNumsSorted[i];
//         const difference = currentNum - prevNum;
//         if(difference > 1) return -1;
//     }
//     return position;
// }


// time O(n) space O(x)

function solution(x, arr){
    let prevNums = 0;
    let nums = {};

    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        if(!(num in nums) && num <= x){
            nums[num] = +num;
            prevNums++;
        }
        if(prevNums === x) return i;
    }
    return -1;
}

solution(5, [1,  3,  1,  4,  2,  3,  5,  4]);

// Another time O(n) space O(x) solution:

// function solution(x, arr){
//     let steps = x;
//     let numsBefore = new Array(steps+1);
//     for(let i = 0; i < arr.length; i++){
//         // we check if the number corresponding to numsBefore index has been seen: 
//         if(!numsBefore[arr[i]]){
//             numsBefore[arr[i]] = true;
//             steps--;
//         }
//         if(steps == 0) return i;
//     }
//     return -1;
// }

// solution(5, [1,  3,  1,  4,  2,  3,  5,  4]);