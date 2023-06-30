var isValid = function (s) {
  let reg = /(\(\))+|(\[\])|(\{\})/g;
  let cond1 = true;
  let cond2 = true;

  for (let idx = 0; idx < s.length; idx += 2) {
    if (s.slice(idx, idx + 2).match(reg) === null) {
      cond1 = false;
      break;
    }
  }

  for (let idx = 0; idx < s.length / 2; idx++) {
    if ((s[idx] + s[s.length - 1 - idx]).match(reg) === null) {
      cond2 = false;
      break;
    }
  }
  return cond1 || cond2;
};

console.log(isValid("()[]{}"));
console.log(isValid("([)]{}"));
console.log(isValid("(]}}"));
console.log(isValid("()"));
console.log(isValid("([])"));
console.log(isValid("(([]){})"));
