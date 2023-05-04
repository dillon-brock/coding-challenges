import java.util.Arrays;

class Solution {
    public int thirdMax(int[] nums) {

        Set<Integer> numSet = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        Integer[] uniqueNums = numSet.toArray(new Integer[numSet.size()]);
        Arrays.sort(uniqueNums);
        System.out.println(Arrays.toString(uniqueNums));

        if (uniqueNums.length < 3)
            return (int) uniqueNums[uniqueNums.length - 1];
        else return (int) uniqueNums[uniqueNums.length - 3];
    }
}