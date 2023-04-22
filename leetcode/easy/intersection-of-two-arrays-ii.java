import java.util.Arrays;

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        ArrayList<Integer> l2 = IntStream.of(nums2)
                                  .boxed()
                                  .collect(Collectors.toCollection(ArrayList::new));
        List<Integer> result = new ArrayList<>();

        for (int n : nums1) {
            int numIndex = l2.indexOf(n);
            if (numIndex >= 0) {
                result.add(n);
                l2.remove(numIndex);
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}