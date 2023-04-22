/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length <= 1) return nums;
  for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] == 0) {
          nums.push(...nums.splice(i, 1));
      }
  }
  return nums;
};