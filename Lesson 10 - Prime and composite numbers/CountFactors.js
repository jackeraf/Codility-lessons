// time O(sqrt(n))
// space O(1)

// For example, given N = 24, the function should return 8,
// because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24.
// There are no other factors of 24.

function divisors(n) {
  let i = 1;
  let result = 0;
  // Without using the sqrt I need to multiply i twice
  while (i * i < n) {
    if (n % i == 0) {
      result += 2;
    }
    i += 1;
  }
  if (i * i === n) result += 1;
  return result;
}

// function divisors(n) {
//   let i = 1;
//   let result = 0;
//   while (i < Math.sqrt(n)) {
//     if (n % i == 0) {
//       result += 2;
//     }
//     i += 1;
//   }
//   if (i === Math.sqrt(n)) result += 1;
//   return result;
// }

divisors(4);
