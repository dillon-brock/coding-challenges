import java.util.Arrays;

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {

        Set<Integer> intersection = new HashSet<>();
        
        Arrays.sort(nums2);

        for (int i = 0; i < nums1.length; i++) {
            if (Arrays.binarySearch(nums2, nums1[i]) >= 0) {
                intersection.add(nums1[i]);
            }
        }

        int[] array = intersection.stream().mapToInt(Integer::intValue).toArray();

        return array;
    }
}