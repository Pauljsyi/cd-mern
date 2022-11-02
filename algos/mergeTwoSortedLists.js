const list1a = [1, 2, 4];
const list1b = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
  let arr = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] < list2[j]) {
        arr.push(list1[i]);
      }
      arr.push(list2[j]);
    }
  }
  return arr;
};

console.log(mergeTwoLists(list1a, list1b));
