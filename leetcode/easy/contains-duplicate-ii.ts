function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const interval: Set<number> = new Set([]);
  let start: number = 0;
  for (let end = 0; end < nums.length; end++) {
      if (end <= k) {
          if (interval.has(nums[end])) {
              return true;
          }
          interval.add(nums[end]);
          continue;
      }
      interval.delete(nums[start]);
      start++;
      if (interval.has(nums[end])) {
          return true;
      }
      interval.add(nums[end]);
  }
  return false;
};