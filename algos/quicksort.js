let array = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];
let expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let quickSort = (array) => {
  let pivot = array.length / 2; // --> 6
  // console.log(pivot);
  for (let i = 0; i < pivot; i++) {
    if (array[i] > array[pivot]) {
      let leftIndex = array[i];
      // console.log(array[pivot]);
      console.log(leftIndex);
      for (let j = array.length - 1; j > pivot; j--) {
        if (array[j] < array[pivot]) {
          let rightIndex = array[j];
          let temp = array[i];
          console.log("rightIndex", rightIndex);
          array.splice(i, 1, rightIndex);
          array.splice(j, 1, temp);
        }
      }
    }
  }
};

console.log(quickSort(array));
