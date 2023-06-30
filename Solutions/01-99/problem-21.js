var mergeTwoLists = function (list1, list2) {
  let arr = [...Object.values(list1), ...Object.values(list2)];
  return arr.sort((a, b) => a - b);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// Output: [1,1,2,3,4,4]
console.log(mergeTwoLists([], []));
// Output: []
console.log(mergeTwoLists([], [0]));
// Output: [0]
