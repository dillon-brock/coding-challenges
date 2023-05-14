import java.util.Arrays;
import java.util.Collections;


class Solution {
    public int findContentChildren(int[] g, int[] s) {
        if (s.length == 0 || g.length == 0) return 0;
        List<Integer> cookies = Arrays.stream(s).boxed().collect(Collectors.toList());
        Arrays.sort(g);
        Collections.sort(cookies);

        int childIndex = 0;
        int happyChildren = 0;
        
        while (childIndex < g.length && cookies.size() > 0) {
            
            if (cookies.get(0) >= g[childIndex]) {
                happyChildren++;
                childIndex++;

            }
            cookies.remove(0);
        }

        return happyChildren;
    }
}