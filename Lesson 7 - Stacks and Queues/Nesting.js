// time O(n)
// space O(n)

function solution(str) {
  if (str.length === 0) return 1;

  const mapping = {
    "(": ")"
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const sign = str[i];
    if (sign in mapping) {
      stack.push(sign);
    } else if (mapping[stack.pop()] !== sign) {
      return 0;
    }
  }
  return stack.length === 0 ? 1 : 0;
}

solution("(()(())())");
