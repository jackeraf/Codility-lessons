// time O(n)
// space O(n)

/*
Put all downstream swimming fishes on a stack.
Any upstream swimming fish has to fight(eat) all
fishes on the stack.
If there is no fish on the stack, the fish survives.
If the stack has some downstream fishes at the end, they also survive.
*/

function solution(sizes, directions) {
  // directions
  // 0 => upstream
  // 1 => downstream
  let survivers = 0;
  const downstreamFishes = [];

  for (let i = 0; i < sizes.length; i++) {
    if (directions[i] === 0) {
      while (downstreamFishes.length > 0) {
        if (downstreamFishes[downstreamFishes.length - 1] > sizes[i]) break;
        else downstreamFishes.pop();
      }
      if (downstreamFishes.length === 0) survivers += 1;
    } else {
      downstreamFishes.push(sizes[i]);
    }
  }

  survivers += downstreamFishes.length;

  return survivers;
}

solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]);
