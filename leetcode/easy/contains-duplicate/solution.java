import java.util.Arrays;

class Solution {
    public boolean containsDuplicate(int[] nums) {

        Set<Integer> intSet = new HashSet<>();

        intSet.addAll(
            Arrays.stream(nums)
                .boxed()
                .collect(Collectors.toList())
        );
        return intSet.size() != nums.length;
    }
}