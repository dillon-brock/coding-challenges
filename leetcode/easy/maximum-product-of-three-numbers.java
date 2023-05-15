class Solution {
    public int maximumProduct(int[] nums) {

        if (nums.length == 3) return nums[0] * nums[1] * nums[2];

        Arrays.sort(nums);

        int indices[] = getIndices(nums);

        return nums[indices[0]] * nums[indices[1]] * nums[indices[2]];
    }

    public int[] getIndices(int[] nums) {

        boolean allNegative = true;
        for (int n : nums) {
            if (n >= 0) allNegative = false;
        }

        if (!allNegative && 
            (nums[0] * nums[1] > (nums[nums.length - 2] * nums[nums.length - 3]))) {
                return new int[] {0, 1, nums.length - 1};
        } 
        else {
            return new int[] {nums.length - 1, nums.length - 2, nums.length - 3};
        }
    }
}