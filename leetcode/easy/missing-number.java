import java.util.Arrays;

class Solution {
  public int missingNumber(int[] nums) {

    Arrays.sort(nums);
    if (nums[0] != 0) return 0;
    if (nums[nums.length - 1] == nums.length - 1) return nums.length;
    int lower = 0;
    int upper = nums.length - 1;
    int mid = (lower + upper) / 2;
    
    while (lower <= upper) {
      if (nums[mid] > mid)
          upper = mid;
      if (nums[mid] == mid) {
          lower = mid;
      }

      if ((upper - lower) == 1 && nums[upper] > upper) return upper;
      mid = (lower + upper) / 2;
    }

    return 0;
  }
}