class Solution {
    public int mySqrt(int x) {
        if (x <= 3) return Integer.signum(x);
        for (long i = 1; i <= x / 2 + 1; i++) {
            if (i > 46330) System.out.println(i * i);
            if (i * i == x) return (int) i;
            if (i * i > x) return (int) i - 1;
        }
        return 0;
    }
}