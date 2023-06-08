/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = nums.length - 1;
  let k = nums.length;
  while (index > 0) {
      if (nums[index] == nums[index - 1]) {
          nums.splice(index, 1);
          k--;
          continue;
      }
      index--;
  }
  return k;
};