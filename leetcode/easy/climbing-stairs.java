class Solution {

    public int climbStairs(int n) {
        if (n <= 3) return n;
        int t1 = 0, t2 = 1, nextTerm = t1 + t2;

        for (int i = 3; i < n + 2; i++) {
            t1 = t2;
            t2 = nextTerm;
            nextTerm = t1 + t2;
        }

        return nextTerm;
    }
}