// time O(n)
// space O(1)

// keep the minimal value up to day.
// The profit on day i is profit[i] – min_profit.

function solution(arr) {
  let maxProfit = 0;
  let minDay = Infinity;
  for (let i = 0; i < arr.length; i++) {
    minDay = Math.min(minDay, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minDay);
  }
  return maxProfit;
}
solution([23171, 21011, 21123, 21366, 21013, 21367]);
