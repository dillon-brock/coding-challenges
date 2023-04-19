import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> indices = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (indices.get(target - nums[i]) != null) {
                return new int[] {i, indices.get(target - nums[i])};
            }
            indices.put(nums[i], i);
        }
        return new int[] {};
    };
}