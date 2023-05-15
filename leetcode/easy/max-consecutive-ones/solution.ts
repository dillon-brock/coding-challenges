function findMaxConsecutiveOnes(nums: number[]): number {
  let currentCount: number = 0;
  let maxCount: number = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
          currentCount++;
      }
      else currentCount = 0;
      if (maxCount < currentCount) {
          maxCount = currentCount;
      }
  }

  return maxCount;
};