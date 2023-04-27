function containsDuplicate(nums: number[]): boolean {
    
  const found: Set<number> = new Set();

  for (const num of nums) {
      if (found.has(num)) return true;
      found.add(num);
  }

  return false;
};