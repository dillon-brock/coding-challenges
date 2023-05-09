import java.util.Arrays;

class Solution {
    public int countSegments(String s) {
        if (s.isEmpty()) return 0;
        Predicate<String> isSegment = w -> w.length() > 0;
        var result = Arrays.stream(s.split(" ")).filter(isSegment).collect(Collectors.toList());
        return result.size();
    }
}