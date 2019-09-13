// My first 37% response:
// time O(n)
// space O(n)

// function solution(str, p, q) {
//   const impactFactors = {
//     a: 1,
//     c: 2,
//     g: 3,
//     t: 4
//   };
//   const output = [];

//   for (let i = 0; i < p.length; i++) {
//     const pIndex = p[i];
//     const qIndex = q[i];
//     const pStr = str[pIndex];
//     const qStr = str[qIndex];
//     const pValue = impactFactors[pStr.toLowerCase()];
//     const qValue = impactFactors[qStr.toLowerCase()];

//     let min = Math.min(pValue, qValue);
//     output.push(min);
//   }
//   return output;
// }

solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);
