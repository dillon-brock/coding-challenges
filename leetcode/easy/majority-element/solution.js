var majorityElement = function(nums) {
  const appearances = new Map();

  for (const num of nums) {
    appearances.set(num, appearances.get(num) + 1 || 1);
    if (appearances.get(num) >= nums.length / 2) {
      return num;
    }
  }

};