/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let numHash = {};

  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (numHash[num] !== undefined)
          return true;
      numHash[num] = i;
  }
  return false;
};