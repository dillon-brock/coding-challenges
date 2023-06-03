function twoSum(nums: number[], target: number): number[] {
  const complements: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complements.has(complement)) {
          return [i, complements.get(complement) as number];
      }
      else {
          complements.set(nums[i], i);
      }
  }

  return [-1, -1];
};