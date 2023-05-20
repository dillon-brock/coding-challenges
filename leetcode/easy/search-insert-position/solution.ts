function searchInsert(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1;

  while (low < high) {
      const mid: number = Math.floor(low + (high - low) / 2);

      if (nums[mid] == target) return mid;
      if (nums[mid] < target) low = mid + 1;
      if (nums[mid] > target) high = mid;
  }


  return nums[low] < target ? low + 1 : low;
};