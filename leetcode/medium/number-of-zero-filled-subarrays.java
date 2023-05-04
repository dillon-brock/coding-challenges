class Solution {
    public long zeroFilledSubarray(int[] nums) {
        List<Integer> subArrayLengths = new ArrayList<>();
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) count++;
            if ((nums[i] != 0 || i == nums.length - 1) && count > 0) {
                subArrayLengths.add(count);
                count = 0;
            }
        }

        long total = 0;

        for (Integer l : subArrayLengths) {
            total += getPossiblePermutations(l);
        }

        return total;
    }

    public long getPossiblePermutations(int length) {
        if (length <= 1) return length;
        return length + getPossiblePermutations(length - 1);
    }
}