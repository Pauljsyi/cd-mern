function bubbleSort(nums){
  for(var i = 0; i < nums.length; i++) {
      for(var j = 0; j < nums.length - i; j++) {
          if(nums[j] > nums[j+1]) {
              var temp = nums[j];
              nums[j] = nums[j+1];
              nums[j+1] = temp;
          }
      }
  }
  return nums;
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(numsRandomOrder));
